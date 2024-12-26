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
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setIsExpanded(false); // Hide sidebar by default on small screens
    } else {
      setIsExpanded(true); // Show sidebar by default on larger screens
    }
    setMounted(true); // Mark component as mounted for theme handling

    // Add event listener to update state on window resize
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  if (!mounted) return null;

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`h-screen  ${
        isExpanded ? "w-64" : "w-20"
      } bg-sidebar-background text-sidebar-text transition-all duration-200 flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-3">
        {isExpanded && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center p-2 rounded-md hover:bg-sidebar-subtitle"
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Moon className="h-5 w-5 text-sidebar-text" />
            ) : (
              <Sun className="h-5 w-5 text-sidebar-text" />
            )}
          </button>
        )}
        <button
          tabIndex={0}
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 rounded-md hover:bg-sidebar-subtitle"
        >
          {isExpanded ? (
            <ChevronLeft className="h-5 w-5 text-sidebar-text" />
          ) : (
            <ChevronRight className="h-5 w-5 text-sidebar-text" />
          )}
        </button>
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
                    ? "bg-sidebar-active text-sidebar-text"
                    : "bg-sidebar-background hover:bg-sidebar-hover text-sidebar-text"
                } transition duration-150`}
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
