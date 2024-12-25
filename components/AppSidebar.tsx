"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Home,
  Briefcase,
  FolderGit2,
  Mail,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Contacts", href: "/contacts", icon: Mail },
];

export function AppSidebar() {
  const pathname = usePathname(); // Use directly in the render body
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => {
    setIsExpanded(true); // Expand sidebar by default after mount
    setMounted(true); // Mark component as mounted for theme handling
    setCurrentPath(pathname); // Safely fetch the current path
  }, []);

  if (!mounted) return null;

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`h-screen ${
        isExpanded ? "w-64" : "w-20"
      } bg-gray-800 text-gray-300 transition-all duration-250 flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <button
          tabIndex={0}
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 rounded-md hover:bg-gray-700"
        >
          {isExpanded ? (
            <ChevronLeft className="h-5 w-5 text-gray-300" />
          ) : (
            <ChevronRight className="h-5 w-5 text-gray-300" />
          )}
        </button>
        {isExpanded && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center p-2 rounded-md hover:bg-gray-700"
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Moon className="h-5 w-5 text-gray-300" />
            ) : (
              <Sun className="h-5 w-5 text-gray-300" />
            )}
          </button>
        )}
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 space-y-4 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.name} className="flex justify-center">
              <Link
                href={item.href}
                className={`flex items-center ${
                  isExpanded ? "justify-start px-4" : "justify-center"
                } w-11/12 h-12 rounded-lg ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                } transition duration-200`}
              >
                <item.icon className="h-6 w-6" />
                {isExpanded && <span className="ml-2">{item.name}</span>}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
