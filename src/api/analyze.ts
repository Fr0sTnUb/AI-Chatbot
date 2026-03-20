import type { AnalyzeResult, Recommendation } from '@/types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const PROMPT = `
You are a professional fashion stylist. Analyze the outfit in this image.
Return exactly 5 accessory recommendations. For each provide:
1. The accessory name
2. Why it works with this outfit (1-2 sentences, editorial Vogue tone)
3. One specific styling tip
4. A single category word (e.g. Jewelry, Bags, Eyewear, Shoes, Scarves)

Format EXACTLY as:
1. [Name] | [Description] | [Tip] | [Category]
2. ...
(and so on for all 5)
`;

function parseRecommendations(raw: string): Recommendation[] {
  return raw
    .split('\n')
    .filter(line => /^\d\./.test(line.trim()))
    .map((line, i) => {
      const parts = line.replace(/^\d\.\s*/, '').split('|').map(s => s.trim());
      return {
        number:      i + 1,
        name:        parts[0] ?? 'Accessory',
        description: parts[1] ?? '',
        tip:         parts[2] ?? '',
        category:    parts[3] ?? 'Style',
      };
    });
}

export async function analyzeOutfit(file: File): Promise<AnalyzeResult> {
  if (!API_KEY) throw new Error('VITE_GEMINI_API_KEY is not set in your .env.local file.');

  const base64 = await fileToBase64(file);
  const mimeType = file.type as 'image/jpeg' | 'image/png' | 'image/webp';

  const body = {
    contents: [{
      parts: [
        { text: PROMPT },
        { inlineData: { mimeType, data: base64 } },
      ],
    }],
  };

  const res = await fetch(GEMINI_URL, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = (err as { error?: { message?: string } })?.error?.message ?? `API error ${res.status}`;
    if (res.status === 429) throw new Error('API quota exceeded. Try again later.');
    throw new Error(msg);
  }

  const data = await res.json() as {
    candidates: Array<{ content: { parts: Array<{ text: string }> } }>;
  };

  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  return {
    raw,
    recommendations: parseRecommendations(raw),
    analyzedAt: new Date().toISOString(),
  };
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload  = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = reject;
  });
}
