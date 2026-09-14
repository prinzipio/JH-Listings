import Reveal from './Reveal'

const SOCIAL_ICONS = {
  facebook: {
    label: 'Facebook',
    color: '#1877F2',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  instagram: {
    label: 'Instagram',
    color: '#E1306C',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.846-14.1c-.795 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z',
  },
}

function SocialIcon({ platform, url }) {
  const icon = SOCIAL_ICONS[platform.toLowerCase()]

  if (!icon) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary-dark capitalize"
      >
        {platform}
      </a>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon.label}
      title={icon.label}
      className="inline-flex items-center justify-center h-11 w-11 rounded-full transition-transform hover:scale-110"
      style={{ color: icon.color }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
        <path d={icon.path} />
      </svg>
    </a>
  )
}

export default function Contact({ listing }) {
  const { contact } = listing
  const hasPhone = contact.phone && !contact.phone.startsWith("[OWNER")
  const hasEmail = contact.email && !contact.email.startsWith("[OWNER")
  const socialLinks = Object.entries(contact.socialMedia || {})

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email)
  }

  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&subject=Inquiry%20About%20JH%20Listings%20Studio&body=Hello,%0A%0AI%20am%20interested%20in%20booking%20your%20studio%20condominium.%0A%0AThank%20you!`
    window.open(gmailUrl, '_blank')
  }

  return (
    <section id="contact" className="scroll-mt-20 section-padding bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">Reach Out</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Contact Us</h2>
          <div className="section-title-underline" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
          {/* Contact Info */}
          <Reveal delay={100}>
            <div className="card-elevated p-4 sm:p-8 h-full">
              <h3 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">Get in Touch</h3>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-8">
                <div className="flex items-center gap-4">
                  <span className="icon-circle">📞</span>
                  {hasPhone ? (
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-primary hover:text-primary-dark font-medium transition-colors">
                      {contact.phone}
                    </a>
                  ) : (
                    <span className="placeholder-text">{contact.phone}</span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="icon-circle">✉️</span>
                  {hasEmail ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={openGmail}
                        className="text-primary hover:text-primary-dark hover:underline font-medium transition-colors cursor-pointer bg-none border-none p-0"
                        title="Send email via Gmail"
                      >
                        {contact.email}
                      </button>
                      <button
                        onClick={copyEmail}
                        className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors p-1"
                        title="Copy email to clipboard"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <span className="placeholder-text">{contact.email}</span>
                  )}
                </div>
              </div>

              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-3">
                Social Media
              </h4>
              {socialLinks.length > 0 ? (
                <div className="flex gap-3">
                  {socialLinks.map(([platform, url]) => (
                    <SocialIcon key={platform} platform={platform} url={url} />
                  ))}
                </div>
              ) : (
                <p className="placeholder-text">[OWNER TO PROVIDE] — Social media links</p>
              )}
            </div>
          </Reveal>

          {/* Inquiry Form */}
          <Reveal delay={200}>
            <div className="card-elevated p-4 sm:p-8 h-full flex flex-col justify-center">
              <h3 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">Ready to Book?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6">
                Fill out our inquiry form to check availability and reserve your dates. We'll respond within 24 hours.
              </p>
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScoa5yw4Wbo7kNGUfxMSgeAas3uHZKaKSRYMy56Zsd5j5K-9A/viewform', '_blank')}
                className="button-primary w-full"
              >
                Open Inquiry Form →
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
