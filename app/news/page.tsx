"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    {
      src: "/pictures/event-post-first-page-1.png",
      alt: "Studeni Event - Discount Code"
    },
    {
      src: "/pictures/event-post-second-page-1.png",
      alt: "Studeni Event - Presentation"
    },
    {
      src: "/pictures/event-post-third-page-1.png",
      alt: "Studeni Event - Team Photo"
    }
  ]

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative w-full h-full group bg-gray-900">
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        className="object-contain"
        priority
      />
      
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-buttercup w-6" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function News() {
  return (
    <div className="min-h-screen bg-soot-glue">
      {/* Navigation */}
      <nav className="bg-soot-glue border-b border-gray-700 sticky top-0 z-50">
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
              <Link href="/" className="text-white hover:text-buttercup transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-buttercup transition-colors">
                About
              </Link>
              <Link href="/courses" className="text-white hover:text-buttercup transition-colors">
                Courses
              </Link>
              <Link href="/events" className="text-white hover:text-buttercup transition-colors">
                Events
              </Link>
              <Link href="/news" className="text-white hover:text-buttercup transition-colors">
                News
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:text-buttercup hover:bg-gray-800">
                    <Settings className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdpGScG5keRrPnXk3q-qDLXzQoC4Ij8i4bUT7ir-KTeFB4m4A/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-buttercup w-full"
                    >
                      Join Us
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/documents" className="text-white hover:text-buttercup w-full">
                      Documents
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <MobileNav currentPath="/news" />
          </div>
        </div>
      </nav>

      {/* News Hero */}
      <section className="bg-buttercup py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-soot-glue mb-4">AI News & Updates</h1>
          <p className="text-lg sm:text-xl text-soot-glue max-w-3xl mx-auto px-4 sm:px-0">
            Stay informed with the latest developments in artificial intelligence, research breakthroughs, and society
            announcements.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-buttercup mb-4">Latest News</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              Discover the most recent updates from the world of AI and our society activities.
            </p>
          </div>

          {/* Featured Article */}
          <Card className="mb-8 sm:mb-12 border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800 text-white overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Carousel */}
              <div className="relative h-64 md:h-full min-h-[300px] bg-gray-900">
                <ImageCarousel />
              </div>
              
              {/* Content */}
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-buttercup text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>September 2025</span>
                  <span className="mx-2">•</span>
                  <span className="bg-buttercup/20 px-2 py-1 rounded text-xs font-semibold">FIRST EVENT</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-buttercup mb-4">
                  Our First Event: A Conversation with Studeni Founders
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  We were honored to welcome Granit Doroci (CEO) and Rihards Okmanis (CPO), founders of Studeni, a startup backed by MIT CSAIL. They shared their entrepreneurial journey and insights on leveraging AI for innovation.
                </p>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  The session highlighted practical applications of AI in product development, along with valuable lessons on resilience and adaptability in building impactful solutions.
                </p>
                
                <div className="bg-gray-900 border border-buttercup/30 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-300">
                    <strong className="text-buttercup">Special Offer:</strong> Studeni is offering our community free access to their platform for one month. Join their Discord for updates and internship opportunities!
                  </p>
                </div>
                
                <p className="text-gray-400 text-sm italic">
                  Thank you to Granit and Rihards for their time, and to all participants who made our first event a success.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* TODO: Add more news cards here dynamically */}
            {/* Example News Card */}
            {/* <Card>...</Card> */}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-20 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-buttercup mb-4">Stay Connected</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              Interested in joining or staying up-to-date with LNU AI Society? Fill out the form below to get involved!
            </p>
          </div>
          <Card className="max-w-xl mx-auto bg-gray-800 border-2 border-gray-700 hover:border-buttercup transition-colors text-white text-center">
            <CardContent className="p-6 sm:p-8">
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">Click the button below to register</p>
              <Button
                className="text-black font-semibold hover:bg-yellow-300"
                style={{ backgroundColor: "#FFE000" }}
                asChild
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdpGScG5keRrPnXk3q-qDLXzQoC4Ij8i4bUT7ir-KTeFB4m4A/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become A Member!
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo - slightly left of center on mobile */}
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold" style={{ color: "#FFE000" }}>
                  LNU AI SOCIETY
                </span>
              </Link>
            </div>

            {/* Right side content */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/lnuais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/lnuaisociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
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