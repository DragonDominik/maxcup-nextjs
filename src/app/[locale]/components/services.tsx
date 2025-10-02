import { useTranslations } from 'next-intl';
import { USALProvider } from '@usal/react';
import Carousel from './carousel'
import "@/style/main.css";

export default function WhyUs() {
    const t = useTranslations('SERVICES');

    return (
        <>
            <USALProvider>
                <div className="flex justify-center items-center relative w-full min-h-[100vh] 2xl:min-h-[60vw] h-fit max-h-[1000px] md:max-h-[160vw] lg:max-h-[80vw] m-0 p-0 mt-20 lg:mt-0">
                    <div className="w-[90%] lg:w-[85%]">
                        <h2 className="lg-text sintony font-bold mb-2" data-usal="ease-in-out duration-500 threshold-100">{t("title")}</h2>
                        <Carousel/>
                    </div>
                </div>
            </USALProvider>
        </>
    );
}
