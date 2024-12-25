import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  // 1. Read JSON file (e.g., data/en/overview.json)
  const filePath = path.join(process.cwd(), "data", "en", "home.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { title, name, description, photo } = JSON.parse(fileContents);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8">
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
            <h2 className="text-2xl text-gray-600 mb-4">{name}</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link
                href="/contacts"
                className="px-5 py-3 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700"
              >
                Contact Me
              </Link>
              <a
                href="/resume/resume-en.pdf"
                className="px-5 py-3 bg-green-600 text-white rounded-md text-center hover:bg-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
              <Image
                src={photo} // e.g., "/images/profile.jpeg"
                alt={`${name} photo`}
                width={400}
                height={500}
                className="object-cover w-full h-auto"
                priority // Optional: for faster loading if this is the main hero image
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
