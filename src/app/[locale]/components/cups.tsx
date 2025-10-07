import { useTranslations } from 'next-intl';
import { USALProvider } from '@usal/react';
import "@/style/main.css";

export default function Cups() {
    const t = useTranslations('CUPS');

    return (
        <>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full mt-20 lg:mt-0">
                <path
                    d="M0,50 C120,20 240,80 360,50 C480,20 600,80 720,50 C840,20 960,80 1080,50 C1200,20 1320,80 1440,50"
                    stroke="var(--dark-blue)"
                    strokeWidth="5"
                    fill="none"
                />
            </svg>
            <USALProvider>
                <div id="cups" className="flex flex-col justify-center items-center relative w-full min-h-[100vh] 2xl:min-h-[60vw] h-fit max-h-[1000px] md:max-h-[160vw] lg:max-h-[80vw] m-0 p-0">
                    <div className="w-[90%] lg:w-[85%] mb-4">
                        <h2 className="lg-text sintony font-bold" data-usal="ease-in-out duration-500 threshold-100">{t("title")}</h2>
                        <p className="whitespace-pre-wrap text-justify" data-usal="ease-in-out duration-500 threshold-70">
                            {t("description")}
                        </p>
                    </div>
                    {/* Kép loop */}
                    <div className="grid grid-cols-[auto_1fr_auto] items-center w-[90%] lg:w-[85%] mb-8 gap-0" data-usal="ease-in-out duration-500 threshold-70">
                        <span className="h-full w-[calc(var(--border-radius-16)/2)] shadow-custom-box bg-[var(--dark-blue)] rounded-[var(--border-radius-16)]"></span>
                        PLACEHOLDER
                        <span className="h-full w-[calc(var(--border-radius-16)/2)] shadow-custom-box bg-[var(--dark-blue)] rounded-[var(--border-radius-16)]"></span>
                    </div>
                </div>
            </USALProvider>
        </>
    );
}
