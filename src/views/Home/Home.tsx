import React from 'react';
import './Home.styles.scss';
import {FirstPart} from "./FirstPart/FirstPart";
import {SecondPart} from "./SecondPart/SecondPart";
import {ThirdPart} from "./ThirdPart/ThirdPart";
import {Footer} from "../../components/Footer/Footer";
import {Banner} from "../../components/Banner/Banner";
import {useScrollTop} from "../../hooks/useScrollTop";

export const Home = () => {
    useScrollTop();

    return (
        <div className={"home-view"}>
            <Banner/>
            <FirstPart/>
            <SecondPart/>
            <ThirdPart/>
            <Footer/>
        </div>
    );
};