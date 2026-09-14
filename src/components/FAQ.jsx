import { useState } from 'react'
import { faqItems } from '../data/listings'
import Reveal from './Reveal'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 dark:border-slate-700 last:border-b-0">
      <button
        className="w-full flex justify-between items-center gap-3 py-4 sm:py-5 text-left group"
        onClick={onToggle}
      >
        <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white flex-1">
          {item.question}
        </span>
        <span
          className={`flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full flex-shrink-0 transition-colors duration-300 ${
            isOpen ? 'bg-primary text-white' : 'bg-primary-light dark:bg-slate-600 text-primary dark:text-primary'
          }`}
        >
          <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className="grid"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 250ms ease-out' }}
      >
        <div className="overflow-hidden">
          <p className={`pt-1 pb-3 sm:pt-2 sm:pb-4 pr-6 sm:pr-12 text-sm sm:text-base transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'} ${item.answer === "[OWNER TO PROVIDE]" ? "placeholder-text" : "text-gray-600 dark:text-gray-300"}`}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="faq" className="section-padding bg-gray-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">Got Questions?</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <div className="section-title-underline" />
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white dark:bg-slate-700 rounded-2xl px-4 sm:px-6 shadow-sm border border-gray-100 dark:border-slate-600 divide-y divide-gray-200 dark:divide-slate-600 max-h-[800px] sm:max-h-[900px] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
