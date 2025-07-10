
import React from 'react';
import StethoscopeIcon from './icons/StethoscopeIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-3 md:px-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <StethoscopeIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            MedStudy Buddy
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
