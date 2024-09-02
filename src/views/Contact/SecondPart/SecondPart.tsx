import "./SecondPart.scss";
//@ts-ignore
import variables from "../../../variables.module.scss";
import {ClockRegular} from "@fluentui/react-icons";
import React from "react";
import {Button} from "../../../components/Button/Button";

export const SecondPart = () => {
    return (
        <div className={"contact-view-second-part"}>
            <div className={"contact-view-second-part-content"}>
                <div className={"contact-view-second-part-left-content"}>
                    <p>
                        LOICPRO ELEC est à votre disposition pour vous conseiller et étudier vos projets.
                    </p>
                    <h4>06 51 54 40 71</h4>
                    <div className={"flex-center"} style={{gap: "8px"}}>
                        <h5>Heures d'ouverture</h5>
                        <ClockRegular fontSize={30}/>
                    </div>
                    <h5 className={"primary-color"}>Du lundi au Dimanche De 8h à 20h</h5>
                </div>
                <div className={"contact-view-second-part-form-content"}>
                    <h2>Faisons connaissance</h2>
                    <input placeholder={"Nom et prénom"}/>
                    <input placeholder={"Téléphone"}/>
                    <input placeholder={"Adresse mail"}/>
                    <textarea placeholder={"Notes"}/>
                    <div className={"contact-view-second-part-form-content-checkbox-container"}>
                        <input type="checkbox" title={"Test"}/>
                        <label>
                            J'ai lu et j'accepte les mentions légales, notamment la mention relative à la protection des données personnelles.
                        </label>
                    </div>
                    <div className={"contact-view-second-part-form-content-button-container"}>
                        <Button title={"Envoyer"} primary/>
                    </div>
                </div>
            </div>
        </div>
    )
}