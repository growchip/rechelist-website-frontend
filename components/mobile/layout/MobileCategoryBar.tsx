"use client";

import { useState, useEffect } from "react";

import { useSidebar } from "@/hooks/useSidebarMob";

import { FiMenu } from "react-icons/fi";

type MobileCategoryBarProps = {
  activeCategory?: string;
};

export default function MobileCategoryBar({
  activeCategory,
}: MobileCategoryBarProps) {
  const { toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-2">
      {/* Active category */}
      <span className="text-sm md:text-lg font-medium text-gray-800 truncate">
        {activeCategory || "All Products"}
      </span>

      {/* Drawer trigger */}
      <button
        onClick={toggleSidebar}
        className="flex items-center gap-2 text-sm md:text-lg font-medium text-primaryOrange hover:text-primaryOrange/80 transition-colors"
      >
        <FiMenu className="text-lg transition-transform group-hover:rotate-90" />
        Categories
      </button>
    </div>
  );
}
