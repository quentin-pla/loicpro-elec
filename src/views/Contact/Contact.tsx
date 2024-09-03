import {Banner} from "../../components/Banner/Banner";
import React from "react";
import "./Contact.styles.scss";
import {FirstPart} from "./FirstPart/FirstPart";
import {SecondPart} from "./SecondPart/SecondPart";
import {Footer} from "../../components/Footer/Footer";

export const Contact = () => {
    return (
        <div className={"contact-view"}>
            <Banner/>
            <FirstPart/>
            <SecondPart/>
            <Footer hideTopPart/>
        </div>
    )
}