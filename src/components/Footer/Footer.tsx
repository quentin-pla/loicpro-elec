import "./Footer.styles.scss";
import React from "react";
//@ts-ignore
import variables from "../../variables.module.scss";
import {ClockRegular} from "@fluentui/react-icons";
import {FacebookIcon, InstagramIcon} from "../../assets/icons";

export const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"footer-top-part"}>
                <div className={"footer-background"}/>
                <div className={"footer-top-left-part"}/>
                <div className={"footer-top-left-part-content"}>
                    <h4>
                        LOIC<span style={{color: variables.primaryColor}}>PRO</span> ELEC
                    </h4>
                    <div className={"rectangle-decoration"}/>
                    <h4>06 51 54 40 71</h4>
                    <div className={"flex-center"} style={{gap: "8px"}}>
                        <h5>Heures d'ouverture</h5>
                        <ClockRegular fontSize={30}/>
                    </div>
                    <h6>Du lundi au Dimanche De 8 h à 20 h</h6>
                </div>
            </div>
            <div className={"footer-bottom-part"}>
                <div>
                    <p>
                        Notre expérience et process nous permettent de vous garantir des services de premier ordre avec
                        une excellente qualité de prestations.
                    </p>
                    <a>
                        Mentions légales
                    </a>
                </div>
                <div>
                    <FacebookIcon width={"40px"} height={"40px"}/>
                    <InstagramIcon width={"40px"} height={"40px"}/>
                </div>
            </div>
        </div>
    )
}