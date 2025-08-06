import Content from "components/About/AboutUs/AboutUs.js"
import Banner from "components/About/TitleBanner/TitleBanner.js"
import AboutUsImg from "image/quem-somos.png"
import Header from "components/Header/Header.js";
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import MembersCarousel from 'components/About/MembersCarousel/MembersCarousel.js';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';
import LinhaTempo from 'components/About/LinhaTempo/LinhaTempo';

export default function AboutUs() {
    return (
        <>  
            <div id="sobre-anchor"></div>
            <BurguerMenu theme="light"/>
            <Header theme="dark"/>
            <ButtonWhatsapp/>
            <Banner title="Sobre Nós" id="about-us__banner-img" image={AboutUsImg}/>
            <Content />
            <LinhaTempo/>
        </>
    );
}