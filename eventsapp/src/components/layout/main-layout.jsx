import React from "react";
import { Header } from "../header/header";
import {Footer} from "../footer/footer";


//layout defined here so that header and footer is displayed across all pages within header and footer and children represents other things pages is rendering
//visit app.js for further undestanding
export const MainLayout =({children}) =>{
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}