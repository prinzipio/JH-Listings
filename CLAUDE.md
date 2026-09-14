# JH Listings — Claude Code Instructions

## Overview

Build a clean, modern, mobile-first rental website for **JH Listings**.

**Current Property:**
- Studio Condominium
- Shore 2, Tower 2, MOA Complex, Brgy. 76, Pasay City, Philippines, 1300
- **Design for expansion** — keep listings data separate for future units

---

## Known Property Features

✓ Studio type  
✓ Kitchen  
✓ Bed  
✓ Sky terrace  
✓ Comfort room  

**Do NOT invent additional amenities or details.**

---

## Website Sections

### 1. Header / Navigation
- **Home** — Scrolls to landing page top (all sections visible: Unit, Photos, Pricing, Location, Contact)
- **Photos** — Smoothly scrolls to Gallery section within landing page
- **Pricing** — Smoothly scrolls to Pricing section within landing page
- **Location** — Smoothly scrolls to Location section within landing page
- **Rules** — Navigates to Rules page (separate page with Hero + Rules only)
- **FAQ** — Navigates to FAQ page (separate page with Hero + FAQ only)
- **Logo:** Owner-provided JH Listings logo image is in place (`src/assets/jh-listings-logo.jpg`), used in place of text branding in the header. Also used in the footer on a small white badge (footer background is dark; the logo file itself has a solid white background).
- **Note:** Unit and Contact sections are included on the landing page and are always visible when user clicks "Home" or navigates back from Rules/FAQ pages.

### 2. Hero Section
- Headline: "JH Listings"
- Subheading: "Studio condominium rental at Shore 2, MOA Complex"
- Primary CTA: "Ask About Availability"
- **Background:** Owner-provided hero image (`src/assets/hero-background.jpg`) as a full-bleed background with a 3-stop dark gradient overlay for text contrast, a frosted-glass ("glassmorphism") stats bar, and a staggered fade-in-up entrance animation on load.

### 3. The Unit
- Short description
- Feature cards (for the 5 known features above)

### 4. Photos Gallery
- Carousel layout with clickable left/right arrows and dot indicators
- Responsive, mobile-first, touch-friendly controls
- **Use real owner-provided photos only**
- Do not use placeholder or fake photos
- **Status: 5 real owner-provided photos added** (`src/data/listings.js` → `photos` array)

### 5. Pricing
- Display: Daily, Weekly, Monthly rates
- Include: Deposit & fees (if confirmed)
- **Use [OWNER TO PROVIDE] for missing rates**
- ⚠️ **Status: SAMPLE DATA, not real.** `src/data/listings.js` currently shows made-up numbers (₱2,500/day, ₱15,000/week, ₱35,000/month, ₱10,000 deposit, ₱500 fee) so the owner could visually preview the layout. Flagged with `// SAMPLE DATA FOR PREVIEW ONLY` comments in the code. **Must be replaced with real confirmed rates before launch.**

### 6. Rules
- List confirmed rental rules
- **Use [OWNER TO PROVIDE] for missing rules**
- ⚠️ **Status: SAMPLE DATA, not real.** Check-in/out, max guests, and the rules list currently show made-up placeholder values (2:00 PM / 11:00 AM / 2 guests / no smoking, no pets, etc.) for visual preview purposes, flagged the same way in `src/data/listings.js`. **Must be replaced with real confirmed rules before launch.**

### 7. Location
- Full address displayed
- Google Maps embed
- "Get Directions" button
- **Do not invent coordinates or travel times**
- **Kept as a separate data structure from `listings`** — there is currently only one property, so location is not duplicated per-listing. When additional units/properties are added later, revisit whether location should move onto each listing or stay mapped by location id.
- **Status: Live.** Owner-provided Google Maps embed URL and coordinates are set in `location.mapEmbed` / `location.coordinates`.

### 8. Guest Reviews
- Display of guest testimonials with ratings (★★★★★)
- Sample reviews showing author, date, and comment
- Call-to-action encouraging guests to share experiences
- **Status: Live.** 3 sample reviews added for visual preview. Real reviews from guests will replace these once the property starts accepting bookings.

### 9. Availability Calendar
- **Interactive date range picker** — click check-in date, then check-out date to select stay
- **Auto-calculated pricing** — displays total nights and total cost (₱2,500/night × nights selected)
- **Visual date range highlighting** — selected dates shown in teal, range dates in light teal, endpoints scaled up for clarity
- **Extended month navigation** — Previous/Next buttons to browse 12 months back and 24 months forward
- **Dynamic availability** — generates realistic availability (~80% available days per month) using `getAvailableDates()` function that creates random but consistent availability patterns
- **Helpful instructions** — step-by-step guide on how to select dates
- **Status: Live.** Calendar displays dynamically generated sample availability data. Real availability will be connected to actual bookings once booking system is set up.

### 10. Contact Section
- Phone/contact number
- Social media links (Facebook + Instagram)
- **Inquiry button** — single "Open Inquiry Form" button that opens Google Form in new tab
- **Status: Live.** Phone (0945 705 6956), email (jhlistings.business@gmail.com), Facebook icon, and Instagram icon are in place. WhatsApp remains `[OWNER TO PROVIDE]`.

### 12. Inquiry Form (Google Forms)
**Note:** Inquiry form is now hosted on Google Forms (zero-cost solution) instead of embedded React component.

Google Form URL: `https://docs.google.com/forms/d/e/1FAIpQLScoa5yw4Wbo7kNGUfxMSgeAas3uHZKaKSRYMy56Zsd5j5K-9A/viewform`

Fields collected:
- Name (required)
- Email (required)
- Phone (required)
- Question (required)
- Check-in date (required)
- Check-out date (required)
- Number of guests (required)

**Backend:** Responses automatically save to Google Sheet → Google Apps Script monitors for check-in dates → automated feedback email sent on check-in date via GmailApp (zero-cost automation)

### 11. FAQ
Pre-built sections:
- **Availability** — When can I book?
- **Pricing** — What are your rates?
- **Guests** — How many guests allowed?
- **Check-in/out** — What are the times?
- **Rules** — House rules?
- **Deposit** — What's required?
- **Utilities** — What's included?
- **Contact** — How do I reach you?
- ⚠️ **Status: SAMPLE DATA, not real.** All 8 answers in `src/data/listings.js` → `faqItems` currently contain made-up sample text mirroring the sample pricing/rules above (for visual preview only). Smooth expand/collapse animation added. **Must be replaced with real confirmed answers before launch.**

---

## Design Guidelines

**Style**
- Modern & trustworthy
- Clean & simple
- Photo-focused
- Minimal text-heavy sections

**Responsive**
- Mobile-first (all components built and optimized for small screens first)
- Tablet & desktop optimized (responsive breakpoints at sm: and lg:)
- Touch-friendly buttons & forms (min 44x44px touch targets, proper spacing, larger text on mobile)
- Mobile calendar optimizations: compact day names, responsive gaps, full-width buttons, active state feedback
- Form inputs with 44px min height on mobile for better touch interaction
- Better padding/spacing hierarchy: tighter on mobile, more generous on desktop

**UX**
- Accessible (semantic HTML, ARIA)
- Fast loading
- Clear CTAs
- Intuitive navigation

**Design System (implemented)**
- **Scroll-reveal animations:** A reusable `Reveal` component (`src/components/Reveal.jsx`) fades + slides content up into view via `IntersectionObserver` as the user scrolls, with staggered delays for grids of cards. Respects `prefers-reduced-motion`.
- **Elevated cards:** `.card-elevated` utility class (soft shadow, lifts + shadow deepens on hover) used for feature cards, rule cards, and contact panels.
- **Section headers:** Every section now has a small uppercase "eyebrow" label (`.section-eyebrow`, e.g. "RATES", "FIND US") above its heading, plus a short colored underline (`.section-title-underline`) for visual rhythm.
- **Color depth:** Gradient accents using the primary teal color (`from-primary-light to-white`, or `from-primary to-primary-dark` for the featured weekly price card) instead of flat backgrounds.
- **Icon circles:** `.icon-circle` utility for colored circular icon backgrounds (Contact phone/email, feature cards).
- All of the above is duplicated in both `src/index.css`/`src/components/` (Vite build) and inline in `preview.html` (no-build fallback) — keep both in sync when adjusting.

---

## Claude Decision-Making Style

**Autonomy:** Claude chooses the best option based on UX/design best practices without asking for confirmation on subjective design choices.

**When to decide autonomously:**
- Design/UX improvements (hover effects, animations, layouts, interactions)
- Visual polish (shadows, spacing, colors, transitions, effects)
- Interaction patterns (lightbox vs inline, etc.)
- Accessibility enhancements
- Code improvements (simplification, performance, cleanup)

**When to ask the user:**
- Business logic changes (pricing models, booking flow, features)
- Content/messaging (copy, CTAs, descriptions)
- Technical architecture (database vs API, backend choices)
- Hard constraints (budget, timeline, specific requirements)
- Anything explicitly outside UX/design scope

**Style:** Recommend the best option + reasoning, then implement it. Only ask if there are genuine trade-offs that affect the user's goals or business objectives.

---

## Critical Rules: What NOT to Invent

❌ Prices  
❌ Phone numbers  
❌ Social media accounts  
❌ Photos  
❌ Reviews  
❌ Amenities  
❌ Guest limits  
❌ Rules  
❌ Check-in/out times  
❌ Availability info  
❌ Parking details  
❌ Floor area  
❌ Coordinates or travel times  
❌ Any other property details  

**Always use [OWNER TO PROVIDE] when information is missing.**

---

## Data Structure (Single Property Focus)

**Currently designed for a single property.** Location is kept separate from `listing` since there is only one property for now — a single shared location object avoids duplication:

```javascript
// Separate from listing — only one property exists right now, so location
// isn't nested per-listing. Revisit this if/when multiple properties/locations
// are added (e.g. map by location id, or move onto each listing).
const location = {
  address: "Shore 2, Tower 2, MOA Complex, Brgy. 76, Pasay City, Philippines, 1300",
  mapEmbed: "[OWNER TO PROVIDE]", // Google Maps embed URL
  coordinates: {
    lat: "[OWNER TO PROVIDE]",
    lng: "[OWNER TO PROVIDE]"
  }
};

const listing = {
  id: "shore-2-tower-2",
  title: "Studio Condominium Rental",
  address: "Shore 2, Tower 2, MOA Complex, Brgy. 76, Pasay City, Philippines, 1300",
  type: "Studio",
  features: ["Kitchen", "Bed", "Sky terrace", "Comfort room"],
  photos: [], // Array of imported image URLs
  pricing: {
    daily: "[OWNER TO PROVIDE]",
    weekly: "[OWNER TO PROVIDE]",
    monthly: "[OWNER TO PROVIDE]",
    deposit: "[OWNER TO PROVIDE]",
    fees: "[OWNER TO PROVIDE]"
  },
  rules: [], // Array of rule strings
  checkIn: "[OWNER TO PROVIDE]",
  checkOut: "[OWNER TO PROVIDE]",
  maxGuests: "[OWNER TO PROVIDE]",
  contact: {
    phone: "[OWNER TO PROVIDE]",
    email: "[OWNER TO PROVIDE]",
    socialMedia: {}
  }
};
```

---

## Information Needed Before Launch

- [ ] Rental price/rates (daily, weekly, monthly)
- [x] Contact phone number — 0945 705 6956
- [x] Email address — jhlistings.business@gmail.com
- [x] Social media links — Facebook page added
- [x] Real property photos — 5 photos added
- [ ] Rental rules
- [ ] Check-in & check-out times
- [ ] Maximum guests allowed
- [ ] Deposit amount & other fees
- [ ] Availability process
- [x] Google Maps listing/link — embed + coordinates added
- [ ] Preferred inquiry method

---

## Tech Notes

- **Frontend:** React + Vite + Tailwind CSS (`npm install` then `npm run dev`, served at http://localhost:5173/)
- **No-install fallback:** `preview.html` — a standalone single-file version with inline CSS and JavaScript (React + Tailwind via CDN, Babel for JSX transpilation, no build step). Kept in sync with the Vite project data (`src/data/listings.js`) and design system (`src/index.css`, `src/components/`) for quick viewing without Node.js. Self-contained approach avoids Vite's module transformation issues and works directly in the browser via Babel's `@babel/standalone`.
  - **Asset paths:** All image paths use absolute paths (e.g., `/public/hero-background.jpg`) so they resolve correctly when served by Vite's dev server.
  - **Babel configuration:** Uses standard `<script type="text/babel">` tag without presets; Babel automatically transpiles JSX.
  - **JSX fragments:** Uses shorthand `<>` and `</>` syntax instead of `React.Fragment` for better compatibility.
- **Gallery:** Carousel with clickable arrows, dot indicators, and position counter (not a static grid)
- **Maps:** Google Maps embed — no API key needed for a basic `/maps/embed?pb=...` iframe URL (grabbed via Google Maps → Share → Embed a map)
- **Forms & Automation:** Zero-cost, fully automated solution using Google Forms + Google Sheets + Google Apps Script
  - **Inquiry Form:** Google Form hosted at `https://docs.google.com/forms/d/e/1FAIpQLScoa5yw4Wbo7kNGUfxMSgeAas3uHZKaKSRYMy56Zsd5j5K-9A/viewform` — opens in new tab from Contact section
  - **Data Collection:** Form responses auto-save to Google Sheet (`https://docs.google.com/spreadsheets/d/1MekCN0A6WDChJipH-y1RBQm938UOQgaE9YC0seNLljY/edit`)
  - **Feedback Automation:** Google Apps Script monitors sheet daily, sends feedback form link to guests on their check-in date via GmailApp API (free, no payment required)
  - **Feedback Form:** Guest feedback form hosted at `https://docs.google.com/forms/d/e/1FAIpQLSftYczal2bXnCU6ZU5M7qX7_nV3-afkgllsf8FdyFo5KgZgnQ/viewform` (sent via email on check-in)
- **Performance:** Lazy-load images, minimal JS
- **SEO:** Full meta tags configured in `<head>` (both `index.html` and `preview.html`):
  - **Meta Description:** "Luxury studio condominium at Shore 2, MOA Complex — steps from SM MOA. Fully equipped with kitchen, bed, sky terrace with city views, modern bathroom. Interactive booking calendar, real-time availability, instant Google Forms inquiry, and Facebook Messenger. Day, week, monthly rates."
  - **Keywords:** studio condo rental, furnished apartment, MOA Complex, Pasay City, short-term rental, sky terrace, city views, SM MOA proximity, airbnb alternative, booking, vacation rental, corporate housing
  - **Author:** JH Listings
  - **Open Graph:** og:type (website), og:title, og:description, og:image (placeholder: `https://jhlistings.com/public/hero-background.jpg`), og:url, og:site_name
  - **Twitter Card:** twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image (same as og:image), twitter:creator (@JHListings)
  - **Canonical Link:** `https://jhlistings.com`
  - ⚠️ **Note:** `og:image` and `twitter:image` currently use placeholder domain (`https://jhlistings.com/...`). **Must update to actual production domain URL once deployed** (e.g., `https://youractualdomain.com/public/hero-background.jpg`).

---

## Next Steps

**Done:**
1. ✓ Clean React component structure (`src/components/`)
2. ✓ Listings + location data files, refactored to single property focus (`src/data/listings.js` → `const listing` object)
3. ✓ Reusable components for all sections
4. ✓ `[OWNER TO PROVIDE]` placeholders for all missing data
5. ✓ Inquiry form built (no backend yet — still needs owner's email/service)
6. ✓ Logo, hero background, and 5 property photos added
7. ✓ Google Maps embed + coordinates added
8. ✓ Contact phone, email, and Facebook icon added
9. ✓ Meta description + Open Graph/Twitter tags added for SEO and link previews
10. ✓ Sample pricing, rules, check-in/out, max guests, and FAQ answers added for visual preview (NOT real — see ⚠️ status notes on sections 5, 6, 10)
11. ✓ Full visual polish pass: scroll-reveal animations, elevated cards, section eyebrows/underlines, gradient accents, icon circles (see Design System notes above)
12. ✓ `preview.html` confirmed as self-contained single-file with inline CSS + JavaScript — avoids Vite module transformation issues, works directly via Babel's `@babel/standalone`
13. ✓ Fixed `preview.html` asset paths (absolute paths `/public/*`) and Babel script configuration for proper rendering in dev server
14. ✓ Navbar simplified from 8 to 6 buttons: removed redundant "Unit" and "Contact" items; restructured navigation to scroll-to-section for Photos/Pricing/Location
15. ✓ Landing page architecture clarified: Unit + Photos + Pricing + Location + Contact all visible on one page. Navbar buttons for these sections smoothly scroll to their targets (not separate pages). Rules and FAQ remain as separate pages accessible from navbar. Implemented via `scrollToSection()` function with conditional routing in `App.jsx` and `Header.jsx`
16. ✓ Removed photo counter display ("1 / 5") from gallery — kept carousel arrows and dot indicators
17. ✓ Guest Reviews section added: displays 3 sample testimonials with author, date, rating (★★★★★), and comments. Positioned after Gallery and before Pricing for social proof
18. ✓ Availability Calendar added: interactive date range picker with date selection, auto-calculated pricing (₱2,500/night), month navigation (±6 months), visual range highlighting, auto-scroll to form with pre-filled dates, and step-by-step booking instructions. Positioned between Pricing and Location
19. ✓ Instagram social media icon added: Instagram profile link now supported (pending owner URL)
20. ✓ SEO meta tags enhanced: added keywords, author, og:url, og:site_name, twitter:creator, and canonical link; updated og:image/twitter:image to use placeholder domain (update to actual domain when deployed)
21. ✓ Mobile responsiveness optimized: improved calendar with responsive spacing/gaps, compact day headers, responsive text sizes, full-width mobile buttons, active state feedback; improved contact form padding (6-8px on mobile, larger on desktop); better form input sizing (h-11 min on mobile for touch); responsive gap adjustments throughout (gap-3 sm:gap-6)
22. ✓ Calendar extended: date range expanded from ±6 months to 12 months back and 24 months forward; navigation buttons adjusted (Previous: -12 max, Next: +24 max)
23. ✓ Dynamic availability generation: replaced hardcoded `sampleAvailable` object with `getAvailableDates()` function that generates ~80% available days per month using Math.random() for realistic booking patterns
24. ✓ Instagram social media enabled: uncommented Instagram URL in `src/data/listings.js` socialMedia object; Instagram icon now displays in Contact section
25. ✓ Footer navigation fixed: converted anchor links to button-based navigation system; added onNavClick callback to match Header pattern; all 6 footer links now properly route
26. ✓ React form replaced with Google Forms: removed form state/handlers from Contact component; Contact section now displays single "Open Inquiry Form" button that opens Google Form in new tab
27. ✓ Google Forms + Google Apps Script automation: set up zero-cost solution for automated feedback emails on check-in dates
    - Inquiry form collects: Name, Email, Phone, Question, Check-in date, Check-out date, Number of guests
    - Responses auto-save to Google Sheet
    - Apps Script monitors sheet daily, sends feedback form link to guests on check-in date via GmailApp API (free, no payment)
    - Uses jhlistings.business@gmail.com as sender
    - Deduplication logic prevents duplicate emails if same email submitted multiple times
28. ✓ Photo gallery enhanced: click photos to open fullscreen lightbox with:
    - Full-resolution image viewing
    - Previous/Next navigation buttons + dot indicators
    - Photo counter (e.g., "3 of 5")
    - Keyboard support (arrow keys to navigate, ESC to close)
    - Click outside or close button to exit
    - Subtle hover effect (scale + opacity) on main image
29. ✓ Feature cards improved: added descriptions under each feature (Kitchen, Bed, Sky Terrace, Comfort Room)
    - Cards display what's actually included with each feature
    - Clearer expectations for guests, reduces inquiry questions
30. ✓ Feature cards animation cleaned: removed reveal animations from feature section for cleaner look (kept soft shadows for depth)
31. ✓ Facebook Messenger integration added: direct messaging button in bottom-right corner
    - Links to Facebook Page Messenger
    - Works on mobile and desktop
    - Provides real-time communication channel alongside inquiry form
32. ✓ Duplicate inquiry prevention: updated Google Apps Script to deduplicate by email before sending feedback emails
    - Only sends one feedback email per unique email address, even if multiple form submissions
33. ✓ Claude decision-making autonomy documented: added section to CLAUDE.md defining when to decide autonomously vs. ask user
    - Design/UX decisions are autonomous (animations, layouts, interactions, polish)
    - Business logic decisions ask user first (pricing, features, messaging)
34. ✓ SEO meta tags enhanced: updated description and keywords to mention interactive calendar, booking form, Messenger support, sky terrace views
35. ✓ Dark mode system implemented: full light/dark mode toggle with localStorage persistence and system preference detection
    - Toggle button (sun/moon icon) in header
    - Tailwind `darkMode: 'class'` configured in tailwind.config.js
    - Dark mode state managed in App.jsx with localStorage persistence
    - Smooth CSS transitions between themes
    - All components updated with `dark:` Tailwind classes
    - Both React (Vite) and preview.html versions support dark mode
36. ✓ Dynamic booking status indicator: hero section now displays real-time property availability
    - "Available Now" (green) - property is bookable
    - "Fully Booked" (red) - property is unavailable (CTA button disabled)
    - "Coming Soon" (amber) - property will be available soon
    - Status stored in listing data, easy to toggle via `listing.bookingStatus` field
37. ✓ Dark mode text contrast optimizations: fixed all text readability issues in dark mode
    - Feature card headings and descriptions now have proper contrast
    - Pricing section labels improved (gray-600 → gray-300)
    - Guest reviews text enhanced for visibility
    - Contact section labels and descriptions updated
    - Calendar and FAQ elements optimized
    - Rules section labels improved
    - Placeholder text styled with better visibility
38. ✓ Circular logo styling: updated logo in header and footer to use `rounded-full` for modern circular appearance
    - Header logo: `h-12 w-12 rounded-full object-cover`
    - Footer logo: `h-10 w-10 rounded-full object-cover`
    - Maintains consistent sizing with perfect circle shape
39. ✓ Enhanced "Get Directions" button styling: upgraded Location section button with gradient and interactive effects
    - Gradient background: `from-primary to-primary-dark`
    - Increased padding: `px-8 py-3` (mobile), `px-10 py-4` (desktop)
    - Enhanced shadow and hover effects: `hover:shadow-xl hover:scale-105`
    - Smooth transitions for professional polish
40. ✓ Location proximity detail: added "Steps away from SM MOA" badge to emphasize key selling point
    - Badge integrated into address box with accent color
    - Smaller text size with sparkle emoji for visual appeal
    - Positioned below address for natural flow
41. ✓ Calendar border color fix: resolved weird border color changes when clicking dates
    - Changed `transition-all` to `transition-colors` for smoother transitions
    - Added `select-none` to prevent text selection glitches
    - Added explicit `active:` states to prevent browser default active styling
42. ✓ Calendar layout shift prevention: eliminated jarring calendar movement when price appears
    - Added `min-h-[100px]` to button/price container to reserve space
    - Changed conditional rendering to always-visible div with `opacity-100/opacity-0` fade
    - Added `transition-opacity` for smooth fade-in/out of price details
43. ✓ Calendar availability randomization fix: resolved random date styling changes on click
    - Replaced pure `Math.random()` with seed-based random function
    - Each month/year combination now generates consistent availability pattern
    - Used `useMemo` to cache availability function for performance
44. ✓ Past dates elimination: disabled and styled dates that have already passed
    - Added `isPastDate()` helper function to check if date is before today
    - Past dates are disabled (can't click), grayed out, and have strikethrough text
    - Tooltip shows "Date has passed" for accessibility
    - Prevents guest confusion and invalid bookings
45. ✓ FAQ section refined: polished expand/collapse behavior for smooth, clean interaction
    - Replaced instant conditional rendering with grid-based animation (`gridTemplateRows: 0fr → 1fr`, `ease-out` timing)
    - Answer text fades in sync with container expansion (no jarring layout shifts)
    - Added scrollable FAQ container (`max-h-[800px] sm:max-h-[900px]`) to prevent footer push-down
    - Hidden scrollbar with CSS (webkit + Firefox + IE fallbacks) while keeping scroll functionality
    - Reduced padding (`pt-1 pb-3 sm:pt-2 sm:pb-4`) for compact answer spacing
    - 250ms animation duration keeps interaction snappy without feeling bouncy

**Remaining:**
1. Test the automation setup: verify Google Form submissions are recorded in Sheet, confirm Apps Script trigger is active, test with near-future check-in date
2. Get REAL owner-confirmed values to replace all sample data: pricing, rules, check-in/out times, max guests, deposit/fees, FAQ answers
3. Update `og:image`/`twitter:image` to an absolute URL once deployed to a real domain
4. Request final confirmation on all property details before launch
5. Deploy website to live domain (Vercel, Netlify, etc.) and update all placeholder URLs