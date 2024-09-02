import "./FifthPart.styles.scss";
import {
    CalendarArrowCounterclockwiseRegular,
    FluentIcon,
    PhoneDesktopRegular,
    VehicleTruckProfileRegular
} from "@fluentui/react-icons";

export const FifthPart = () => {
    return (
        <div className={"about-view-fifth-part"}>
            <div className={"about-view-fifth-part-header"}>
                <h2>Obtenez nos services en 3 étapes</h2>
            </div>
            <div className={"about-view-fifth-part-content-grid"}>
                {renderGridItem(PhoneDesktopRegular, "Demandez un devis sur mesure", "Prise en charge par téléphone ou via le formulaire")}
                {renderGridItem(CalendarArrowCounterclockwiseRegular, "Étude et planification du projet", "Coordination des chantiers afin de proposer une intervention dans les plus brefs délais.")}
                {renderGridItem(VehicleTruckProfileRegular, "Livraison des travaux", "Contrôle qualité et SAV")}
            </div>
        </div>
    )
}

///////////////////////////////////////////////////// PURE METHODS /////////////////////////////////////////////////////

const renderGridItem = (Icon: FluentIcon, title: string, subtitle: string) => {
    return (
        <div className={"about-view-fifth-part-content-grid-item"}>
            <Icon fontSize={100} className={"primary-color"}/>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
        </div>
    )
}