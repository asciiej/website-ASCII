import React from "react";
import Footer from '../footer.js';
import Header from '../Header.js';
import style from './PagContato.module.css';
import {Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function PagContato(){
    return(
        <div className="Body">
         <Header/>
         <div className="formulario">

         </div>
         <Footer/>
        </div>
    );
}

export default PagContato;