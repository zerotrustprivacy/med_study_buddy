
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { ChatMessage } from '../types';
import UserIcon from './icons/UserIcon';
import BrainIcon from './icons/BrainIcon';

interface MessageProps {
  message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isModel = message.role === 'model';

  const avatar = isModel ? (
    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
      <BrainIcon className="w-5 h-5 text-white" />
    </div>
  ) : (
    <div className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center flex-shrink-0">
      <UserIcon className="w-5 h-5 text-white" />
    </div>
  );

  return (
    <div className={`flex items-start gap-3 ${isModel ? '' : 'flex-row-reverse'}`}>
      {avatar}
      <div
        className={`px-4 py-3 rounded-xl max-w-xl md:max-w-2xl ${
          isModel
            ? 'bg-white dark:bg-slate-800'
            : 'bg-blue-600 text-white dark:bg-blue-700'
        }`}
      >
        <article className="prose prose-slate dark:prose-invert prose-p:my-0 prose-headings:my-2 prose-ul:my-2 prose-ol:my-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default Message;
