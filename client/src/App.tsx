import React from 'react';
import { CpuStatus } from './components/CpuStatus';
import { MainContent } from './components/MainContent';
import { About } from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <CpuStatus />
      <MainContent />
      <About />
    </div>
  );
}

export default App;