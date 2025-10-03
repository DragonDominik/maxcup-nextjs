import { useTranslations } from 'next-intl';
import { USALProvider } from '@usal/react';
import ContactButton from './contactBtn';
import "@/style/main.css";

export default function Renting() {
    const t = useTranslations('RENTING');

    return (
        <>
            <USALProvider>
                <div id="renting" className="flex justify-center items-center relative w-full min-h-[100vh] 2xl:min-h-[60vw] h-fit max-h-[1000px] md:max-h-[160vw] lg:max-h-[80vw] m-0 p-0 mt-20 lg:mt-0 overflow-hidden">
                    <div className="w-[90%] lg:w-[85%]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mx-auto">
                            {/* 1 */}
                            <div className="flex flex-col justify-center p-1 order-1 lg:order-2">
                                <h3 className="lg-text sintony font-bold" data-usal="fade-d delay-100 threshold-100">{t("title")}</h3>
                            </div>
                            {/* 2 */}
                            <div className="flex flex-col justify-center order-2 lg:order-1">
                                <span className="w-full h-[var(--border-radius-16)] shadow-custom-box bg-[var(--dark-blue)] rounded-[var(--border-radius-16)]" data-usal="fade-d delay-100 threshold-100"></span>
                            </div>
                            {/* 3 */}
                            <div className="flex flex-col justify-start p-1 order-4 lg:order-4 items-center 2xl:items-start">
                                <div className="inline-block">
                                    <img
                                        src="/img/maxcup-repohar-berles.webp" alt={t("title")}
                                        className="rounded-[var(--border-radius-50)] border-15 lg:border-15 border-[var(--mid-blue)] shadow-custom-box" data-usal="fade-l threshold-80 delay-100 duration-800"
                                    />
                                    <ContactButton direction="left" />
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="flex flex-col justify-start p-1 order-3 lg:order-3">
                                <p className="whitespace-pre-wrap text-justify" data-usal="ease-in-out duration-500 threshold-70">
                                    {t("description")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </USALProvider>
        </>
    );
}
