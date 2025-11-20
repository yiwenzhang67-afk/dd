import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Sparkles, X, Loader2 } from 'lucide-react';
import { generateSpiritResponse } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const GeminiSpirit: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '你好呀！我是森林之灵。想聊聊关于自然、成长，或者我们的纪录片吗？🌱', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || loadingState === LoadingState.LOADING) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setLoadingState(LoadingState.LOADING);

    try {
      const responseText = await generateSpiritResponse(userMsg.text);
      
      const spiritMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, spiritMsg]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      const errorMsg: ChatMessage = {
        role: 'model',
        text: "哎呀，森林的信号断了...请稍后再试。",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="spirit">
      {/* Chat Interface */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] glass-panel bg-slate-900/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-emerald-500/30 animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-emerald-900/30 p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="font-medium text-emerald-100">Forest Spirit · 森灵</span>
            </div>
            <button onClick={toggleChat} className="text-emerald-200 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-br-none' 
                      : 'bg-white/10 text-slate-200 rounded-bl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-2 rounded-2xl rounded-bl-none flex items-center gap-2 text-xs text-slate-400">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  森灵正在思考...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-black/20 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="问点什么有趣的事..."
                className="w-full bg-slate-800/50 border border-slate-700 rounded-full pl-4 pr-10 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || loadingState === LoadingState.LOADING}
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-emerald-600 rounded-full text-white hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 ${
          isOpen ? 'bg-slate-800 text-slate-400 rotate-90' : 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:scale-110'
        }`}
      >
        {isOpen ? <X /> : <Sparkles className="animate-pulse" />}
        
        {!isOpen && (
          <span className="absolute right-full mr-3 px-3 py-1 bg-white text-slate-900 text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            召唤森灵
          </span>
        )}
      </button>
    </div>
  );
};

export default GeminiSpirit;