import { useState } from 'react';
import { Link2, Loader2 } from 'lucide-react';

interface MainContentProps {
  onSummaryComplete?: (summary: string) => void;
}

export function MainContent({ onSummaryComplete }: MainContentProps) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSummary('');
      
      setLoadingStage('Extracting the content');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setLoadingStage('Summarizing');
      const response = await fetch('http://127.0.0.1:8000/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setSummary(data.summary);
      onSummaryComplete?.(data.summary);
    } catch (err) {
      setError('Failed to summarize the URL. Please try again.');
    } finally {
      setLoading(false);
      setLoadingStage('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex items-center justify-center mb-12">
        <Link2 className="w-8 h-8 mr-2" />
        <h1 className="text-3xl font-bold">URL Summarizer</h1>
      </div>

      <div className="space-y-6">
        {/* URL Input */}
        <div className="flex gap-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL to summarize"
            className="flex-1 px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={handleSummarize}
            disabled={loading}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              'Summarize'
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            {error}
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="space-y-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black animate-pulse rounded-full" 
                style={{ width: '60%' }}
              ></div>
            </div>
            <p className="text-center text-gray-600">{loadingStage}...</p>
          </div>
        )}

        {/* Summary */}
        {summary && (
          <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <p className="text-gray-800 leading-relaxed">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}