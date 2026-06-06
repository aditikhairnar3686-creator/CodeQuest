// src/components/AITutorChat.tsx

import React, { useState } from 'react';
import { ChatMessage } from '../types';
import { Send, Lightbulb } from 'lucide-react';

interface AITutorChatProps {
  compact?: boolean;
}

const generateAIResponse = (userMessage: string): string => {
  const responses: { [key: string]: string } = {
    'variable': 'A variable is like a labeled box that stores information. For example: `name = "Alice"` creates a variable called "name" and stores the text "Alice" in it.',
    'function': 'Functions are reusable blocks of code. You define them with `def`, give them a name, and you can call them whenever you need.',
    'loop': 'Loops repeat code multiple times. A `for` loop repeats a set number of times, while a `while` loop continues until a condition becomes False.',
    'if': 'If statements let your code make decisions. Based on a condition, different code blocks execute. Example: `if age >= 18: print("Adult")`',
    'data type': 'Python has several data types: str (text), int (whole numbers), float (decimals), bool (True/False). You can check a type with `type()`',
    'help': 'I can help explain any Python concept! Ask me about variables, data types, loops, functions, or any coding concept you\'re stuck on.',
    'default': 'That\'s a great question! In programming, always remember that practice makes perfect. Try writing some code to test your understanding!'
  };

  const lowerMessage = userMessage.toLowerCase();
  for (const [key, value] of Object.entries(responses)) {
    if (lowerMessage.includes(key)) {
      return value;
    }
  }
  return responses.default;
};

export const AITutorChat: React.FC<AITutorChatProps> = ({ compact = false }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hey! 👋 I\'m your AI Tutor. I\'m here to help you understand any Python concepts. Ask me anything!',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 500);
  };

  const displayMessages = compact ? messages.slice(-3) : messages;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-4 flex items-center gap-2">
        <Lightbulb size={20} />
        <h3 className="font-bold">AI Tutor</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {displayMessages.map(message => (
          <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-primary-600 text-white rounded-br-none'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white rounded-bl-none'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-slate-700 px-4 py-2 rounded-lg rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 dark:border-slate-700 p-3 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask me anything..."
          className="flex-1 px-3 py-2 bg-gray-100 dark:bg-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 dark:text-white"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading || !input.trim()}
          className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
