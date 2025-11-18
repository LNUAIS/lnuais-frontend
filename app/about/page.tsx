import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {  Brain, Zap, ArrowRight, Newspaper, Settings } from "lucide-react"


export default function About() {
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
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdpGScG5keRrPnXk3q-qDLXzQoC4Ij8i4bUT7ir-KTeFB4m4A/viewform?usp=header"
                target="_blank"
                className="inline-block px-4 py-1.5 text-white border-2 border-[#FFE000] bg-[#232326] rounded-2xl transition-colors duration-300 hover:text-[#FFE000]"
              >
                Join Us
              </Link>
            </div>
            <MobileNav currentPath="/" />
          </div>
        </div>
      </nav>

      {/* About Hero */}
      <section className="bg-buttercup py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-soot-glue mb-4">About LNU AI Society</h1>
          <p className="text-lg sm:text-xl text-soot-glue max-w-3xl mx-auto px-4 sm:px-0">
            Learn more about our mission, meet our team, and discover how to get involved with our community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 bg-soot-glue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              The LNU AI Society exists to foster innovation and build a vibrant community of AI enthusiasts at Linnaeus
              University.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-crocus rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <CardTitle className="text-white">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Supporting AI learning through guidance, resources, and workshops
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-ivy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <CardTitle className="text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Encouraging creative problem-solving and cutting-edge research in artificial intelligence
                  applications.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-azalea rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <CardTitle className="text-white">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Building connections between students, researchers, and industry professionals in AI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Meet Our Board</h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
              Our dedicated team of students leading the AI revolution at Linnaeus University.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Sai */}
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-buttercup rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-soot-glue">SR</span>
                </div>
                <CardTitle className="text-white">Saisharan Raja</CardTitle>
                <CardDescription className="text-gray-400">President</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Leading innovation and strategic direction for LNU AI Society.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="mailto:saisharan@lnuais.com">Email</a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/saisharanraja/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Laknath */}
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-lily-valley rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-soot-glue">LP</span>
                </div>
                <CardTitle className="text-white">Laknath Ranaraja Perera</CardTitle>
                <CardDescription className="text-gray-400">Vice President</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Focused on operations, planning, and society coordination.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="mailto:laknath@lnuais.com">Email</a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/lranaraja/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Abdi */}
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-buttercup rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-soot-glue">AS</span>
                </div>
                <CardTitle className="text-white">Abdirashiid Sammantar</CardTitle>
                <CardDescription className="text-gray-400">Head of Communications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Responsible for outreach, messaging, and media relations.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="mailto:abdirashiid@lnuais.com">Email</a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/abdirashiid-sammantar-3b7863238/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Younus */}
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-ivy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-soot-glue">YM</span>
                </div>
                <CardTitle className="text-white">Younus Mashoor</CardTitle>
                <CardDescription className="text-gray-400">Head of Marketing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Leading marketing initiatives and promotional strategies.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="mailto:younus@lnuais.com">Email</a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/younusmashoor/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* William */}
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-azalea rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-soot-glue">WM</span>
                </div>
                <CardTitle className="text-white">William McCallum-Vallmark</CardTitle>
                <CardDescription className="text-gray-400">Secretary</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Organizing meetings, records, and official documents.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="mailto:william@lnuais.com">Email</a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Kemal */}
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-azalea rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-soot-glue">KC</span>
                </div>
                <CardTitle className="text-white">Kemal Cikota</CardTitle>
                <CardDescription className="text-gray-400">Head of Business Relations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Managing partnerships and external business relationships.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="mailto:kemal@lnuais.com">Email</a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Armin */}
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-azalea rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-soot-glue">AG</span>
                </div>
                <CardTitle className="text-white">Armin Coco Grbovic</CardTitle>
                <CardDescription className="text-gray-400">Treasurer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Managing finances, budgets, and financial planning.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="mailto:armin@lnuais.com">Email</a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-soot-glue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-buttercup mx-auto mb-4" />
                <CardTitle className="text-white">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">contact@lnuais.com</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-buttercup mx-auto mb-4" />
                <CardTitle className="text-white">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Linnaeus University
                  <br />
                  Växjö Campus
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-buttercup mx-auto mb-4" />
                <CardTitle className="text-white">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Tuesdays: 14:00 - 16:00
                  <br />
                  Thursdays: 10:00 - 12:00
                  <br />
                  Or by appointment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
