import "./ThirdPart.styles.scss";
import {CheckItem} from "../../../components/CheckItem/CheckItem";

export const ThirdPart = () => {
    return (
        <div className={"services-view-third-part"}>
            <div className={"services-view-third-part-content"}>
                <div className={"services-view-third-part-image"}/>
                <div className={"services-view-third-part-left-content"}>
                    <h2>
                        Dépannages
                    </h2>
                    <p>
                        Vous avez un problème électrique dans votre logement ou vos locaux professionnels ? Nos équipes
                        d’électriciens interviennent à Aix-en-Provence et dans les environs pour identifier l’origine de
                        la panne et la réparer, afin de rétablir le courant.
                    </p>
                    <div className={"services-view-third-part-left-content-grid"}>
                        <CheckItem title={"Tableau électrique"}/>
                        <CheckItem title={"Appareillage électrique"}/>
                        <CheckItem title={"Visiophone"}/>
                        <CheckItem title={"Éclairage"}/>
                        <CheckItem title={"Volet roulant"}/>
                        <CheckItem title={"Moteur portail électrique"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}