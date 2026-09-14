import heroBackground from '../assets/hero-background.jpg'

const getStatusDisplay = (status) => {
  const statusMap = {
    available: {
      icon: "✓",
      text: "Available Now",
      color: "text-emerald-300"
    },
    booked: {
      icon: "✗",
      text: "Fully Booked",
      color: "text-red-300"
    },
    "coming-soon": {
      icon: "⏳",
      text: "Coming Soon",
      color: "text-amber-300"
    }
  };
  return statusMap[status] || statusMap.available;
};

export default function Hero({ listing, onAsk }) {
  const status = getStatusDisplay(listing.bookingStatus);
  const isBooked = listing.bookingStatus === "booked";

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center py-16 md:py-32 transition-colors"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="animate-fadeinup text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
            JH Listings
          </h1>
          <p
            className="animate-fadeinup text-base sm:text-lg md:text-xl text-gray-100 mb-4 sm:mb-6 max-w-2xl mx-auto drop-shadow"
            style={{ animationDelay: '150ms' }}
          >
            Studio condominium rental at Shore 2, MOA Complex
          </p>

          <button
            onClick={onAsk}
            disabled={isBooked}
            className={`animate-fadeinup mb-6 sm:mb-8 text-base sm:text-lg ${
              isBooked
                ? "button-primary opacity-50 cursor-not-allowed"
                : "button-primary"
            }`}
            style={{ animationDelay: '300ms' }}
          >
            {isBooked ? "Currently Unavailable" : "Ask About Availability"}
          </button>

          {/* Hero Stats */}
          <div
            className="animate-fadeinup grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl"
            style={{ animationDelay: '450ms' }}
          >
            <div>
              <div className="text-2xl font-bold text-white">Studio</div>
              <p className="text-gray-200 text-sm">Unit Type</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{listing.features.length}</div>
              <p className="text-gray-200 text-sm">Key Features</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">MOA</div>
              <p className="text-gray-200 text-sm">Complex</p>
            </div>
            <div>
              <div className={`text-2xl font-bold ${status.color}`}>{status.icon}</div>
              <p className="text-gray-200 text-sm">{status.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
