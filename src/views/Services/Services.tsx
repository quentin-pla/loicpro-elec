import {Banner} from "../../components/Banner/Banner";
import React from "react";
import "./Services.styles.scss";
import {Footer} from "../../components/Footer/Footer";
import {FirstPart} from "./FirstPart/FirstPart";
import {SecondPart} from "./SecondPart/SecondPart";
import {ThirdPart} from "./ThirdPart/ThirdPart";
import {FourthPart} from "./FourthPart/FourthPart";

export const Services = () => {
    return (
        <div className={"services-view"}>
            <Banner/>
            <FirstPart/>
            <SecondPart/>
            <ThirdPart/>
            <FourthPart/>
            <Footer/>
        </div>
    )
}