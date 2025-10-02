import { useTranslations } from 'next-intl';
import { USALProvider } from '@usal/react';
import ClientVideo from './video'
import "@/style/main.css";

export default function WhyUs() {
    const t = useTranslations('WHYUS');

    return (
        <>
            <USALProvider>
                <div className="flex justify-center items-center relative w-screen min-h-[100vh] 2xl:min-h-[60vw] h-fit max-h-[1000px] md:max-h-[160vw] lg:max-h-[80vw] m-0 p-0 mt-20 lg:mt-0">
                    <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 w-[90%] lg:w-[85%]">
                        <div className="order-1 lg:order-1">
                            <h1 className="lg-text sintony font-bold" data-usal="ease-in-out duration-500 threshold-100">{t("title")}</h1>
                            <p className="whitespace-pre-wrap text-justify" data-usal="ease-in-out duration-500 threshold-70">
                                {t.rich("paragraph", {
                                    strong: (children: React.ReactNode) => (
                                        <strong className="text-dark-blue">{children}</strong>
                                    ),
                                })}
                            </p>
                        </div>
                        <div className="order-3 lg:order-2 mt-2 lg:mt-0 flex justify-center items-center" data-usal="ease-in-out duration-500 threshold-70">
                                <ClientVideo/>
                        </div>
                    </div>
                </div>
            </USALProvider>
        </>
    );
}
