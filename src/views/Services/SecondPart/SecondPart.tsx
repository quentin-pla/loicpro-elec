import "./SecondPart.styles.scss";
import {CheckItem} from "../../../components/CheckItem/CheckItem";
import {HomeRegular} from "@fluentui/react-icons";

export const SecondPart = () => {
    return (
        <div className={"services-view-second-part"}>
            <div className={"services-view-second-part-content"}>
                <div className={"services-view-second-part-left-content"}>
                    <h2>
                        Installations neuves & Rénovations
                    </h2>
                    <p>
                        Vous avez besoin d'une équipe d'électriciens compétents pour réaliser l'installation électrique
                        de votre appartement, maison ou entreprise ? Que ce soit pour une construction neuve, une
                        extension, ou une rénovation électrique, LOICPRO ELEC intervient avec réactivité et expertise.
                    </p>
                    <div className={"services-view-second-part-left-content-grid"}>
                        <CheckItem title={"Diagnostic complet"}/>
                        <CheckItem title={"Distribution et câblage"}/>
                        <CheckItem title={"Pose et raccordement"}/>
                        <CheckItem title={"Respect de la norme NF C 15-100"}/>
                        <CheckItem title={"Tableau électrique"}/>
                        <CheckItem title={"Domotique et réseau"}/>
                    </div>
                </div>
                <div className={"services-view-second-part-image"}>
                    <div className={"services-view-second-part-icon"}>
                        <HomeRegular fontSize={60} color={"white"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}