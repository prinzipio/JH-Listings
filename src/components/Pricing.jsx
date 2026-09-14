import Reveal from './Reveal'

function PriceCard({ label, value, featured = false, delay = 0 }) {
  const isPlaceholder = value === "[OWNER TO PROVIDE]"
  return (
    <Reveal delay={delay}>
      <div
        className={`rounded-xl p-4 sm:p-6 text-center h-full transition-colors duration-200 relative bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 shadow-sm hover:border-primary hover:dark:border-primary`}
      >
        {featured && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </div>
        )}
        <h3 className={`text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2 ${featured ? 'text-gray-600 dark:text-gray-300 mt-2' : 'text-gray-600 dark:text-gray-300'}`}>
          {label}
        </h3>
        <p
          className={`text-xl sm:text-2xl md:text-3xl font-bold ${
            isPlaceholder
              ? 'placeholder-text text-base sm:text-lg'
              : 'text-gray-900 dark:text-white'
          }`}
        >
          {value}
        </p>
      </div>
    </Reveal>
  )
}

export default function Pricing({ listing }) {
  const { pricing } = listing

  return (
    <section id="pricing" className="scroll-mt-20 section-padding bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">Rates</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">Pricing</h2>
          <div className="section-title-underline" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <PriceCard label="Daily Rate" value={pricing.daily} delay={0} />
          <PriceCard label="Weekly Rate" value={pricing.weekly} featured delay={100} />
          <PriceCard label="Monthly Rate" value={pricing.monthly} delay={200} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PriceCard label="Deposit" value={pricing.deposit} delay={300} />
          <PriceCard label="Additional Fees" value={pricing.fees} delay={400} />
        </div>

        <Reveal delay={500}>
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
            Contact us for the most up-to-date pricing and availability.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
