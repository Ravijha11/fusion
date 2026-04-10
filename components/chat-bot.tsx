'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, Send, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { services } from '@/lib/services'

interface Message {
  text: string
  sender: 'user' | 'bot'
}

const COMPANY_DISPLAY = 'DigitalBull'
const PHONE_NUMBER = '555-123-4567'

type ChatBotProps = {
  /** Optional: preselect service when on a service subpage */
  serviceSlug?: string
}

export function ChatBot({ serviceSlug }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(serviceSlug ?? null)
  const [messages, setMessages] = useState<Message[]>([
    { text: `Hi! Welcome to ${COMPANY_DISPLAY}.`, sender: 'bot' },
    { text: 'Which service do you want?', sender: 'bot' },
  ])
  const [inputValue, setInputValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handlePickService = (slug: string) => {
    const service = services.find((s) => s.slug === slug)
    setSelectedServiceSlug(slug)
    setMessages((prev) => [
      ...prev,
      { text: service?.name ?? 'Service', sender: 'user' },
      {
        text: `${service?.name ?? 'This service'} price: Starting at ${service?.startingPrice ?? ''} (same as shown on our website).`,
        sender: 'bot',
      },
      { text: `Phone: ${PHONE_NUMBER}\nCompany: ${COMPANY_DISPLAY}`, sender: 'bot' },
    ])
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }])
    setInputValue('')

    // Fallback: try to map typed text to a known service.
    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase()
      const serviceMatch =
        services.find((s) => lowerMessage.includes(s.slug.replace(/-/g, ' '))) ??
        services.find((s) => lowerMessage.includes(s.shortName.toLowerCase())) ??
        services.find((s) => lowerMessage.includes(s.name.toLowerCase()))

      const botResponse = serviceMatch
        ? `${serviceMatch.name} price: Starting at ${serviceMatch.startingPrice} (same as shown on our website).\nPhone: ${PHONE_NUMBER}\nCompany: ${COMPANY_DISPLAY}`
        : `Please choose a service using the buttons below.\nPhone: ${PHONE_NUMBER}\nCompany: ${COMPANY_DISPLAY}`

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
              <span className="text-sm font-black uppercase tracking-widest text-primary text-glow">Digital<span className="text-white">Bull</span></span>
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
                      "px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed whitespace-pre-line",
                      msg.sender === 'user' 
                        ? "bg-primary text-white self-end rounded-br-sm shadow-[0_0_15px_rgba(var(--primary),0.3)]" 
                        : "bg-white/10 text-white self-start rounded-bl-sm border border-white/5"
                    )}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {!selectedServiceSlug && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => handlePickService(s.slug)}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      {s.shortName}
                    </button>
                  ))}
                </div>
              )}

              {selectedServiceSlug && (
                <div className="mt-2 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedServiceSlug(null)}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Choose another service
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center p-4 bg-black/40 border-t border-white/10 backdrop-blur-md">
              <input 
                type="text" 
                className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-white/40 placeholder:italic px-2"
                placeholder="Type here (optional)…"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg" 
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
