import Header from 'components/Header/Header.js'
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import Projects from 'components/portfolio/Projects.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';

function Portfolio() {
  window.scrollTo(0, 0)
  return (
    <>
      <BurguerMenu theme='light'/>
      <Header theme='dark' />
      <TitleBanner title='Nosso Portfolio' image=''/>
       <Projects />
    </>
  )
}

export default Portfolio;
