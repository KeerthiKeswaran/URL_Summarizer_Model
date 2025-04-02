import React from 'react';

interface LoadingIndicatorProps {
  stage: string;
}

export function LoadingIndicator({ stage }: LoadingIndicatorProps) {
  return (
    <div className="space-y-4">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-black animate-pulse rounded-full" 
             style={{ width: '60%' }}></div>
      </div>
      <p className="text-center text-gray-600">{stage}...</p>
    </div>
  );
}