import "./Footer.styles.scss";
import React from "react";
//@ts-ignore
import variables from "../../variables.module.scss";
import {ClockRegular} from "@fluentui/react-icons";
import {FacebookIcon, InstagramIcon, LinkedinIcon} from "../../assets/icons";
import {useNavigate} from "react-router-dom";
import {AppView} from "../../types/AppView/AppView";
import {AppViews} from "../../const/AppViews";

export const Footer = (props: {
    hideTopPart?: boolean
}) => {
    const navigate = useNavigate();
    const phoneNumber = ["06","51","54","40","71"].join(" ");
    return (
        <div className={"footer"}>
            {!props.hideTopPart &&
                <div className={"footer-top-part"}>
                    <div className={"footer-background"}/>
                    <div className={"footer-top-left-part"}/>
                    <div className={"footer-top-left-part-content"}>
                        <h4>
                            LOIC<span style={{color: variables.primaryColor}}>PRO</span> ELEC
                        </h4>
                        <div className={"rectangle-decoration"}/>
                        <h4>{phoneNumber}</h4>
                        <div className={"flex-center"} style={{gap: "8px"}}>
                            <h5>Heures d'ouverture</h5>
                            <ClockRegular fontSize={30}/>
                        </div>
                        <h6>Du Lundi au Samedi De 8 h à 20 h</h6>
                    </div>
                </div>
            }
            <div className={"footer-bottom-part"}>
                <div>
                    <p>
                        Notre expérience et process nous permettent de vous garantir des services de premier ordre avec
                        une excellente qualité de prestations.
                    </p>
                    <a onClick={() => navigate(AppViews[AppView.LegalInformation].path)}>
                        Mentions légales
                    </a>
                </div>
                <div>
                    <button onClick={handleOpenLink("https://www.facebook.com/share/e7kcChs5Q2v7tRAB")}>
                        <FacebookIcon width={"40px"} height={"40px"}/>
                    </button>
                    <button onClick={handleOpenLink("https://www.instagram.com/loicpro_elec")}>
                        <InstagramIcon width={"40px"} height={"40px"}/>
                    </button>
                    <button onClick={handleOpenLink("https://www.linkedin.com/groups/13079137")}>
                        <LinkedinIcon width={"40px"} height={"40px"}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

const handleOpenLink = (url: string) => () => {
    window.open(url, "_blank");
}