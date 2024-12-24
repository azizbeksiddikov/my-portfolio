"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Update input values in state
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Example POST to /api/send-message
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
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
        className="w-full px-4 py-2 border rounded"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 border rounded"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full px-4 py-2 border rounded h-32"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
      >
        Send Message
      </button>

      {/* Status Message */}
      {status && <p className="mt-2 text-center text-sm">{status}</p>}
    </form>
  );
}
