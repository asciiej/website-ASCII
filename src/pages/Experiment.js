import { useEffect } from "react";
import Header from "../components/Header/Header.js";
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import ExperimentBanner from 'components/Experimento/ExperimentBanner/ExperimentBanner.js';
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
            <ExperimentBanner title='Experimento' />
            <ASCIIAbout />
        </>
    );
}

export default Experiment;