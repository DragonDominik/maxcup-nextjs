'use client';
import { useState, useRef, useEffect } from "react";
import { useTranslations } from 'next-intl';
import { USALProvider } from '@usal/react';
import "@/style/main.css";

const allowedLangs = ["HU", "EN"] as const;


export default function Banner({ }) {
    const t = useTranslations('BANNER');

    const [open, setOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const desktopLangRef = useRef<HTMLDivElement | null>(null);
    const mobileLangRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (!open) return;
            const target = e.target as Node;
            if (desktopLangRef.current && desktopLangRef.current.contains(target)) return;
            if (mobileLangRef.current && mobileLangRef.current.contains(target)) return;
            setOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <div
            id="banner"
            className="flex flex-col relative w-screen h-screen bg-cover bg-center m-0 p-0 max-h-[1000px] md:max-h-[160vw] lg:max-h-[80vw]"
            style={{ backgroundImage: `url('/img/bg.webp')` }}
        >
            {/* Fehér kapszula */}
            <USALProvider>
                <div className="hidden md:block absolute right-0 top-0 w-1/2 h-screen max-h-[1000px] md:max-h-[160vw] lg:max-h-[80vw] bg-white/55 rounded-l-full" data-usal="slide-l-100 threshold-0 once delay-500 duration-2000"></div>
            </USALProvider>

            {/* Desktop Navbar */}
            <USALProvider>
                <nav className="relative z-50 top-0 left-0 w-full px-4 py-4 hidden lg:flex items-center justify-between sintony" data-usal="slide-d-150 delay-1500 duration-1000 threshold-0 once">
                    {/* Bal*/}
                    <div className="flex gap-2 xl:gap-5 text-[var(--light-blue)] shadow-custom-text">
                        {["cups", "production", "renting", "washing", "logistics"].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className="cursor-pointer px-2 xl:px-4 py-2 rounded-[var(--border-radius-16)] transition-all duration-500 ease-in-out hover:[box-shadow:inset_0_4px_5px_5px_rgb(0,0,0,0.25)]"
                            >
                                {t(`${section}`)}
                            </a>
                        ))}
                    </div>

                    {/* Jobb */}
                    <div className="flex items-center gap-2">
                        <a
                            href="#contact"
                            className="cursor-pointer bg-[var(--dark-blue)] text-[var(--light-blue)] px-4 py-2 rounded-[var(--border-radius-16)] shadow-custom-box transition-all duration-500 ease-in-out hover:bg-[var(--dark-blue-60)] hover:[box-shadow:inset_0_4px_5px_5px_rgb(0,0,0,0.25)]"
                        >
                            {t('contact')}
                        </a>

                        {/* Nyelv */}
                        <div className="relative" ref={desktopLangRef}>
                            <button onClick={() => setOpen(!open)} className="cursor-pointer bg-[var(--dark-blue)] text-[var(--light-blue)] px-2 py-2 rounded-[var(--border-radius-16)] shadow-custom-box flex items-center justify-center gap-1 min-w-[80px] group transition-all duration-500 ease-in-out hover:bg-[var(--dark-blue-60)] hover:[box-shadow:inset_0_4px_5px_5px_rgb(0,0,0,0.25)]">
                                {t('lang')}
                                <svg className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {open && (
                                <div className="absolute right-0 mt-2 w-auto bg-[var(--light-blue)] rounded-[var(--border-radius-16)] border border-[var(--dark-blue)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    {allowedLangs.map((option) => (
                                        <a key={option} href={`/${option.toLowerCase()}/`} className="px-4 py-1 flex items-center justify-center font-medium text-gray-700 transition-colors duration-300 ease-in-out hover:bg-[var(--dark-blue)] hover:text-[var(--light-blue)]">
                                            {option}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </USALProvider>

            {/* Mobile Navbar */}
            <USALProvider>
                <nav className="relative z-50 top-0 left-0 w-full px-4 py-4 flex lg:hidden items-center justify-between sintony" data-usal="slide-d-150 delay-1500 duration-1500 threshold-0 once">
                    <div className="text-[var(--light-blue)] shadow-custom-text py-2 font-semibold">MAX CUP</div>
                    <div className="flex items-center h-full">
                        <div className="relative" ref={mobileLangRef}>
                            <button onClick={() => { setIsMenuOpen(false); setOpen(!open); }} className="cursor-pointer md:bg-[var(--dark-blue-60)] py-1 px-2 mx-2 rounded-md flex items-center justify-center gap-1 text-[var(--light-blue)] ring-2 ring-[var(--light-blue)] ring-opacity-50">{t('lang')}</button>
                            {open && (
                                <div className="absolute right-0 mt-2 w-auto bg-[var(--light-blue)] rounded-[var(--border-radius-16)] border border-[var(--dark-blue)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    {allowedLangs.map((option) => (
                                        <a key={option} href={`/${option.toLowerCase()}/`} className="px-4 py-1 flex items-center justify-center font-medium text-gray-700 transition-colors duration-300 ease-in-out hover:bg-[var(--dark-blue)] hover:text-[var(--light-blue)]">
                                            {option}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button onClick={() => { setIsMenuOpen(!isMenuOpen); setOpen(false); }} className="cursor-pointer p-1 rounded-md flex items-center justify-center ring-2 ring-[var(--light-blue)] ring-opacity-50 md:bg-[var(--dark-blue-60)]">
                            <svg className={`w-6 h-6 text-[var(--light-blue)] transition-transform duration-300 ${isMenuOpen ? "rotate-45" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </nav>
            </USALProvider>

            {/* Mobile teljesképernyő */}
            {isMenuOpen && (
                <div className="absolute inset-0 z-40 flex items-center justify-center transition-opacity duration-300 opacity-100">
                    <div className="bg-[var(--dark-blue)] w-full h-full flex flex-col items-center justify-center space-y-6 overflow-y-auto transition-transform duration-300 animate-in fade-in slide-in-from-top">
                        {["cups", "production", "renting", "washing", "logistics", "contact"].map((section) => (
                            <a key={section} href={`#${section}`} className="text-[var(--light-blue)] text-2xl font-medium capitalize hover:text-[var(--dark-blue)] hover:bg-[var(--light-blue)] px-6 py-1 rounded-md transition-colors duration-200" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>
                                {t(`${section}`)}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Hero */}
            <USALProvider>
                <div className="hidden md:grid grid-cols-[50%_50%] flex-1 relative">
                    <div className="flex flex-col items-left justify-center pl-8 xl:pl-12 ">
                        <div className="hidden lg:block sintony xl-text text-[var(--light-blue)] shadow-custom-text font-bold -mx-1.5 -my-2 lg:-my-6" data-usal="fade-d duration-1500 delay-200" >
                            MAX CUP
                        </div>
                        <div className="text-[var(--light-blue)] shadow-custom-text xl-text-between-md-lg" data-usal="fade-u split-word split-delay-100 duration-1500 delay-200">
                            {t('clean')}
                        </div>
                        <a
                            href="#contact"
                            className="
                    relative inline-block text-[var(--dark-blue)] bg-[var(--light-blue)]
                    px-8 py-2 my-2 w-fit rounded-[var(--border-radius-16)] transition-all duration-500
                    after:content-['»'] after:absolute after:top-1/2 after:right-0 hover:pl-6 hover:pr-10 after:-translate-y-1/2
                    after:opacity-0 after:transition-all after:duration-500
                    hover:after:opacity-100 hover:after:right-6 shadow-custom-box cursor-pointer
                  "
                            data-usal="fade-u duration-1500 delay-1500"
                        >
                            {t('offer')}
                        </a>
                    </div>
                    <div className="flex justify-center items-center" data-usal="slide-l-100 duration-1500 once delay-1000 threshold-0">
                        <img
                            src="/img/cup1.webp"
                            alt="Cup"
                            className="ml-10 max-h-[70vw] h-[50vh] md:px-4 lg:h-[65vh] lg:max-w-[40vw] xl:h-[80vh] w-auto max-w-full object-contain" />
                    </div>
                </div>
            </USALProvider>

            <USALProvider>
                <div className="md:hidden absolute left-0 right-0 bottom-0 z-30 w-full overflow-hidden flex flex-1 h-full flex-col justify-end items-center">
                    <div
                        className="absolute bottom-[-20%] right-[-20%] w-[120%] h-[120%] bg-no-repeat bg-contain bg-right-bottom" data-usal="slide-l-100 duration-1500 once delay-500 threshold-0"
                        style={{ backgroundImage: "url('/img/cup1.webp')" }}
                    />
                    <a
                        href="#contact"
                        className="
                relative inline-block text-[var(--dark-blue)] bg-[var(--light-blue)] 
                px-8 py-2 mb-10 w-fit rounded-[var(--border-radius-16)] transition-all duration-500
                after:content-['»'] after:absolute after:top-1/2 after:right-0 hover:pl-6 hover:pr-10 after:-translate-y-1/2
                after:opacity-0 after:transition-all after:duration-500
                hover:after:opacity-100 hover:after:right-6 shadow-box cursor-pointer
              " data-usal="fade-u duration-1500 delay-1500"
                    >
                        {t('offer')}
                    </a>
                </div>
            </USALProvider>
        </div>
    );
}
