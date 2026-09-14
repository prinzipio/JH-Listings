import { useState, useMemo, useEffect } from 'react'
import Reveal from './Reveal'

function CalendarMonth({ month, year, availableDates, checkIn, checkOut, onDateClick }) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const isInRange = (day) => {
    if (!day || !checkIn || !checkOut) return false
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    const currentDate = new Date(dateStr)
    return currentDate > checkInDate && currentDate < checkOutDate
  }

  const isCheckInDate = (day) => {
    if (!day || !checkIn) return false
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return dateStr === checkIn
  }

  const isCheckOutDate = (day) => {
    if (!day || !checkOut) return false
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return dateStr === checkOut
  }

  const isPastDate = (day) => {
    if (!day) return false
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const currentDate = new Date(dateStr)
    return currentDate < today
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-2 sm:p-6 shadow-sm border border-gray-200 dark:border-slate-700">
      <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4 text-center">
        {monthNames[month]} {year}
      </h3>
      <div className="grid grid-cols-7 gap-1 sm:gap-3">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-xs font-semibold text-gray-500 dark:text-gray-400 py-1">
            {day.slice(0, 1)}
          </div>
        ))}
        {days.map((day, idx) => {
          const dateStr = day ? `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` : ''
          const past = isPastDate(day)
          const available = day && availableDates.includes(day) && !past
          const inRange = isInRange(day)
          const isCheckIn = isCheckInDate(day)
          const isCheckOut = isCheckOutDate(day)

          return (
            <button
              key={idx}
              onClick={() => available && dateStr && onDateClick(dateStr)}
              disabled={!available || !day}
              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              className={`aspect-square flex items-center justify-center text-xs font-medium rounded transition-colors select-none active:scale-95 focus:outline-none ${
                day === null
                  ? ''
                  : isCheckIn || isCheckOut
                  ? 'bg-primary text-white shadow-md active:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900'
                  : inRange
                  ? 'bg-primary-light dark:bg-slate-700 text-primary dark:text-primary active:bg-primary-light'
                  : past
                  ? 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-60'
                  : available
                  ? 'bg-white dark:bg-slate-700 border border-primary-light dark:border-slate-600 text-gray-900 dark:text-gray-300 hover:border-primary dark:hover:border-primary hover:bg-primary-light dark:hover:bg-slate-600 active:border-primary active:bg-primary-light cursor-pointer focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 cursor-not-allowed border border-gray-200 dark:border-slate-700'
              }`}
              title={past ? 'Date has passed' : !available && day ? 'Not available' : available && day ? 'Click to select' : ''}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function Calendar() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [displayMonth, setDisplayMonth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  // Detect mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Seed-based random for consistent availability per month
  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  const getAvailableDates = useMemo(() => {
    return (month, year) => {
      const daysInMonth = new Date(year, month + 1, 0).getDate()
      const available = []
      for (let day = 1; day <= daysInMonth; day++) {
        const seed = year * 1000 + month * 100 + day
        if (seededRandom(seed) > 0.2) {
          available.push(day)
        }
      }
      return available
    }
  }, [])

  const handleDateClick = (dateStr) => {
    // Deselect if clicking the same date
    if (dateStr === checkIn && dateStr === checkOut) {
      setCheckIn('')
      setCheckOut('')
    } else if (dateStr === checkIn) {
      setCheckIn('')
      setCheckOut('')
    } else if (dateStr === checkOut) {
      setCheckOut('')
    } else if (!checkIn) {
      setCheckIn(dateStr)
    } else if (!checkOut) {
      if (dateStr > checkIn) {
        setCheckOut(dateStr)
      } else {
        setCheckIn(dateStr)
        setCheckOut('')
      }
    } else {
      setCheckIn(dateStr)
      setCheckOut('')
    }
  }

  const nightsCount = checkIn && checkOut ? Math.floor((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)) : 0
  const totalPrice = nightsCount * 2500

  const monthsToShow = isMobile ? 1 : 3

  const months = Array.from({ length: monthsToShow }, (_, i) => {
    const month = (currentMonth + i + displayMonth) % 12
    const year = currentYear + Math.floor((currentMonth + i + displayMonth) / 12)
    const offset = i
    return { month, year, offset }
  })

  return (
    <section id="availability" className="scroll-mt-20 section-padding bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">Book Your Stay</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Availability Calendar</h2>
          <div className="section-title-underline" />
        </Reveal>

        <div className="mt-8 mb-8">
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4">
            <button
              onClick={() => setDisplayMonth(Math.max(displayMonth - 3, -12))}
              disabled={displayMonth === -12}
              className="px-3 sm:px-4 py-2 border-2 border-primary text-primary dark:border-primary dark:text-primary rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white disabled:border-gray-300 disabled:text-gray-400 dark:disabled:border-slate-600 dark:disabled:text-slate-500 transition-colors font-medium text-sm sm:text-base"
            >
              ← Prev
            </button>

            <button
              onClick={() => setDisplayMonth(Math.min(displayMonth + 3, 24))}
              disabled={displayMonth === 24}
              className="px-3 sm:px-4 py-2 border-2 border-primary text-primary dark:border-primary dark:text-primary rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white disabled:border-gray-300 disabled:text-gray-400 dark:disabled:border-slate-600 dark:disabled:text-slate-500 transition-colors font-medium text-sm sm:text-base"
            >
              Next →
            </button>
          </div>

          <div className="text-center min-h-[80px] flex flex-col items-center justify-center">
            <p className={`text-2xl sm:text-3xl font-bold transition-all duration-300 ${checkIn && totalPrice > 0 ? 'text-primary opacity-100 translate-y-0' : 'text-gray-400 dark:text-gray-600 opacity-100 translate-y-0'}`}>
              {checkIn && totalPrice > 0 ? `₱ ${totalPrice.toLocaleString()}` : 'Choose your stay'}
            </p>
            {checkIn && nightsCount > 0 && (
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 mt-2">
                {nightsCount} night{nightsCount !== 1 ? 's' : ''}
                {checkOut && ` • ${new Date(checkIn).toLocaleDateString()} → ${new Date(checkOut).toLocaleDateString()}`}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6 mb-6">
          {months.slice(0, 3).map(({ month, year, offset }) => {
            const available = getAvailableDates(month, year)
            return (
              <Reveal key={`${month}-${year}`} delay={offset * 100}>
                <CalendarMonth
                  month={month}
                  year={year}
                  availableDates={available}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onDateClick={handleDateClick}
                />
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={300}>
          <div className="mt-8 bg-primary-light dark:bg-slate-800 rounded-lg p-6 text-center border-2 border-primary dark:border-slate-700">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-primary/20 dark:border-slate-700">
              <span className="font-semibold text-gray-900 dark:text-white">Teal</span> = Available • <span className="font-semibold text-gray-900 dark:text-white">Filled</span> = Selected • <span className="font-semibold text-gray-900 dark:text-white">Faded</span> = Booked or Past
            </p>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How to book:</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              1️⃣ Click check-in date • 2️⃣ Click check-out date • 3️⃣ Fill the form below with your selection
            </p>
            {checkIn && checkOut && (
              <p className="text-primary font-semibold mt-3">
                ✓ Dates selected! Scroll down to complete your inquiry.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
