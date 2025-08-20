import { useEffect } from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import Ebooks from "../components/Explore/Ebooks/Ebooks.js";
import TitleBanner from 'components/About/TitleBanner/TitleBanner.js';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';
import ASCIIPlayCarousel from 'components/Explore/ASCIIPlayCarousel/ASCIIPlayCarousel.js';
import Noticias from "components/Explore/Noticias/Noticias.js";


function Explore() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>  
            <BurguerMenu theme='light'/>
            <Header theme='dark'/>
            <ButtonWhatsapp/>
            <TitleBanner title='Explore+' image=''/>
            <Noticias/>
            <div
            style={{
                background: `linear-gradient(
                to bottom,
                #FFFFFF 0%,
                #c6e1ff 38%,
                #FFFFFF 98%
                )`,
            }}
            >
            <Ebooks />
            <ASCIIPlayCarousel />
            </div>
            <Footer />
        </>
    );
}

export default Explore;