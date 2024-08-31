import {Banner} from "../../components/Banner/Banner";
import React from "react";
import "./About.styles.scss";
import {Footer} from "../../components/Footer/Footer";

export const About = () => {
    return (
        <div className={"about-view"}>
            <Banner/>
            <Footer/>
        </div>
    )
}