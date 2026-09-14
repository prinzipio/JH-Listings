import photo1 from '../assets/property-photo-1.jpg'
import photo2 from '../assets/property-photo-2.jpg'
import photo3 from '../assets/property-photo-3.jpg'
import photo4 from '../assets/property-photo-4.jpg'
import photo5 from '../assets/property-photo-5.jpg'

// Separate from listings — only one property exists right now, so location
// isn't nested per-listing. Revisit this if/when multiple properties/locations
// are added (e.g. map by location id, or move onto each listing).
export const location = {
  address: "18th Floor, Shore 2, Tower 2, MOA Complex, Brgy. 76, Pasay City, Philippines, 1300",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.0150454088034!2d120.98134379678956!3d14.541132100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cbba1cd5feef%3A0xf5d6c439a4812f!2sShore%202%20Residences%2C%20Tower%202!5e0!3m2!1sen!2sph!4v1789333870395!5m2!1sen!2sph",
  coordinates: {
    lat: 14.541132100000008,
    lng: 120.98134379678956
  }
};

export const listing = {
  id: "shore-2-tower-2",
  title: "Studio Condominium Rental",
  address: "18th Floor, Shore 2, Tower 2, MOA Complex, Brgy. 76, Pasay City, Philippines, 1300",
  type: "Studio",
  bookingStatus: "available", // "available", "booked", or "coming-soon"
  description: "A modern studio condominium located in the heart of MOA Complex with convenient access to shopping, dining, and entertainment.",
  features: [
    { name: "Kitchen", icon: "🍳", description: "Fully equipped with stove, refrigerator, microwave, and utensils" },
    { name: "Bed", icon: "🛏️", description: "Comfortable bed with premium bedding" },
    { name: "Sky Terrace", icon: "🌅", description: "Private outdoor space with city views" },
    { name: "Comfort Room", icon: "🚿", description: "Modern bathroom with hot water and amenities" }
  ],
  photos: [photo1, photo2, photo3, photo4, photo5],
  // SAMPLE DATA FOR PREVIEW ONLY — not confirmed by owner yet.
  // Replace with real rates before launch.
  pricing: {
    daily: "₱2,500",
    weekly: "₱15,000",
    monthly: "₱35,000",
    deposit: "₱10,000 (refundable)",
    fees: "₱500 cleaning fee"
  },
  // SAMPLE DATA FOR PREVIEW ONLY — not confirmed by owner yet.
  // Replace with real house rules before launch.
  rules: [
    "No smoking inside the unit",
    "No pets allowed",
    "No parties or events",
    "Quiet hours: 10:00 PM - 7:00 AM",
    "Visitors must be registered with the front desk",
  ],
  checkIn: "2:00 PM",
  checkOut: "11:00 AM",
  maxGuests: "2 guests",
  contact: {
    phone: "0945 705 6956",
    email: "jhlistings.business@gmail.com",
    socialMedia: {
      facebook: "https://www.facebook.com/profile.php?id=61569996822804",
      instagram: "[OWNER TO PROVIDE]",
      // whatsapp: "[OWNER TO PROVIDE]",
    }
  }
};

// SAMPLE DATA FOR PREVIEW ONLY — not confirmed by owner yet. Replace before launch.
export const faqItems = [
  {
    id: "availability",
    question: "When can I book?",
    answer: "Availability is based on our current booking calendar. Message us on Facebook or contact us directly to check open dates for your preferred period."
  },
  {
    id: "pricing",
    question: "What are your rates?",
    answer: "Our rates are ₱2,500 per night, ₱15,000 per week, or ₱35,000 per month. See the Pricing section for the full breakdown including deposit and fees."
  },
  {
    id: "guests",
    question: "How many guests are allowed?",
    answer: "The studio comfortably accommodates up to 2 guests."
  },
  {
    id: "checkin",
    question: "What are the check-in and check-out times?",
    answer: "Check-in is at 2:00 PM and check-out is at 11:00 AM."
  },
  {
    id: "rules",
    question: "What are the house rules?",
    answer: "No smoking, no pets, and no parties are allowed inside the unit. Quiet hours are from 10:00 PM to 7:00 AM, and all visitors must be registered with the front desk. See the Rules section for the full list."
  },
  {
    id: "deposit",
    question: "What deposit is required?",
    answer: "A refundable deposit of ₱10,000 is required, along with a ₱500 cleaning fee."
  },
  {
    id: "utilities",
    question: "What utilities are included?",
    answer: "Wi-Fi is included. Electricity and water are billed separately based on usage."
  },
  {
    id: "contact",
    question: "How do I reach you?",
    answer: "You can reach us by phone at 0945 705 6956, by email at jhlistings.business@gmail.com, or through our Facebook page — see the Contact section below."
  }
];
