import {Banner} from "../../components/Banner/Banner";
import React from "react";
import "./Contact.styles.scss";
import {FirstPart} from "./FirstPart/FirstPart";
import {SecondPart} from "./SecondPart/SecondPart";
import {Footer} from "../../components/Footer/Footer";
import {useScrollTop} from "../../hooks/useScrollTop";

export const Contact = () => {
    useScrollTop();

    return (
        <div className={"contact-view"}>
            <Banner/>
            <FirstPart/>
            <SecondPart/>
            <Footer hideTopPart/>
        </div>
    )
}