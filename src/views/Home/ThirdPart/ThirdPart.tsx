import "./ThirdPart.styles.scss";
import {Button} from "../../../components/Button/Button";
import {DeveloperBoardLightningRegular, FluentIcon, HomeRegular, ToolboxRegular} from "@fluentui/react-icons";
import {useNavigate} from "react-router-dom";
import {AppViews} from "../../../const/AppViews";
import {AppView} from "../../../types/AppView/AppView";

export const ThirdPart = () => {
    const navigate = useNavigate();
    return (
        <div className={"home-view-third-part"}>
            <div className={"home-view-third-part-header"}>
                <h2>Nos domaines de compétences</h2>
                <Button title={"VOIR PLUS"} onClick={() => navigate(AppViews[AppView.Services].path)}/>
            </div>
            <div className={"home-view-third-part-content-grid"}>
                {renderGridItem(HomeRegular, "Installations neuves & Rénovations")}
                {renderGridItem(ToolboxRegular, "Dépannages à domicile")}
                {renderGridItem(DeveloperBoardLightningRegular, "Installation équipements électriques")}
            </div>
        </div>
    )
}

///////////////////////////////////////////////////// PURE METHODS /////////////////////////////////////////////////////

const renderGridItem = (Icon: FluentIcon, title: string) => {
    return (
        <div className={"home-view-third-part-content-grid-item"}>
            <Icon fontSize={100} className={"primary-color"}/>
            <h4>{title}</h4>
            <div className={"home-view-third-part-content-grid-item-rectangle"}/>
        </div>
    )
}