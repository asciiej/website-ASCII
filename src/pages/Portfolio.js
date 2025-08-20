import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js';
import TitleBanner from 'components/About/TitleBanner/TitleBanner.js';
import Projects from 'components/portfolio/Projects.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';

function Portfolio() {
  return (
    <>
      <div id="portfolio-anchor"></div>
      <BurguerMenu theme='light'/>
      <Header theme='dark'/>
      <ButtonWhatsapp/>
      <TitleBanner title='Nosso Portfolio' image=''/>

       <Projects/>
       <Footer />
    </>
  )
}

export default Portfolio;
