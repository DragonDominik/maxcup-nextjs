import { useLocale, useTranslations } from 'next-intl';
import Banner from './components/banner'
import WhyUs from './components/whyus'
import Services from './components/services'
import Production from './components/production'
import Renting from './components/renting'
import Washing from './components/washing'
import Logistics from './components/logistics'
import "@/style/main.css";

export default function Page() {

  return (
    <div id="page" className="relative z-0 top-0 left-0 w-full h-fit bg-[var(--light-blue)] max-w-[100vw] overflow-hidden">
      <Banner/>
      <WhyUs/>
      <Services/>
      <Production/>
      <Renting/>
      <Washing/>
      <Logistics/>
    </div>
  );
}
