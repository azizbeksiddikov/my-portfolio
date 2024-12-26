import ContactForm from "@/components/ContactForm";
import SocialIcons from "@/components/SocialIcons";
import { getPageData, getLayoutData } from "@/lib/data";

export default function ContactsPage() {
  const { contacts } = getPageData("contacts");
  const contacts_layout = getLayoutData("contacts");

  return (
    <div className="min-h-screen bg-main-background text-main-text flex flex-1 flex-col items-center justify-center gap-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-main-title text-center mb-8">
        {contacts_layout.title}
      </h1>

      {/* Social Icons Component */}
      <SocialIcons contacts={contacts} />

      {/* Contact Form */}
      <div className="w-full max-w-md px-4">
        <ContactForm contacts_layout={contacts_layout} />
      </div>
    </div>
  );
}
