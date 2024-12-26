import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { getPageData, getLayoutData } from "@/lib/data";
import { Contact } from "@/lib/types/contact";

export default function ContactsPage() {
  const { contacts } = getPageData("contacts");
  const contacts_layout = getLayoutData("contacts");
  return (
    <div className="min-h-screen bg-main-background text-main-text flex flex-1 flex-col items-center justify-center gap-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-main-title text-center mb-8">
        {contacts_layout.title}
      </h1>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-8">
        {contacts.map((item: Contact) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={36}
              height={36}
              className="rounded"
            />
          </a>
        ))}
      </div>
      {/* Contact Form */}
      <ContactForm contacts_layout={contacts_layout} />
    </div>
  );
}
