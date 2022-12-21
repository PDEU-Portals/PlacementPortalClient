import React from "react";
import { ReactDOM } from "react";
import style from "./style.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Infopage from "./components/Infopage";
import Article from "./components/Article";
import Portal_info from "./components/Portal_info";
import Footer from "./components/Footer";
export default function App(){
    return(
        <>
            <Header />
            <Homepage />
            <Infopage/>            
            <Article/>
            <Portal_info/>
            <Footer/>
        </>
    )
}
