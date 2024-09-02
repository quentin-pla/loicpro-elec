import "./FirstPart.styles.scss";
import React from "react";
import {Button} from "../../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {AppViews} from "../../../const/AppViews";
import {AppView} from "../../../types/AppView/AppView";

export const FirstPart = () => {
    const navigate = useNavigate();

    return (
        <div className={"home-view-first-part"}>
            <div className={"home-view-background"}/>
            <div className={"home-view-left-part"}/>
            <div className={"home-view-left-part-content"}>
                <h3>
                    VOTRE ÉNERGIE<br/>NOTRE EXPERTISE
                </h3>
                <Button
                    color={"white"}
                    title={"NOUS CONTACTER"}
                    onClick={() => navigate(AppViews[AppView.Contact].path)}
                />
            </div>
        </div>
    )
}