import React from 'react';
import { Link2 } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-center mb-12">
      <Link2 className="w-8 h-8 mr-2" />
      <h1 className="text-3xl font-bold">URL Summarizer</h1>
    </div>
  );
}