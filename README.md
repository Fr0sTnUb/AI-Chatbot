# Outfit Accessory Recommender

A web application that uses Google's Gemini AI to recommend accessories for your outfit. Simply upload a photo of your outfit, and the AI will suggest accessories that complement your style.

## Features

- Real-time outfit analysis using Gemini AI
- User-friendly image upload interface
- Instant accessory recommendations based on your outfit
- Responsive design works on desktop and mobile

## Getting Started

### Prerequisites

- Node.js 16+ installed
- NPM or Yarn

### Installation

1. Clone this repository
   ```
   git clone <repository-url>
   cd outfit-accessory-recommender
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use

1. Open the application in your browser
2. Upload a photo of your outfit using the upload button or drag-and-drop
3. Wait a few seconds for the AI to analyze your image
4. View the recommended accessories along with explanations

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- Google Gemini API
- React Dropzone for image uploads
- TypeScript

## Notes

- The API key is pre-configured but you may need to replace it with your own if usage limits are exceeded
- For best results, use clear images with good lighting
- The application works with JPEG, PNG, and WebP image formats 