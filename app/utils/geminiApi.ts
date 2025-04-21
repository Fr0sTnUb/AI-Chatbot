import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with the API key from environment variables
// Fallback to hardcoded key if not available (for development)
const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyAg95CL8k-4apaFmrYgcR-AH4u4P_svXz4";
const genAI = new GoogleGenerativeAI(API_KEY);

export interface AccessoryRecommendation {
  items: {
    name: string;
    description: string;
  }[];
  explanation: string;
}

/**
 * Get accessory recommendations based on an outfit image
 * @param imageData - Base64 encoded image data
 * @param customPrompt - Optional custom prompt from the user
 */
export async function getAccessoryRecommendations(
  imageData: string,
  customPrompt?: string
): Promise<AccessoryRecommendation> {
  try {
    // For models that support multimodal input (text + image)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Convert base64 image data to proper format for Gemini API
    const imageBase64 = imageData.split(",")[1];
    
    // Prepare the base prompt
    let basePrompt = `
      You are a fashion stylist expert. Look at this outfit image and recommend accessories that would complement it well.
      Analyze the style, colors, and occasion of the outfit.
      
      Provide recommendations for 3-5 accessories that would enhance this outfit.
      
      Format your response as a JSON object with the following structure:
      {
        "items": [
          {
            "name": "Name of accessory",
            "description": "Brief description of why it works with the outfit"
          }
        ],
        "explanation": "A brief overall explanation of your recommendations"
      }
      
      Just provide the JSON object with no other text.
    `;
    
    // Incorporate the custom prompt if provided
    if (customPrompt && customPrompt.trim()) {
      basePrompt = `
      You are a fashion stylist expert. Look at this outfit image and recommend accessories that would complement it well.
      Analyze the style, colors, and occasion of the outfit.
      
      The user has provided the following additional context or request:
      "${customPrompt.trim()}"
      
      Take the above request into account when making your recommendations.
      
      Provide recommendations for 3-5 accessories that would enhance this outfit.
      
      Format your response as a JSON object with the following structure:
      {
        "items": [
          {
            "name": "Name of accessory",
            "description": "Brief description of why it works with the outfit"
          }
        ],
        "explanation": "A brief overall explanation of your recommendations that addresses the user's specific request"
      }
      
      Just provide the JSON object with no other text.
      `;
    }

    // Process the image and prompt with Gemini
    const result = await model.generateContent([
      basePrompt,
      {
        inlineData: {
          data: imageBase64,
          mimeType: "image/jpeg",
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();
    
    // Extract the JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Failed to parse Gemini response");
    }
    
    return JSON.parse(jsonMatch[0]) as AccessoryRecommendation;
  } catch (error) {
    console.error("Error getting recommendations:", error);
    return {
      items: [
        { 
          name: "Error occurred", 
          description: "We couldn't analyze your outfit. Please try again with a clearer image."
        }
      ],
      explanation: "An error occurred while processing your image."
    };
  }
} 