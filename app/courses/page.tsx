import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Star, ExternalLink, Calendar, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function Courses() {
  return (
    <div className="min-h-screen bg-soot-glue text-white">
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
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdpGScG5keRrPnXk3q-qDLXzQoC4Ij8i4bUT7ir-KTeFB4m4A/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">Join Us</Button>
              </Link>
            </div>
            <MobileNav currentPath="/" />
          </div>
        </div>
      </nav>

      {/* Courses Hero */}
      <section className="bg-buttercup py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-soot-glue mb-4">AI & ML Courses at LNU</h1>
          <p className="text-lg sm:text-xl text-soot-glue max-w-3xl mx-auto px-4 sm:px-0">
            Discover artificial intelligence and machine learning courses offered in <br></br>
            Linnaeus University, Växjö Sweden.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 sm:py-20 bg-soot-glue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Academic Programs</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Choose from bachelor's and master's level courses in AI and machine learning at Linnaeus University.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-2 border-gray-700 hover:border-yellow-400 transition-colors bg-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-crocus rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Bachelor's Level</CardTitle>
                <CardDescription className="text-gray-300">Undergraduate courses in AI and ML</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-4">
                  Foundation courses in artificial intelligence, machine learning, and data science.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-700 hover:border-yellow-400 transition-colors bg-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-ivy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Master's Level</CardTitle>
                <CardDescription className="text-gray-300">Advanced graduate programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-4">
                  Specialized master's programs in AI, machine learning, and related fields.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LNU AI/ML Courses */}
      <section className="py-12 sm:py-20 bg-lily-valley">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-soot-glue mb-4">AI & ML Courses at LNU</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0">
              Current artificial intelligence and machine learning courses offered at Linnaeus University.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/*(Bachelor's) */}
            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge style={{ backgroundColor: "#007340" }} className="text-white">
                    Bachelor's Level
                  </Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Globe className="h-4 w-4 mr-1" />
                    English
                  </div>
                </div>
                <CardTitle className="text-white">Introduction to Machine Learning</CardTitle>
                <CardDescription className="text-gray-300">
                  Gain a solid foundation in machine learning concepts, an ideal course for beginners eager to start
                  their journey into Machine Learning.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    30 Mar, 2026 - 07 Jun, 2026 • 7.5 ECTS
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    Half-time • Campus Växjö
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    Application: August 15
                  </div>
                </div>
                <Button
                  className="w-full text-black font-semibold hover:bg-yellow-300 mt-auto"
                  style={{ backgroundColor: "#FFE000" }}
                  asChild
                >
                  <a
                    href="https://lnu.se/en/course/introduction-to-machine-learning/vaxjo-international-part-time-spring/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Course Info <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            {/* Master's */}
            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge style={{ backgroundColor: "#A62186" }} className="text-white">
                    Master's Level
                  </Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Globe className="h-4 w-4 mr-1" />
                    English
                  </div>
                </div>
                <CardTitle className="text-white">Deep Machine Learning</CardTitle>
                <CardDescription className="text-gray-300">
                  Focuses on neural networks, CNNs, and optimization methods. Learn to build and train deep models.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    30 Mar, 2026 - 07 Jun, 2026 • 5 ECTS
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    33% • Campus Växjö
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    Application: October 15
                  </div>
                </div>
                <Button
                  className="w-full text-black font-semibold hover:bg-yellow-300 mt-auto"
                  style={{ backgroundColor: "#FFE000" }}
                  asChild
                >
                  <a
                    href="https://lnu.se/en/course/deep-machine-learning/vaxjo-exchange-part-time-spring/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Course Info <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            {/* Masters Course */}
            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge style={{ backgroundColor: "#A62186" }} className="text-white">
                    Master's Level
                  </Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Globe className="h-4 w-4 mr-1" />
                    English
                  </div>
                </div>
                <CardTitle className="text-white">Deep Reinforcement Learning</CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced course covering supervised and unsupervised learning algorithms.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    10 Nov, 2025 - 18 Jan, 2026 • 7.5 ECTS
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    Half-time • Campus Växjö
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    Application: January 15
                  </div>
                </div>
                <Button
                  className="w-full text-black font-semibold hover:bg-yellow-300 mt-auto"
                  style={{ backgroundColor: "#FFE000" }}
                  asChild
                >
                  <a
                    href="https://lnu.se/en/course/deep-reinforcement-learning/vaxjo-international-part-time-autumn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Course Info <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            {/* Bachelors Course */}
            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge style={{ backgroundColor: "#007340" }} className="text-white">
                    Bachelor's Level
                  </Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Globe className="h-4 w-4 mr-1" />
                    English
                  </div>
                </div>
                <CardTitle className="text-white">Applied Machine learning</CardTitle>
                <CardDescription className="text-gray-300">
                  Applied machine learning techniques to extract meaningful insights and value from large, diverse datasets using appropriate algorithms and approaches.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />1 semester • 7.5 ECTS
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    Period 2 • Spring
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    Prerequisites: Mathematics
                  </div>
                </div>
                <Button
                  className="w-full text-black font-semibold hover:bg-yellow-300 mt-auto"
                  style={{ backgroundColor: "#FFE000" }}
                  asChild
                >
                  <a
                    href="https://lnu.se/en/education/contract-education/utveckla-dig-sjalv/digitalisering-och-it/applied-machine-learning/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Course Info <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            {/* Statistical machine learning */}
            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge style={{ backgroundColor: "#007340" }} className="text-white">
                    Bachelor's Level
                  </Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Globe className="h-4 w-4 mr-1" />
                    English
                  </div>
                </div>
                <CardTitle className="text-white">Advanced Statistical machine learning</CardTitle>
                <CardDescription className="text-gray-300">
                  An introductory course combining statistical learning theory with hands-on machine learning practice using R, Keras, and TensorFlow on real-world datasets.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />1 semester • 7.5 ECTS
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    Period 1 • Autumn
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    Prerequisites: Statistics 15 credits 
                  </div>
                </div>
                <Button
                  className="w-full text-black font-semibold hover:bg-yellow-300 mt-auto"
                  style={{ backgroundColor: "#FFE000" }}
                  asChild
                >
                  <a
                    href="https://lnu.se/kurs/avancerad-statistisk-maskininlarning/vaxjo-distans-engelska-ht/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Course Info <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            {/* Data Mining Course */}
            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-yellow-400 transition-colors flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge style={{ backgroundColor: "#A62186" }} className="text-white">
                    Master's Level
                  </Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Globe className="h-4 w-4 mr-1" />
                    English
                  </div>
                </div>
                <CardTitle className="text-white">Data Mining</CardTitle>
                <CardDescription className="text-gray-300">
                  Techniques for discovering patterns in large datasets using statistical and ML methods.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />1 semester • 7.5 ECTS
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    Period 1 • Autumn
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    Prerequisites: Statistics
                  </div>
                </div>
                <Button
                  className="w-full text-black font-semibold hover:bg-yellow-300 mt-auto"
                  style={{ backgroundColor: "#FFE000" }}
                  asChild
                >
                  <a
                    href="https://lnu.se/en/course/data-mining/vaxjo-international-part-time-autumn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Course Info <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* Note about course information */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Important Note</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Course offerings, schedules, and requirements may change. Please visit the official Linnaeus University
                website for the most current and detailed information about AI and ML courses.
              </p>
              <Button
                className="text-black font-semibold hover:bg-yellow-300"
                style={{ backgroundColor: "#FFE000" }}
                asChild
              >
                <a
                  href="https://lnu.se/en/education/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Visit LNU Education Portal <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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