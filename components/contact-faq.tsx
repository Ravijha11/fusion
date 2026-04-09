'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { trackPhoneClick } from '@/lib/tracking'

const PHONE_HREF = 'tel:+15551234567'

const faqs = [
  {
    question: "What types of appliances do you repair?",
    answer: "We repair a wide range of household appliances, including refrigerators, washing machines, dryers, dishwashers, ovens, microwaves, air conditioners, and more."
  },
  {
    question: "What is your pricing structure for repairs?",
    answer:
      "We provide clear pricing and a written estimate after diagnosis. Final pricing depends on the specific issue, parts required, and labor."
  },
  {
    question: "Do you offer same-day repair services?",
    answer: "Same-day appointments may be available depending on technician availability and scheduling. When you call or submit a request, we’ll share the earliest available options."
  },
  {
    question: "What brands do you service?",
    answer:
      "We service many major appliance brands and models. Share the brand/model when you book so we can match you with the right technician."
  },
  {
    question: "How do I schedule a repair service?",
    answer: "You can schedule a repair service by contacting us via phone, email, or through our online booking system. We’ll arrange a convenient time for our technician to visit your home."
  },
  {
    question: "Is there a warranty on your repairs?",
    answer:
      "Warranty terms can vary depending on the technician, the repair type, and the parts used. Your technician will explain any applicable warranty terms before you approve the repair."
  },
  {
    question: "What areas do you service?",
    answer: "We serve the greater metro area and nearby communities. Contact us with your address so we can confirm coverage and scheduling."
  },
  {
    question: "How do I know if my appliance is worth repairing?",
    answer:
      "During the diagnostic visit, the technician will assess the issue and share options. If the estimated repair cost is close to replacement cost, they can help you compare next steps."
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer: "We sometimes run seasonal offers. Starting prices for each service are listed on our Services pages; call or email for current promotions."
  }
]

export function ContactFaqSection() {
  return (
    <div className="bg-gray-50 py-20 lg:py-32" id="faq-section">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* FAQ Header & Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold text-[#101921] mb-4">FAQs</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the information you need with our frequently asked questions
            </p>
            <div className="bg-[#101921] rounded-2xl p-8 text-white relative overflow-hidden hidden lg:block">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-gray-300 mb-8">
                  If you have additional questions that are not covered in our FAQs page, please contact us.
                </p>
                <Button
                  asChild
                  className="bg-[#F15A24] hover:bg-[#D94A1A] text-white rounded-full px-8 py-6 text-lg font-semibold w-full sm:w-auto"
                >
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2"
                    onClick={() => trackPhoneClick()}
                  >
                    Call us <ArrowRight className="w-5 h-5" aria-hidden />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-xl px-6 data-[state=open]:border-[#F15A24] data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg text-[#101921] hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6 pr-12">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Compatibility note (no brand claims) */}
        <div className="text-center bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-bold text-[#101921] mb-4">Appliance compatibility</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with a wide range of appliance brands and models. To help us confirm availability,
            please include the brand and model number in your request.
          </p>
        </div>

      </div>
    </div>
  )
}
