"use client";
import { useState } from "react";

export default function SendEmailButton() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const title = company ? `${company} - ${name}` : name;
    const body = `Message: ${message}\nPhone: ${phone}`;

    const sender_name = formData.get("name")?.toString() || "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, reply_to: email, sender_name  }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
      } else {
        console.error(data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Name" required className="peer block w-full border-b-2 border-blue-900 bg-transparent pt-2 pb-0.5 placeholder-transparent focus:outline-none" />
        <input type="text" name="company" placeholder="Company (optional)" className="peer block w-full border-b-2 border-blue-900 bg-transparent pt-2 pb-0.5 placeholder-transparent focus:outline-none" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="email" name="email" placeholder="Email" required className="peer block w-full border-b-2 border-blue-900 bg-transparent pt-2 pb-0.5 placeholder-transparent focus:outline-none" />
        <input type="text" name="phone" placeholder="Phone" required className="peer block w-full border-b-2 border-blue-900 bg-transparent pt-2 pb-0.5 placeholder-transparent focus:outline-none" />
      </div>
      <div>
        <textarea name="message" placeholder="Message" required rows={4} className="peer block w-full border-b-2 border-blue-900 bg-transparent pt-2 pb-0.5 placeholder-transparent focus:outline-none" />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full py-2 rounded transition transform ${
          status === "sending" ? "bg-gray-400 text-white cursor-not-allowed" :
          status === "success" ? "bg-green-500 text-white" :
          status === "error" ? "bg-red-500 text-white" :
          "bg-blue-900 text-white hover:bg-blue-700 hover:scale-105 active:scale-95"
        }`}
      >
        {status === "idle" && "Send"}
        {status === "sending" && "Sending..."}
        {status === "success" && "Sent!"}
        {status === "error" && "Error"}
      </button>
    </form>
  );
}
