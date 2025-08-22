import { useEffect } from "react";
import Header from "../components/Header/Header.js";
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import TitleBanner from 'components/About/TitleBanner/TitleBanner.js';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';
import ASCIIAbout from "components/Experimento/ASCIIAbout/ASCIIAbout.js";

function Experiment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>  
            <BurguerMenu theme='light'/>
            <Header theme='dark'/>
            <ButtonWhatsapp/>
            <TitleBanner title='Experimento' image='' isExperiment={true}/>
            <ASCIIAbout />
        </>
    );
}

export default Experiment;