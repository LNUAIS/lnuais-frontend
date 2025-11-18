"use client"

import { useState } from "react"
import { Menu, X, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface MobileNavProps {
  currentPath: string
}

export function MobileNav({ currentPath }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-buttercup hover:bg-gray-800"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-soot-glue border-b border-gray-700 py-4 px-4 space-y-4 z-50">
          <Link
            href="/about"
            className="block text-white hover:text-buttercup transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/courses"
            className="block text-white hover:text-buttercup transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/events"
            className="block text-white hover:text-buttercup transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/news"
            className="block text-white hover:text-buttercup transition-colors"
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          <div className="pt-2 border-t border-gray-700">
            <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdpGScG5keRrPnXk3q-qDLXzQoC4Ij8i4bUT7ir-KTeFB4m4A/viewform?usp=header"
                target="_blank"
                className="inline-block px-4 py-1.5 text-white border-2 border-[#FFE000] bg-[#232326] rounded-2xl transition-colors duration-300 hover:text-[#FFE000]"
              >
                Join Us
              </Link>
          </div>
        </div>
      )}
    </div>
  )
}
