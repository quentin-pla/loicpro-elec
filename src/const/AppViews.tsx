import {AppViewData} from "types/AppView/AppViewData";
import {AppView} from "types/AppView/AppView";
import {Home} from "../views/Home/Home";
import {Services} from "../views/Services/Services";
import {About} from "../views/About/About";
import {Contact} from "../views/Contact/Contact";
import {LegalInformation} from "../views/LegalInformation/LegalInformation";

const HomeView: AppViewData = {
    id: AppView.Home,
    path: "/",
    element: Home,
    title: "Accueil",
}

const ServicesView: AppViewData = {
    id: AppView.Services,
    path: "/services",
    element: Services,
    title: "Services",
}

const AboutView: AppViewData = {
    id: AppView.About,
    path: "/a-propos",
    element: About,
    title: "À propos",
}

const ContactView: AppViewData = {
    id: AppView.Contact,
    path: "/contact",
    element: Contact,
    title: "Contact",
}

const LegalInformationView: AppViewData = {
    id: AppView.LegalInformation,
    path: "/mentions-legales",
    element: LegalInformation,
    title: "Mentions légales",
}

export const AppViews: Record<AppView, AppViewData> = {
    [AppView.Home]: HomeView,
    [AppView.Services]: ServicesView,
    [AppView.About]: AboutView,
    [AppView.Contact]: ContactView,
    [AppView.LegalInformation]: LegalInformationView,
}