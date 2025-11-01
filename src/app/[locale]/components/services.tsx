import { useTranslations } from 'next-intl';
import { USALProvider } from '@usal/react';
import Carousel from './carousel'
import "@/style/main.css";

export default function WhyUs() {
    const t = useTranslations('SERVICES');

    return (
        <>
            <USALProvider>
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path className="m-0 p-0 mt-20 lg:mt-0" fill="var(--dark-blue)" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,160C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <div className="bg-[var(--dark-blue)] flex justify-center items-center relative w-full min-h-[6 0vh] 2xl:min-h-[60vw] h-fit max-h-[1000px] md:max-h-[160vw] lg:max-h-[80vw] m-0 p-0 -my-[1px]">
                    <div className="w-[90%] lg:w-[85%]">
                        <h2 className="lg-text sintony font-bold mb-2 text-[var(--light-blue)]" data-usal="once ease-in-out duration-500 threshold-100">{t("title")}</h2>
                        <Carousel />
                    </div>
                </div>
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path className="m-0 p-0" fill="var(--dark-blue)" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,160C672,149,768,107,864,106.7C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </USALProvider>
        </>
    );
}
