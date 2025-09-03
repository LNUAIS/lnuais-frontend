import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#232326', color: 'white' }}>
     {/* Navigation */}
      <nav className="border-b border-gray-700 sticky top-0 z-50" style={{ backgroundColor: '#232326' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo-symbol.png"
                alt="LNU AI Society Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">LNU AI Society</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white font-medium transition-colors" style={{ ':hover': { color: '#FFE000' } }}>
                Home
              </Link>
              <Link href="/about" className="text-white transition-colors" style={{ ':hover': { color: '#FFE000' } }}>
                About
              </Link>
              <Link href="/courses" className="text-white transition-colors" style={{ ':hover': { color: '#FFE000' } }}>
                Courses
              </Link>
              <Link href="/events" className="text-white transition-colors" style={{ ':hover': { color: '#FFE000' } }}>
                Events
              </Link>
              <Link href="/news" className="text-white transition-colors" style={{ ':hover': { color: '#FFE000' } }}>
                News
              </Link>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdpGScG5keRrPnXk3q-qDLXzQoC4Ij8i4bUT7ir-KTeFB4m4A/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                <Button className="font-semibold transition-colors" style={{ backgroundColor: '#FFE000', color: '#232326' }}>Join Us</Button>
              </Link>
            </div>
            <MobileNav currentPath="/" />
          </div>
        </div>
      </nav>

      {/* Events Hero */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: '#FFE000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#232326' }}>Events</h1>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 sm:py-20 flex-1" style={{ backgroundColor: '#232326' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8" style={{ color: '#FFE000' }}>Upcoming Events</h2>
            <p className="text-xl text-gray-300">No upcoming events at this time.</p>
            <p className="text-gray-400 mt-4">Check back soon for updates!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 mt-auto" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo - slightly left of center on mobile */}
            <div className="flex justify-center md:justify-start w-full md:w-auto pr-12 md:pr-0">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/logo-symbol.png"
                  alt="LNU AI Society"
                  width={32}
                  height={32}
                  className="h-8 w-auto filter invert"
                />
                <span className="text-xl font-bold" style={{ color: '#FFE000' }}>LNU AI Society</span>
              </Link>
            </div>
            
            {/* Right side content */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/lnuais" target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-[#FFE000]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/lnuaisociety" target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-[#FFE000]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white/80">© 2025 LNU AI Society. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}