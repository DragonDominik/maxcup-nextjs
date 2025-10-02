import { useLocale, useTranslations } from 'next-intl';
import Banner from './components/banner'
import WhyUs from './components/whyus'
import Services from './components/services'
import "@/style/main.css";

export default function Page() {
  const t = useTranslations('BANNER');
  const locale = useLocale();

  return (
    <div id="page" className="relative z-0 top-0 left-0 w-full h-fit bg-[var(--light-blue)] max-w-[100vw] overflow-hidden">
      <Banner></Banner>
      <WhyUs></WhyUs>
      <Services></Services>
    </div>
  );
}
