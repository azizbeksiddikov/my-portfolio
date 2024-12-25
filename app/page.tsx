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
