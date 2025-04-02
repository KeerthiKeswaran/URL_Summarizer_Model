import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-gray-50 rounded-full border-2 border-black">
      <span className="text-sm font-medium">Developed by KeerthiKeswaran</span>
      <div className="flex items-center gap-3 border-l border-gray-300 pl-4">
        <a
          href="https://github.com/KeerthiKeswaran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/keerthikeswaran-k-s/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://portfolio-keerthikeswaran.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors"
        >
          <Globe className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}