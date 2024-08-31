import "./SecondPart.styles.scss";
import {CheckItem} from "../../../components/CheckItem/CheckItem";

export const SecondPart = () => {
    return (
        <div className={"home-view-second-part"}>
            <div className={"home-view-second-part-content"}>
                <div className={"home-view-second-part-left-content"}>
                    <h3>
                        À la recherche d’une entreprise d’électriciens qualifiés ?
                    </h3>
                    <p>
                        Pour vos projets de construction ou de rénovation, LOICPRO ELEC met à votre disposition son
                        efficacité et sa réactivité, prêtes à intervenir au alentour
                        d’Aix-en-Provence.
                    </p>
                    <h3>Ce qui fait notre différence</h3>

                    <div className={"home-view-second-part-left-content-grid"}>
                        <CheckItem title={"Entreprise familiale"}/>
                        <CheckItem title={"Accompagnement de l’étude à la réalisation"}/>
                        <CheckItem title={"+ 30 ans d’expérience"}/>
                        <CheckItem title={"Respect des normes NF C 15-100"}/>
                        <CheckItem title={"Techniciens qualifiés"}/>
                        <CheckItem title={"Respect des délais de livraison"}/>
                        <CheckItem title={"Professionnalisme"}/>
                        <CheckItem title={"Satisfaction client garantie"}/>
                    </div>
                </div>
                <div className={"home-view-second-part-image"}/>
            </div>
        </div>
    )
}