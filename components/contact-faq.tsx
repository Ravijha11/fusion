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
    answer: "Our pricing is transparent and competitive. We provide upfront pricing based on the specific appliance and issue, so there are no surprises."
  },
  {
    question: "Do you offer same-day repair services?",
    answer: "Yes, we offer same-day repair services whenever possible. We understand the urgency of appliance breakdowns and strive to provide prompt assistance."
  },
  {
    question: "What brands do you service?",
    answer: "We service all major appliance brands, including Samsung, LG, Whirlpool, GE, Bosch, and many others. Our technicians are trained to handle a variety of models."
  },
  {
    question: "How do I schedule a repair service?",
    answer: "You can schedule a repair service by contacting us via phone, email, or through our online booking system. We’ll arrange a convenient time for our technician to visit your home."
  },
  {
    question: "Is there a warranty on your repairs?",
    answer: "Yes, we offer a warranty on all our repairs. The warranty duration varies depending on the type of repair, but we stand behind our work and ensure customer satisfaction."
  },
  {
    question: "What areas do you service?",
    answer: "We serve the greater metro area and nearby communities. Contact us with your address so we can confirm coverage and scheduling."
  },
  {
    question: "How do I know if my appliance is worth repairing?",
    answer: "We provide a professional assessment during our diagnostic visit. If the cost of repair is close to the cost of replacement, we’ll advise you on the best course of action."
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
                  If you have additional questions that are not covered in our FAQs page, please do not hesitate to contact us.
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

        {/* Brands Section */}
        <div className="text-center bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-bold text-[#101921] mb-12">We Repair All Major Brand Appliances</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-60">
             {/* Simulated brand logos using text for now, ideally SVGs go here */}
            <h3 className="text-3xl font-black tracking-tighter">SAMSUNG</h3>
            <h3 className="text-3xl font-black">LG</h3>
            <h3 className="text-3xl font-black tracking-widest text-[#E31837]">Whirlpool</h3>
            <h3 className="text-4xl font-serif font-black">GE</h3>
            <h3 className="text-3xl font-black text-blue-900">BOSCH</h3>
            <h3 className="text-3xl font-black text-red-600">KitchenAid</h3>
            <h3 className="text-3xl font-black text-sky-700">SUB-ZERO</h3>
          </div>
        </div>

      </div>
    </div>
  )
}
