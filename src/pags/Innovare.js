import Header from 'components/Header/Header.js'
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import Projects from 'components/portfolio/Projects.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import CaseInnovare from 'components/portfolio/cases/CaseInnovare';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';

function Innovare() {
  return (
    <>
      <div id="portfolio-anchor"></div>
      <BurguerMenu theme='light'/>
      <Header theme='dark'/>
      <ButtonWhatsapp/>
      <CaseInnovare/>
    </>
  )
}

export default Innovare;
