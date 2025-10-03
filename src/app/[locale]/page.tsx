import Banner from './components/banner'
import ScrollTopBtn from "./components/scrollTopBtn";
import WhyUs from './components/whyus'
import Cups from './components/cups'
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
      <ScrollTopBtn/>
      <Cups/>
      <Services />
      <Production />
      <Renting />
      <Washing/>
      <Logistics/>
      <Contact />
      <Footer/>
    </div>
  );
}
