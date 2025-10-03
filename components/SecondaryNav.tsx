"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SecondaryNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "WHO WE ARE", href: "/who-we-are" },
    { label: "LEADERSHIP", href: "/leadership" },
    { label: "OUR VOLUNTEER TEAM", href: "/volunteer-team" },
    { label: "MILESTONES", href: "/milestones" },
  ];

  return (
    <nav className="bg-white border-b border-[#999999]" style={{ borderBottomWidth: '0.8px' }}>
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="flex items-center justify-center overflow-x-auto scrollbar-hide h-[51px] gap-16">
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