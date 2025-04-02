import { useEffect, useState } from 'react';
import { Cpu } from 'lucide-react';

export function CpuStatus() {
  const [status, setStatus] = useState<'Cool' | 'Warm'>('Cool');

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/health'); 
        const data = await response.json();
        
        if (data.status === 'healthy') {
          setStatus('Warm'); 
        } else {
          setStatus('Cool'); 
        }
      } catch (error) {
        console.error('Error fetching server status:', error);
        setStatus('Cool'); 
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border-2 border-black">
      <Cpu className="w-4 h-4" />
      <span className={`font-medium ${status === 'Warm' ? 'text-orange-600' : 'text-blue-600'}`}>
        {status}
      </span>
    </div>
  );
}