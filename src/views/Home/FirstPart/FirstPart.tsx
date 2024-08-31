import "./FirstPart.styles.scss";
import React from "react";
import {Button} from "../../../components/Button/Button";

export const FirstPart = () => {
    return (
        <div className={"home-view-first-part"}>
            <div className={"home-view-background"}/>
            <div className={"home-view-left-part"}/>
            <div className={"home-view-left-part-content"}>
                <h3>
                    VOTRE ÉNERGIE<br/>NOTRE EXPERTISE
                </h3>
                <Button color={"white"} title={"NOUS CONTACTER"}/>
            </div>
        </div>
    )
}