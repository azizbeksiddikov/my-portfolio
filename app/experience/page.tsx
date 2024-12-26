import Image from "next/image";
import { getPageData, getLayoutData } from "@/lib/data";

export default function ExperiencePage() {
  // 1. Read JSON files
  const { experience } = getLayoutData("experiences");
  const experiences = getPageData("experiences") as Array<{
    company_name: string;
    position: string;
    place: string;
    start_date: string;
    finish_date: string;
    logo?: string;
    description: string[];
  }>;

  return (
    <div className="min-h-screen bg-main-background text-main-text">
      <div className="container mx-auto px-4 py-16">
        {/* Page Title */}
        <h1 className="text-center  text-4xl font-bold mb-12 text-main-title">
          {experience}
        </h1>

        {/* Experiences */}
        <div className=" space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-main-subBackground  p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
            >
              {/* Header: Company, Position, Place, Logo */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 mr-24 ml-6">
                {/* Header: Company, Position, Place */}
                <div className="flex flex-1 flex-col gap-1.5">
                  <h2 className="text-2xl font-semibold text-main-title">
                    {exp.company_name}
                  </h2>
                  <p className="text-lg text-main-subtitle">{exp.position}</p>
                  <p className="text-sm text-main-resume">
                    {exp.place} | {exp.start_date} - {exp.finish_date}
                  </p>
                </div>

                {/* Logo */}
                {exp.logo && (
                  <div className="w-24 h-24 relative mt-4 lg:mt-0">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company_name} logo`}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                )}
              </div>

              {/* Description */}
              <ul className="list-disc list-inside space-y-3 pl-4 text-main-text">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
