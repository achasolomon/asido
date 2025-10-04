"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SecondaryNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "WHO WE ARE", href: "/who-we-are" },
    { label: "LEADERSHIP", href: "/leadership" },
    { label: "OUR VOLUNTEER TEAM", href: "/volunteer-team" },
    { label: "MILESTONES", href: "/milestones" },
  ];

  // Get active page label for mobile
  const activeItem = navItems.find(item => pathname === item.href);
  const activeLabel = activeItem ? activeItem.label : navItems[0].label;

  return (
    <nav className="bg-white border-b border-[#999999]" style={{ borderBottomWidth: '0.8px' }}>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-20">
        {/* Mobile View */}
        <div className="lg:hidden flex items-center justify-between h-[51px]">
          <span className="text-sm font-medium text-primary">{activeLabel}</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-md"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium ${
                      isActive ? 'text-teal' : 'text-primary hover:text-dark'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-center overflow-x-auto scrollbar-hide h-[51px] gap-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  whitespace-nowrap transition-colors relative
                  text-sm font-medium
                  ${isActive ? 'text-teal' : 'text-primary hover:text-dark'}
                `}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-[0.8px] left-0 right-0 h-1 bg-teal" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}