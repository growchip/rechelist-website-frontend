'use client'

import { Phone } from 'lucide-react'
import { SiWhatsapp, SiInstagram } from 'react-icons/si'

export default function FloatingCTA() {
  return (
    <>
      {/* ---------------- DESKTOP FLOATING CTA ---------------- */}
      <div className="hidden md:flex md:flex-col fixed right-0 top-1/2 -translate-y-1/2 z-50 space-y-3">
        
        {/* WhatsApp CTA */}
        <div className="relative w-12 h-12">
          <a
            href="https://wa.me/919216599595"
            target="_blank"
            className="group absolute right-0 top-0 w-12 h-12"
          >
            {/* Text that expands left */}
            <span className="absolute right-12 justify-center rounded-l-full h-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition px-3 py-2 bg-green-500 text-white rounded-l-full text-sm font-semibold whitespace-nowrap">
              WhatsApp Us
            </span>
            {/* Icon stays pinned to right */}
            <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full group-hover:rounded-none shadow-lg">
              <SiWhatsapp size={28} />
            </div>
          </a>
        </div>

        {/* Call CTA */}
        <div className="relative w-12 h-12">
          <a
            href="tel:+919216599595"
            className="group absolute right-0 top-0 w-12 h-12"
          >
            <span className="absolute h-12 right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition px-3 py-2 bg-[#6b0f12] text-white rounded-l-full text-sm font-semibold whitespace-nowrap">
              Call Us
            </span>
            <div className="w-12 h-12 flex items-center justify-center bg-[#6b0f12] text-white rounded-full group-hover:rounded-none shadow-lg">
              <Phone size={26} />
            </div>
          </a>
        </div>

      </div>

      {/* ---------------- MOBILE BOTTOM STICKY CTA ---------------- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
        <div className="flex justify-around items-center py-3">

          <a
            href="https://wa.me/919216599595"
            className="flex flex-col items-center text-green-500 text-xs font-semibold"
          >
            <SiWhatsapp size={26} />
            WhatsApp
          </a>

          <a
            href="tel:+919216599595"
            className="flex flex-col items-center text-[#6b0f12] text-xs font-semibold"
          >
            <Phone size={24} />
            Call
          </a>

          {/* <a
            href="https://instagram.com/weddings.cine"
            className="flex flex-col items-center text-[#E1306C] text-xs font-semibold"
          >
            <SiInstagram size={24} />
            Instagram
          </a> */}

        </div>
      </div>
    </>
  )
}
