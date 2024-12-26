"use client";

import { useState } from "react";
import { ContactLayout } from "@/lib/types/contact";

export default function ContactForm({
  contacts_layout,
}: {
  contacts_layout: ContactLayout;
}) {
  const {
    your_name,
    your_email,
    your_message,
    send_message,
    sending,
    successful_message,
    error_message,
  } = contacts_layout;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Update form fields in state
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit to Next.js API route
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(`${sending}...`);

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(successful_message); // Correctly display the success message
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(error_message); // Correctly display the error message
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus(error_message); // Fallback for network or server errors
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder={your_name}
        className="w-full px-4 py-2 border border-sidebar-background rounded bg-main-background text-main-text focus:outline-none focus:ring-2 focus:ring-text-main-title"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder={your_email}
        className="w-full px-4 py-2 border border-sidebar-background rounded bg-main-background text-main-text focus:outline-none focus:ring-2 focus:ring-text-main-title"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder={your_message}
        className="w-full px-4 py-2 border border-sidebar-background rounded bg-main-background text-main-text focus:outline-none focus:ring-2 focus:ring-text-main-title h-32"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 rounded bg-sidebar-background text-white hover:bg-attention transition-colors"
      >
        {send_message}
      </button>

      {/* Status Message */}
      {status && (
        <p
          className={`mt-2 text-center text-sm ${
            status === successful_message ? "text-green-600" : "text-black"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
