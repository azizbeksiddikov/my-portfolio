"use client";

import { useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IconDisplay() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="container mx-auto px-4 py-8">
        <Button onClick={toggleDarkMode} className="mb-4">
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </Button>
        <div className="flex justify-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg">
          <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <Github className="w-8 h-8 text-gray-800 dark:text-gray-200" />
          <Mail className="w-8 h-8 text-red-600 dark:text-red-400" />
          <Linkedin className="w-8 h-8 text-gray-400 dark:text-gray-600" />
          <Github className="w-8 h-8 text-gray-400 dark:text-gray-600" />
          <Mail className="w-8 h-8 text-gray-400 dark:text-gray-600" />
        </div>
      </div>
    </div>
  );
}
