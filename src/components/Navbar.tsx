"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: "⌂" },
  { href: "#about", label: "About", icon: "◈" },
  { href: "#events", label: "Events", icon: "◉" },
  { href: "#projects", label: "Projects", icon: "◎" },
  { href: "#team", label: "Team", icon: "◇" },
  { href: "#contact", label: "Contact", icon: "◆" },
];

export function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      {/* Spacer to offset content */}
      <div
        className={`shrink-0 transition-all duration-300 ${
          collapsed ? "w-16" : "w-72"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-[var(--border)] bg-[var(--bg-muted)] transition-all duration-300 ${
          collapsed ? "w-16" : "w-72"
        }`}
      >
        {/* Header */}
        <div className={`flex items-center px-4 py-6 ${collapsed ? "justify-center" : "gap-4"}`}>
          <div className={`relative grid shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#3a7bd5] font-bold tracking-tight text-white shadow-md ${collapsed ? "h-10 w-10 text-[11px]" : "h-12 w-12 text-sm"}`}>
            <span className="relative z-10">DCC</span>
            <div className="absolute inset-0 rounded-lg bg-white/10" />
          </div>
          <div
            className={`flex min-w-0 flex-col overflow-hidden transition-all duration-300 ${
              collapsed ? "w-0 opacity-0" : "flex-1 opacity-100"
            }`}
          >
            <span className="truncate text-base font-semibold tracking-tight text-[var(--text-primary)]">
              Developers & Coders Club
            </span>
            <span className="mt-0.5 truncate text-xs font-medium text-[var(--accent)]">
              NIT Agartala
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px bg-[var(--border)] ${collapsed ? "mx-3" : "mx-4"}`} />

        {/* Navigation links */}
        <nav className={`mt-4 flex-1 space-y-1.5 ${collapsed ? "px-2" : "px-3"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative flex items-center rounded-md text-base font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--surface)] hover:text-[var(--text-primary)] ${collapsed ? "justify-center py-3" : "gap-4 px-4 py-3"}`}
              title={collapsed ? link.label : undefined}
            >
              {/* Active indicator */}
              <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-sm bg-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Icon */}
              <span className={`grid shrink-0 place-items-center rounded-md bg-[var(--surface)] text-base text-[var(--muted)] transition-colors group-hover:bg-[var(--card)] group-hover:text-[var(--accent)] ${collapsed ? "h-10 w-10" : "h-9 w-9"}`}>
                {link.icon}
              </span>

              {/* Label */}
              {!collapsed && <span>{link.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Collapse toggle */}
        <div className="flex justify-center border-t border-[var(--border)] p-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--surface)] text-[var(--muted)] transition-colors hover:bg-[var(--card)] hover:text-[var(--text-primary)]"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <span
              className="text-base transition-transform duration-300"
              style={{ transform: collapsed ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ‹
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
