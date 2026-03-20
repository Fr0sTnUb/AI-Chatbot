import { useState, useCallback } from 'react';
import { analyzeOutfit } from '@/api/analyze';
import type { AnalyzeState } from '@/types';

export function useAnalyze() {
  const [state, setState] = useState<AnalyzeState>({ status: 'idle' });

  const analyze = useCallback(async (file: File) => {
    setState({ status: 'loading' });
    try {
      const data = await analyzeOutfit(file);
      setState({ status: 'success', data });
    } catch (err) {
      setState({
        status:  'error',
        message: err instanceof Error ? err.message : 'Something went wrong.',
      });
    }
  }, []);

  const reset = useCallback(() => setState({ status: 'idle' }), []);

  return { state, analyze, reset };
}
