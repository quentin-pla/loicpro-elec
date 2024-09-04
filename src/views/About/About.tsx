import {Banner} from "../../components/Banner/Banner";
import React from "react";
import "./About.styles.scss";
import {Footer} from "../../components/Footer/Footer";
import {FirstPart} from "./FirstPart/FirstPart";
import {SecondPart} from "./SecondPart/SecondPart";
import {ThirdPart} from "./ThirdPart/ThirdPart";
import {FourthPart} from "./FourthPart/FourthPart";
import {FifthPart} from "./FifthPart/FifthPart";
import {useScrollTop} from "../../hooks/useScrollTop";

export const About = () => {
    useScrollTop();

    return (
        <div className={"about-view"}>
            <Banner/>
            <FirstPart/>
            <SecondPart/>
            <ThirdPart/>
            <FourthPart/>
            <FifthPart/>
            <Footer/>
        </div>
    )
}