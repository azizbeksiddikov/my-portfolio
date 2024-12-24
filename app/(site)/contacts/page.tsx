import fs from "fs";
import path from "path";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactsPage() {
  // 1. Read contacts JSON
  const filePath = path.join(process.cwd(), "data", "en", "contacts.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const { contacts } = JSON.parse(fileData);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-lg w-full p-4 sm:p-8 bg-gray-50">
        {/* Icon Row */}
        <div className="flex justify-center space-x-6 mb-8">
          {contacts.map((contact: any) => (
            <a
              key={contact.label}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={contact.icon}
                alt={contact.label}
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}
