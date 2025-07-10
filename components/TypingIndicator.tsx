
import React from 'react';
import BrainIcon from './icons/BrainIcon';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
        <BrainIcon className="w-5 h-5 text-white" />
      </div>
      <div className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 flex items-center space-x-1">
        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
