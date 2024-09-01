import "./FourthPart.styles.scss";
import {CheckItem} from "../../../components/CheckItem/CheckItem";

export const FourthPart = () => {
    return (
        <div className={"services-view-fourth-part"}>
            <div className={"services-view-fourth-part-content"}>
                <div className={"services-view-fourth-part-left-content"}>
                    <h2>
                        Installation équipements électriques
                    </h2>
                    <p>
                        Vous avez besoin d'une équipe d'électriciens expérimentés pour l'installation de vos équipements
                        électriques ? Que ce soit pour un moteur de portail, un volet roulant ou des appareils
                        électroniques, LOICPRO ELEC intervient avec réactivité et expertise. Nous assurons la mise en
                        place professionnelle de tous vos équipements pour garantir leur bon fonctionnement et leur
                        intégration optimale dans votre système électrique.
                    </p>
                    <div className={"services-view-fourth-part-left-content-grid"}>
                        <CheckItem title={"Installation équipements électriques"}/>
                        <CheckItem title={"Assurance du bon fonctionnement"}/>
                        <CheckItem title={"Intégration d’appareils électrinoques"}/>
                        <CheckItem title={"Assurance des équipements"}/>
                        <CheckItem title={"Intervention rapide et experte"}/>
                        <CheckItem title={"Integration optimale au système électrique"}/>
                    </div>
                </div>
                <div className={"services-view-fourth-part-image"}/>
            </div>
        </div>
    )
}