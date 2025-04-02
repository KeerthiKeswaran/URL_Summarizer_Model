import React from 'react';

interface SummaryProps {
  content: string;
}

export function Summary({ content }: SummaryProps) {
  return (
    <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <p className="text-gray-800 leading-relaxed">{content}</p>
    </div>
  );
}