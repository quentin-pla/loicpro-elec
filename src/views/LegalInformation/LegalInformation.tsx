import React from "react";
import {Banner} from "../../components/Banner/Banner";
import "./LegalInformation.styles.scss";
import {Footer} from "../../components/Footer/Footer";
import {useScrollTop} from "../../hooks/useScrollTop";

export const LegalInformation = () => {
    useScrollTop();

    const phoneNumber = ["06", "51", "54", "40", "71"].join(" ");
    return (
        <div className={"legal-information-view"}>
            <Banner/>
            <div className={"legal-information-view-content"}>
                <h2>Mentions légales</h2>
                <p>
                    Les présentes conditions Générales ont pour objet de prévoir l’ensemble des conditions d’accès et
                    d’utilisation du Site www.loicproelec.com.
                </p>
                <p>
                    L’accès et l’utilisation du site web impliquent l’acceptation tacite et sans réserve des présentes
                    conditions par l’utilisateur, sous leur dernière version en ligne.
                </p>
                <h4>1 – Mentions obligatoires</h4>
                <p>
                    La Société LOICPRO ELEC est domiciliée : 1 rue mistral, Gardanne, 13120, France.
                </p>
                <p>
                    Raison sociale : LOICPRO ELEC
                </p>
                <p>
                    Coordonnées de contact : {phoneNumber}
                </p>
                <p>
                    Hébergeur : Github, Adresse : 37 QUAI DU PRESIDENT ROOSEVELT 92130 ISSY-LES-MOULINEAUX
                </p>
                <h4>2 – Accès et disponibilité du Site</h4>
                <p>
                    L’accès au site www.loicproelec.com est ouvert à toute personne souhaitant s’informer sur les
                    activités
                    de LOICPRO ELEC.
                </p>
                <p>
                    L’accès au site web est assuré de façon continue et permanente, sauf cas de force majeure ou
                    d’évènements hors du contrôle de LOICPRO ELEC, et sous réserve des éventuelles pannes et
                    interventions
                    de maintenance nécessaires au bon fonctionnement du Site.
                </p>
                <p>
                    En raison de la nature même de l’internet, LOICPRO ELEC ne peut garantir un fonctionnement du site
                    24
                    heures sur 24 et 7 jours sur 7.
                </p>
                <h4>3 – Responsabilité</h4>
                <p>
                    LOICPRO ELEC s’efforce d’offrir aux utilisateurs l’information la plus fiable et qualitative qui
                    soit.
                </p>
                <p>
                    LOICPRO ELEC ne garantit pas cependant l’exactitude et l’exhaustivité de l’information diffusée sur
                    le
                    site web. LOICPRO ELEC ne saurait donc être tenue pour responsable des dommages directs ou
                    indirects,
                    subis par les utilisateurs ou par des tiers qui trouveraient leur source dans l’information diffusée
                    sur
                    le site web, et de manière plus générale, dans la consultation et l’utilisation du site web.
                    LOICPRO ELEC n’exerce aucune surveillance des sites reliés au site web par le biais de liens
                    hypertexte
                    et décline toute responsabilité liée à ces sites et aux contenus qui s’y trouvent.
                </p>
                <h4>4- Confidentialité et données personnelles</h4>
                <p>
                    Cette politique de confidentialité s’applique à ce site Web ; www.loicproelec.com et régit la
                    confidentialité de ses utilisateurs qui choisissent de l’utiliser. Il explique comment nous nous
                    conformons au RGPD (Règlement général sur la protection des données), au DPA (Loi sur la protection
                    des
                    données) [avant l’application du RGPD] et au PECR (Règlement sur la confidentialité et les
                    communications électroniques).
                </p>
                <p>
                    Cette politique expliquera les domaines de ce site Web qui peuvent affecter votre vie privée et vos
                    informations personnelles, comment nous traitons, collectons, gérons et stockons ces informations et
                    comment vos droits en vertu du GDPR, DPA et PECR sont respectés. En outre, il expliquera
                    l’utilisation
                    de cookies, de logiciels et de la publicité. Des explications supplémentaires peuvent être fournies
                    pour
                    des pages ou des fonctionnalités spécifiques de ce site Web afin de vous aider à comprendre comment
                    nous, ce site Web et ses tiers (le cas échéant) interagissons avec vous et votre ordinateur /
                    appareil
                    afin de vous le servir. Nos coordonnées sont fournies si vous avez des questions.
                    Le DPA & RGPD mai 2018
                </p>
                <p>
                    Nous et ce site Web sommes conformes au DPA (Data Protection Act 1998) et déjà conformes au RGPD
                    (General Data Protection Regulation) qui entre en vigueur à partir de mai 2018.
                </p>
                <h4>5 – Cookies</h4>
                <p>
                    LOICPRO ELEC n'utilise pas de cookies pour collecter des informations personnelles.
                </p>
                <h4>6 – Propriété intellectuelle</h4>
                <p>
                    Tous les textes, photos, vidéos, données, affiches, logos, marques et autres éléments reproduits sur
                    le
                    site web sont réservés et protégés par le droit de la propriété intellectuelle, notamment les droits
                    d’auteurs, droits voisins, droits des marques et par la législation sur la protection des bases de
                    données. Le non-respect de ces dispositions est constitutif de contrefaçon et passible à ce titre de
                    poursuites judiciaires, et notamment de sanctions pénales.
                </p>
                <h4>7 – Divers</h4>
                <p>
                    LOICPRO ELEC se réserve le droit de modifier unilatéralement les termes des présentes conditions.
                </p>
                <p>
                    Les nouvelles clauses régiront pour l’avenir toutes les relations entre les parties, et seule la
                    nouvelle version fera foi entre celles-ci.
                </p>
                <p>
                    Les présentes Conditions sont régies par la loi française.
                </p>
            </div>
            <Footer hideTopPart/>
        </div>
    )
}