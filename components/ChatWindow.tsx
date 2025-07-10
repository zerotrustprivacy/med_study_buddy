
import React, { useEffect, useRef } from 'react';
import type { ChatMessage } from '../types';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div ref={scrollRef} className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-6">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
        {isLoading && messages[messages.length - 1]?.role === 'model' && (
           <div className="flex justify-start">
             <TypingIndicator />
           </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
