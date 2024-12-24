import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { Contact } from "@/libs/types/contact";

export default function ContactsPage() {
  const filePath = path.join(process.cwd(), "data", "en", "contacts.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const { contacts } = JSON.parse(fileData);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800">
      <div className="max-w-md w-full p-4">
        {/* ICONS (Server Rendered) */}
        <div className="flex justify-center space-x-6 mb-8">
          {contacts.map((item: Contact) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </a>
          ))}
        </div>

        {/* FORM (Client Rendered) */}
        <ContactForm />
      </div>
    </div>
  );
}
