import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { getPageData, getLayoutData } from "@/lib/data";

export default function HomePage() {
  // 1. Read JSON files
  const { title, name, description, photo } = getPageData("home");
  const { contact, resume } = getLayoutData("home");

  return (
    <div className="flex min-h-screen bg-content-light dark:bg-content-dark">
      {/* Sidebar is a client component */}

      <main className="flex-1 p-8 ml-64">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-6">
          {title || "Welcome to My Portfolio"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* LEFT COLUMN: Text Content */}
          <div>
            <h2 className="text-2xl text-gray-600 mb-4">{name}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link
                href="/contacts"
                className="px-5 py-3 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700"
              >
                {contact}
              </Link>
              <a
                href="/resume/resume-en.pdf"
                className="px-5 py-3 bg-green-600 text-white rounded-md text-center hover:bg-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resume}
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
              <Image
                src={photo} // Ensure this is a valid image URL
                alt={`${name} photo`}
                width={400}
                height={500}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
// return (
//   <div className="min-h-screen flex items-center justify-center bg-navbar-light text-gray-800">
//     <div className="container mx-auto px-4 py-8 lg:py-16">
//       <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8">
//         {/* LEFT COLUMN: Text Content */}
//         <div className="lg:w-1/2 mt-8 lg:mt-0 ">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
//           <h2 className="text-2xl text-gray-600 mb-4">{name}</h2>
//           <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
//           <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
//             <Link
//               href="/contacts"
//               className="px-5 py-3 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700"
//             >
//               {contact}
//             </Link>
//             <a
//               href="/resume/resume-en.pdf"
//               className="px-5 py-3 bg-green-600 text-white rounded-md text-center hover:bg-green-700"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {resume}
//             </a>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Image */}
//         <div className="lg:w-1/2 flex justify-center">
//           <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
//             <Image
//               src={photo} // e.g., "/images/profile.jpeg"
//               alt={`${name} photo`}
//               width={400}
//               height={500}
//               className="object-cover w-full h-auto"
//               priority // Optional: for faster loading if this is the main hero image
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }?
