
import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Chat } from "@google/genai";
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { startChat } from './services/geminiService';
import type { ChatMessage } from './types';

const App: React.FC = () => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const chatInstance = startChat();
      setChat(chatInstance);
      setMessages([
        {
          id: 'initial',
          role: 'model',
          text: "Hello! I'm your MedStudy Buddy. How can I help you prepare for your exams today? Ask me anything from pharmacology to pathophysiology!",
        },
      ]);
    } catch (err) {
      console.error("Failed to start chat session:", err);
      setError("Could not initialize the chat service. Please check your API key configuration.");
    }
  }, []);

  const handleSendMessage = useCallback(async (inputText: string) => {
    if (!chat || isLoading || !inputText.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      text: inputText,
    };
    setMessages(prev => [...prev, userMessage]);

    const modelMessage: ChatMessage = {
      id: `model_${Date.now()}`,
      role: 'model',
      text: '',
    };
    // Add a placeholder for the model's response
    setMessages(prev => [...prev, modelMessage]);

    try {
      const stream = await chat.sendMessageStream({ message: inputText });
      let accumulatedText = '';
      for await (const chunk of stream) {
        accumulatedText += chunk.text;
        setMessages(prev =>
          prev.map(msg =>
            msg.id === modelMessage.id ? { ...msg, text: accumulatedText } : msg
          )
        );
      }
    } catch (err) {
      console.error(err);
      const errorMessage = "Sorry, I encountered an error. Please try again.";
      setMessages(prev =>
        prev.map(msg =>
          msg.id === modelMessage.id ? { ...msg, text: errorMessage } : msg
        )
      );
      setError("Failed to get a response from the AI.");
    } finally {
      setIsLoading(false);
    }
  }, [chat, isLoading]);

  return (
    <div className="flex flex-col h-screen font-sans text-slate-800 dark:text-slate-200">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <ChatWindow messages={messages} isLoading={isLoading} />
      </main>
      <footer className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
      </footer>
    </div>
  );
};

export default App;
