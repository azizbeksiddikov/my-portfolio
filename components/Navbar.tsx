"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // Get current path (e.g. "/", "/experience", etc.)
  const pathname = usePathname();

  // Define your main links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <nav className="w-64 min-h-screen flex flex-col p-4 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        My Portfolio
      </h1>

      <ul className="space-y-2">
        {navLinks.map((link) => {
          // Check if the current path is the same as link.href
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-800"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
