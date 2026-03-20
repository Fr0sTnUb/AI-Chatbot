export interface Recommendation {
  number: number;
  name: string;
  description: string;
  tip: string;
  category: string;
}

export interface AnalyzeResult {
  raw: string;
  recommendations: Recommendation[];
  analyzedAt: string;
}

export type AnalyzeState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: AnalyzeResult }
  | { status: 'error'; message: string };
