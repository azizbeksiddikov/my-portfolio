// components/SocialIcons.tsx
"use client";
import { useTheme } from "next-themes";
import { Github, Linkedin, Mail } from "lucide-react";
import { Contact } from "@/lib/types/contact";

interface SocialIconsProps {
  contacts: Contact[];
}

export default function SocialIcons({ contacts }: SocialIconsProps) {
  const { theme } = useTheme();

  const iconComponents = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Email: Mail,
  };

  return (
    <div className="flex justify-center space-x-6 mb-8">
      {contacts.map((item) => {
        const IconComponent =
          iconComponents[item.label as keyof typeof iconComponents];
        return (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors duration-200
              ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            aria-label={item.label}
          >
            <IconComponent className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}
