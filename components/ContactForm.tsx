"use client";

import { useState } from "react";

export default function ContactForm() {
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
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full px-3 py-2 border rounded"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full px-3 py-2 border rounded"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full px-3 py-2 border rounded h-32"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Send Message
      </button>

      {status && <p className="mt-2 text-center text-sm">{status}</p>}
    </form>
  );
}
