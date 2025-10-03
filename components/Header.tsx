"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT US", href: "/about" },
    { label: "IMPACT", href: "/impact" },
    { label: "GET INVOLVED", href: "/get-involved" },
    { label: "STAY INFORMED", href: "/stay-informed" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-[1440px] mx-auto px-20">
        {/* Top Row: Logo and Search */}
        <div className="flex items-center justify-between pt-5 pb-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-[140px] h-[48px] relative">
              <Image
                src="/images/Asido-logo.png"
                alt="Asido Foundation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Search Icon with blue border */}
          <button 
            className="p-2 border border-primary rounded-full hover:bg-primary/5 transition-colors"
            aria-label="Search"
          >
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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

        {/* Bottom Row: Navigation Links */}
        <div className="hidden lg:flex items-center justify-between pb-5">
          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary hover:opacity-80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/pledge"
              className="w-[139px] h-[21px] flex items-center justify-center text-primary font-bold text-base leading-[130%] uppercase hover:opacity-80 transition-colors"
              style={{ 
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 700,
                fontSize: '16px'
              }}
            >
              Take the Pledge
            </Link>
            <Link 
              href="/donate" 
              className="bg-teal text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:opacity-90"
            >
              DONATE
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-dark hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/pledge"
                className="text-sm font-medium text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Take the Pledge
              </Link>
              <Link
                href="/donate"
                className="bg-teal text-white px-6 py-3 rounded-md font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                DONATE
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}