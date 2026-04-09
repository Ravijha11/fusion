'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, Send, X, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Message {
  text: string
  sender: 'user' | 'bot'
}

const PRE_ANSWERED: Record<string, string> = {
  'hello': 'Hello! How can I help you with your appliance repair today?',
  'hi': 'Hi there! Looking for appliance service in New York?',
  'price': 'Our initial service call starts at $89. This includes a full professional diagnosis.',
  'cost': 'Service calls start at $89. We provide a full quote before starting any repair.',
  'refrigerator': 'We specialize in all refrigerator models. Same-day service is usually available!',
  'fridge': 'Fridge issues? Our technicians are experts at cooling system restoration.',
  'washer': 'Washing machine acting up? We fix leaks, drum issues, and electronic failures.',
  'washing machine': 'We repair all major washing machine brands, both front and top load.',
  'dryer': 'Dryer not heating? We handle gas and electric dryer repairs safely.',
  'tv': 'Television problems? We provide expert repair for LED, OLED, and Smart TVs.',
  'computer': 'Laptop or PC issues? Our technicians can assist with hardware and software recovery.',
  'contact': 'You can reach us directly at 555-123-4567 or book an appointment using the form on this page.',
  'phone': 'Our direct line is 555-123-4567. We are available 24/7 for emergencies.',
  'appointment': 'You can book a same-day appointment by clicking "Initialize Repair" at the top of the page.',
  'time': 'Most of our technicians arrive within 60-90 minutes of your request.',
  'warranty': 'All our repairs come with a full parts and labor warranty for your peace of mind.',
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi! I am the Smart Pro assistant. Ask me about our services or pricing!', sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }])
    setInputValue('')

    // Auto-answer logic
    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase()
      let botResponse = "I'm not sure about that. Would you like me to connect you with a technician? You can call us at 555-123-4567."

      for (const [key, value] of Object.entries(PRE_ANSWERED)) {
        if (lowerMessage.includes(key)) {
          botResponse = value
          break
        }
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }])
    }, 600)
  }

  return (
    <>
      <div 
        className="chat-toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-[1000] w-[350px] overflow-hidden rounded-[2rem] glass-dark border-primary/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] font-sans flex flex-col"
          >
            <div className="flex items-center justify-between bg-black/60 p-5 border-b border-white/10">
              <span className="text-sm font-black uppercase tracking-widest text-primary text-glow">Smart<span className="text-white"> Pro</span></span>
              <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors text-white/50">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-[350px] overflow-y-auto p-5 flex flex-col gap-3 bg-black/20" ref={scrollRef}>
              <div className="flex flex-col gap-3">
                {messages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed",
                      msg.sender === 'user' 
                        ? "bg-primary text-white self-end rounded-br-sm shadow-[0_0_15px_rgba(var(--primary),0.3)]" 
                        : "bg-white/10 text-white self-start rounded-bl-sm border border-white/5"
                    )}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center p-4 bg-black/40 border-t border-white/10 backdrop-blur-md">
              <input 
                type="text" 
                className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-white/40 placeholder:italic px-2"
                placeholder="Initialize inquiry..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white hover:bg-white hover:text-primary transition-colors shadow-lg" 
                onClick={handleSend}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>

  )
}
