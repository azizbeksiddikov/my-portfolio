import Image from "next/image";
import Link from "next/link";
import { getPageData, getLayoutData } from "@/lib/data";

export default function HomePage() {
  // 1. Read JSON files
  const { title, name, description, photo } = getPageData("home");
  const { contact, resume } = getLayoutData("home");
  return (
    <div className="flex min-h-screen m-4 px-4 sm:px-8">
      {/* LEFT COLUMN: Text Content */}
      <div className="flex flex-1 flex-col justify-center items-start space-y-8">
        <h1 className="text-4xl font-bold text-main-title">
          {title || "AI and Software Engineer"}
        </h1>
        <h2 className="text-2xl text-main-subtitle">{name}</h2>
        <p className="text-lg text-left">{description}</p>
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <Link
            href="/contacts"
            className="px-5 py-3 bg-attention text-main-background rounded-md text-center hover:bg-main-subtitle hover:text-main-title"
          >
            {contact}
          </Link>
          <a
            href="/resume/resume-en.pdf"
            className="px-5 py-3 bg-attention text-main-background rounded-md text-center hover:bg-main-subtitle hover:text-main-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            {resume}
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: Image */}
      <div className="flex flex-1 justify-center items-center">
        <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-lg">
          <Image
            src={photo}
            alt={photo ? `Photo of ${name}` : "Default placeholder photo"}
            width={800} // Slightly increased width for a larger image
            height={1200} // Adjusted height proportionally
            className="object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
/*

tailwind colors: https://tailwindcss.com/docs/customizing-colors



You are a color expert with more than 20+ years of experience. I am developing a portfolio website and I need your assistance. Help choosing colors for my project. I want blue

Sidebar should always be little darker than main part. I would like to use the following colors, but use better mix if you prefer.

Overview of the Project
This project is a responsive portfolio web application built with Next.js, Tailwind CSS, and modern UI/UX principles. It features sections for navigation, projects, experience, and contact information. The app includes light and dark modes for enhanced usability and aesthetics. The structure prioritizes responsiveness, accessibility, and scalability, making it adaptable to various devices and screen sizes.

Project Structure for Designers
1. Global Structure
Header/Navigation:

A sidebar navigation menu with toggle functionality on smaller devices (hamburger menu).
Links to key sections: Home, Experience, Projects, and Contacts.
Includes a theme toggle for switching between light and dark modes.
Main Content:

Dynamic sections for each page:
Home Page: Introduces the portfolio with a title, description, and links to contact or download a resume.
Projects Page: Displays a list of projects with details, including priority-based sorting and tech stack information.
Experience Page: Showcases professional experiences with company logos, descriptions, and durations.
Contact Page: Includes a contact form and social media links.
Footer:

(Optional) A footer for additional navigation or information.
2. Components and Styling Needs
Global Elements
Typography:

Style headers (h1, h2, etc.) for titles and subtitles.
Body text and descriptions should have high contrast for readability.
Consider different font sizes for mobile and desktop views.
Buttons:

Primary buttons for calls to action (e.g., "Send Message", "Learn More").
Style hover, active, and disabled states.
Links:

Consistent styling for internal and external links, including hover effects.
Forms:

Input fields (text, email, textarea) with distinct focus states.
Success/error messages with clear color differentiation.
Light/Dark Mode Requirements
Design two color schemes: one for light mode and one for dark mode. These schemes should be applied to the following elements:

Backgrounds:

Light Mode: Soft, muted colors that reduce glare.
Dark Mode: Deep, neutral tones that provide a calming interface.
Separate background colors for main content, sidebar, and cards.
Text:

High contrast against the background (e.g., dark text on light backgrounds, light text on dark backgrounds).
Borders and Dividers:

Subtle but visible in both light and dark modes.
Hover/Focus States:

Slightly brighter/darker shades for interactive elements.
Buttons and Links:

Primary colors for emphasis (e.g., "Send Message" button).
Icons:

Consistent styling for icons, with potential recoloring based on theme.
Page-Specific Elements
Sidebar Navigation:

Expand/collapse states.
Active link highlight.
Theme toggle button.
Projects Page:

Card-based layout for projects.
Category and priority-based color coding (optional).
Experience Page:

Professional, clean cards for each experience.
Company logos styled for consistency.
Contact Page:

Center-aligned form with clear labels and responsive spacing.
Icons for social media links.
Styling Elements and Changes
Here’s a breakdown of the elements that require styling:

Global Colors:

Define primary, secondary, background, text, and accent colors.
Ensure a consistent palette across light and dark modes.
Text Styles:

Font sizes, weights, and colors.
Dynamic scaling for responsive design.
Button Styles:

Base, hover, active, and disabled states.
Consistent padding and border-radius.
Cards:

Background, shadow, and hover effects for project/experience cards.
Icons:

Unified size and color scheme for light and dark themes.
Sidebar:

Background, text, hover effects, and expand/collapse transitions.
Input Fields:

Borders, focus rings, and background.
Next Steps
Collaborate with Designers:

Create mockups for light and dark modes with the color palette.
Design responsive layouts for key pages.
Define a Design System:

Standardize typography, spacing, and colors in a reusable style guide.
Test Accessibility:

Ensure WCAG-compliant color contrast and usability for all users.


*/
