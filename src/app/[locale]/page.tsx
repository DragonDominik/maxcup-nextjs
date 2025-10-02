import { useLocale, useTranslations } from 'next-intl';
import Banner from './components/banner'
import WhyUs from './components/whyus'
import Services from './components/services'
import Production from './components/production'
import Renting from './components/renting'
import Washing from './components/washing'
import Logistics from './components/logistics'
import Contact from './components/contact'
import Footer from './components/footer'
import "@/style/main.css";

export default function Page() {

  return (
    <div id="page" className="m-0 p-0 w-full h-fit bg-[var(--light-blue)] max-w-[100vw]">
      <Banner />
      <WhyUs />
      <Services />
      <Production />
      <Renting />
      <Washing />
      <Logistics />
      <Contact />
      <Footer/>
    </div>
  );
}
