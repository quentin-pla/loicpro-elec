import "./SecondPart.styles.scss";
import {CalendarRegular, FluentIcon, RibbonStarRegular, TimerRegular} from "@fluentui/react-icons";

export const SecondPart = () => {
    return (
        <div className={"about-view-second-part"}>
            <div className={"about-view-second-part-content"}>
                <div className={"about-view-second-part-left-content"}>
                    <h2>
                        Notre entreprise familiale
                    </h2>
                    <p>
                        LOICPRO ELEC intervient auprès des particuliers et professionnels du bâtiment, que ce soit en
                        neuf ou en rénovation, principalement dans les environs d’Aix-en-Provence.
                        <br/>
                        <br/>
                        Entreprise familiale, nous sommes passionnés par notre métier et nous apportons une attention
                        particulière à la qualité des prestations et à la satisfaction des clients.
                    </p>
                    <div className={"about-view-second-part-left-content-grid"}>
                        {renderGridItem(TimerRegular, "Réactivité immédiate")}
                        {renderGridItem(CalendarRegular, "Respect des délais")}
                        {renderGridItem(RibbonStarRegular, "Qualité des prestations")}
                    </div>
                </div>
                <div className={"about-view-second-part-image"}/>
            </div>
        </div>
    )
}

///////////////////////////////////////////////////// PURE METHODS /////////////////////////////////////////////////////

const renderGridItem = (Icon: FluentIcon, title: string) => {
    return (
        <div className={"about-view-second-part-left-content-grid-item"}>
            <Icon fontSize={50} className={"primary-color"}/>
            <h5>{title}</h5>
        </div>
    )
}