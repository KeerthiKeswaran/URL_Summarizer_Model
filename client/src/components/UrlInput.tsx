import React from 'react';
import { Loader2 } from 'lucide-react';

interface UrlInputProps {
  url: string;
  loading: boolean;
  onUrlChange: (url: string) => void;
  onSummarize: () => void;
}

export function UrlInput({ url, loading, onUrlChange, onSummarize }: UrlInputProps) {
  return (
    <div className="flex gap-4">
      <input
        type="url"
        value={url}
        onChange={(e) => onUrlChange(e.target.value)}
        placeholder="Enter URL to summarize"
        className="flex-1 px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        onClick={onSummarize}
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
  );
}