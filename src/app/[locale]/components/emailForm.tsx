"use client";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { USALProvider } from '@usal/react';
import "@/style/main.css";

export default function SendEmailButton() {
    const t = useTranslations('CONTACT');

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

        const sender_name = formData.get("name")?.toString() || "";

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, message, phone, reply_to: email, sender_name, company }),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus("success");
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                console.error(data);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <div className="w-full">
            <USALProvider>
                <form onSubmit={onSubmit} className="space-y-4">
                    <input type="hidden" name="subject" value="Title" />
                    <input type="hidden" name="from_name" value="Sender" />
                    {/* First row: Name + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-usal="fade-u delay-150 threshold-100">
                        {[
                            { id: "name", label: t("name"), must: true },
                            { id: "company", label: t("company"), must: false },
                        ].map(({ id, label, must }) => (
                            <div key={id} className="relative w-full">
                                <input
                                    type="text"
                                    name={id}
                                    id={id}
                                    maxLength={100}
                                    required={must}
                                    placeholder=" "
                                    className="peer block w-full border-b-2 border-[var(--dark-blue)] bg-transparent pt-2 pb-0.5 sm-text placeholder-transparent focus:border-[var(--dark-blue)] focus:outline-none"
                                />
                                <label
                                    htmlFor={id}
                                    className="absolute left-0 top-2 text-[var(--dark-blue)] sm-text transition-all duration-300
                                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-[var(--dark-blue)]
                                        peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm
                                        peer-focus:-top-2 peer-focus:sm-text peer-focus:text-[var(--mid-blue)]"
                                >
                                    {label} {must && <span className="xs-text">*</span>}
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Second row: Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-usal="fade-u delay-150 threshold-100">
                        {[
                            { id: "email", label: t("email"), type: "email", must: true },
                            { id: "phone", label: t("phone"), type: "text", must: true },
                        ].map(({ id, label, type, must }) => (
                            <div key={id} className="relative w-full">
                                <input
                                    type={type}
                                    name={id}
                                    id={id}
                                    maxLength={100}
                                    required={must}
                                    placeholder=" "
                                    pattern={id === "phone" ? "^\+?[0-9\s\-()]{7,20}$" : undefined}
                                    className="peer block w-full border-b-2 border-[var(--dark-blue)] bg-transparent pt-2 pb-0.5 sm-text placeholder-transparent focus:border-[var(--dark-blue)] focus:outline-none"
                                />
                                <label
                                    htmlFor={id}
                                    className="absolute left-0 top-2 text-[var(--dark-blue)] sm-text transition-all duration-300
                                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-[var(--dark-blue)]
                                        peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm
                                        peer-focus:-top-2 peer-focus:sm-text peer-focus:text-[var(--mid-blue)]"
                                >
                                    {label} <span className="xs-text">*</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Message textarea */}
                    <div className="relative w-full mt-4" data-usal="fade-u delay-150 threshold-100">
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            required
                            placeholder=" "
                            className="peer block w-full border-b-2 border-[var(--dark-blue)] bg-transparent pt-2 pb-0.5 sm-text placeholder-transparent focus:border-[var(--dark-blue)] focus:outline-none"
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-2 text-[var(--dark-blue)] sm-text transition-all duration-300
                                peer-placeholder-shown:top-2 peer-placeholder-shown:text-[var(--dark-blue)]
                                peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm
                                peer-focus:-top-2 peer-focus:sm-text peer-focus:text-[var(--mid-blue)]"
                        >
                            {t("message")} <span className="xs-text">*</span>
                        </label>
                    </div>
                    {/* Type select */}
                    <div className="relative w-full mt-4" data-usal="fade-u delay-150 threshold-100">
                        <label htmlFor="type" className="block text-[var(--dark-blue)] mb-1 font-medium">
                            {t("reason")} <span className="xs-text">*</span>
                        </label>
                        <select
                            name="reason"
                            id="reason"
                            defaultValue="rent"
                            className="w-full border-b-2 border-[var(--dark-blue)] pt-2 pb-0.5 sm-text focus:border-[var(--dark-blue)] focus:outline-none bg-transparent"
                        >
                            <option value="sales">{t("consales")}</option>
                            <option value="factory">{t("confactory")}</option>
                            <option value="other">{t("other")}</option>
                        </select>
                    </div>
                    {/* Button with status */}
                    <div className="w-full grid grid-cols-3 items-stretch mt-4">
                        <div className="flex justify-start items-center pr-2">
                            <span className="h-[var(--border-radius-16)] w-full bg-[var(--dark-blue)] rounded-[var(--border-radius-16)] shadow-custom-box" data-usal="fade-u delay-100 threshold-100"></span>
                        </div>
                        <div className="flex justify-center items-stretch">
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className={`w-full py-2 rounded-[var(--border-radius-16)] transition transform cursor-pointer
    ${status === "sending"
                                        ? "bg-gray-400 text-white cursor-not-allowed"
                                        : status === "success"
                                            ? "bg-[var(--mid-blue)] text-[var(--dark-blue)]"
                                            : status === "error"
                                                ? "bg-red-500 text-[var(--light-blue)]"
                                                : "bg-[var(--dark-blue)] text-[var(--light-blue)] hover:bg-[var(--mid-blue)] hover:text-[var(--dark-blue)] hover:scale-105 active:scale-95"
                                    }`}
                                data-usal="fade-u delay-150 threshold-100"
                            >
                                {status === "idle" && "Send"}
                                {status === "sending" && "Sending..."}
                                {status === "success" && "Sent!"}
                                {status === "error" && "Error"}
                            </button>

                        </div>
                        <div className="flex justify-start items-center pl-2">
                            <span className="h-[var(--border-radius-16)] w-full bg-[var(--dark-blue)] rounded-[var(--border-radius-16)] shadow-custom-box" data-usal="fade-u delay-100 threshold-100"></span>
                        </div>
                    </div>
                </form>
            </USALProvider>
        </div>
    );
}
