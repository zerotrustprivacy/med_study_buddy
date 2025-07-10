
import React, { useState } from 'react';
import SendIcon from './icons/SendIcon';

interface ChatInputProps {
  onSendMessage: (input: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex items-center space-x-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask a medical question..."
        className="flex-1 p-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
        rows={1}
        disabled={isLoading}
        style={{ maxHeight: '150px' }}
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200 flex-shrink-0"
        aria-label="Send message"
      >
        <SendIcon className="w-6 h-6" />
      </button>
    </form>
  );
};

export default ChatInput;
