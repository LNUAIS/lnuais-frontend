"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function DocumentsList() {
const bylaws = {
  title: "Bylaws of LNU AI Society",
  description: "Official bylaws governing the LNU AI Society",
  date: "2025-01-15",
  path: "/documents/BylawsofLNUAISociety.pdf", 
}


  const meetingDocuments = [
    {
      title: "Annual General Meeting 2025",
      description: "Minutes from the 2025 Annual General Meeting",
      date: "2025-03-20",
      path: "/documents/meetings/agm-2025.pdf",
    },
    {
      title: "Board Meeting - January 2025",
      description: "Minutes from the January 2025 board meeting",
      date: "2025-01-10",
      path: "/documents/meetings/board-jan-2025.pdf",
    },
    {
      title: "Board Meeting - February 2025",
      description: "Minutes from the February 2025 board meeting",
      date: "2025-02-14",
      path: "/documents/meetings/board-feb-2025.pdf",
    },
  ]

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
              <Link href="/" className="text-white hover:text-buttercup transition-colors">
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
            </div>
            <MobileNav currentPath="/documents/list" />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-buttercup py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-soot-glue mb-2">Official Documents</h1>
              <p className="text-lg text-soot-glue">Access all LNU AI Society documents and meeting minutes</p>
            </div>
            <Link href="/documents">
              <Button
                variant="outline"
                className="border-soot-glue text-soot-glue hover:bg-soot-glue hover:text-buttercup bg-transparent"
              >
                Back to Archive
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bylaws Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Statutory Documents</h2>
          <Card className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <FileText className="h-8 w-8 text-buttercup mt-1" />
                  <div>
                    <CardTitle className="text-white text-xl mb-2">{bylaws.title}</CardTitle>
                    <p className="text-gray-300">{bylaws.description}</p>
                    <div className="flex items-center text-gray-400 text-sm mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Latest Revision: Wednesday, May 14, 2025</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold"
                  onClick={() => window.open(bylaws.path, "_blank")}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Meeting Documents Section 
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Meeting Documents</h2>
          <div className="space-y-4">
            {meetingDocuments.map((doc, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-2 border-gray-700 hover:border-buttercup transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <FileText className="h-6 w-6 text-crocus mt-1" />
                      <div>
                        <h3 className="text-white text-lg font-semibold mb-1">{doc.title}</h3>
                        <p className="text-gray-300 text-sm mb-2">{doc.description}</p>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{new Date(doc.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-buttercup text-buttercup hover:bg-buttercup hover:text-soot-glue bg-transparent"
                      onClick={() => window.open(doc.path, "_blank")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="bg-black py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-buttercup">LNU AI SOCIETY</span>
              </Link>
            </div>
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
