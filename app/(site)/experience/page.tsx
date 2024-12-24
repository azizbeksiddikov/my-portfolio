import fs from "fs";
import path from "path";
import Image from "next/image";

// This is a server component (no "use client"), so we can use fs + path.
export default function ExperiencePage() {
  // 1) Read JSON from the filesystem
  const filePath = path.join(process.cwd(), "data", "en", "experiences.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const experiences = JSON.parse(fileContents) as Array<{
    company_name: string;
    position: string;
    place: string;
    start_date: string;
    finish_date: string;
    logo?: string;
    description: string[];
  }>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Page Title */}
        <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">
          Work Experience
        </h1>

        {/* If you have multiple experiences, map over them. 
            If there's only one, it'll just render once. */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow max-w-3xl mx-auto"
          >
            {/* Top: Company/Position + Logo on the right */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-1">
                  {exp.company_name} - {exp.position}
                </h2>
                <p className="text-blue-600">
                  {exp.place} | {exp.start_date} - {exp.finish_date}
                </p>
              </div>

              {/* Logo on the right (if present) */}
              {exp.logo && (
                <div className="w-16 h-16 relative ml-4">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company_name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* Bullet-Point Description */}
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
