import Header from 'components/Header/Header.js';
import Presentation from 'components/Home/Presentation/Presentation.js';
import PortfolioSection from 'components/Home/PortfolioSection/PortfolioSection.js';
import Logos from 'components/Home/Logos/Logos.js';
import OurServices from 'components/Home/OurServices/OurServices.js';
import Mvv from 'components/Home/Mvv/Mvv.jsx';
import Contact from 'components/Home/Contact/Contact.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import DepoimentosSlider from 'components/Home/Avaliações/DepoimentosSlider.js';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';



function Home() {
  return (
    <>
      <BurguerMenu />
      <Header theme="default"/>
      <ButtonWhatsapp/>
      <Presentation />
      <OurServices />
      <PortfolioSection />
      <Mvv />
      <DepoimentosSlider />
      <Contact />
      <Logos />

    </>
  );
}

export default Home;