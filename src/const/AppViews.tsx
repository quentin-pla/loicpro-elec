import {AppViewData} from "types/AppView/AppViewData";
import {AppView} from "types/AppView/AppView";
import {Home} from "../views/Home/Home";
import {Services} from "../views/Services/Services";
import {About} from "../views/About/About";
import {Contact} from "../views/Contact/Contact";

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
    path: "/about",
    element: About,
    title: "À propos",
}

const ContactView: AppViewData = {
    id: AppView.Contact,
    path: "/contact",
    element: Contact,
    title: "Contact",
}

export const AppViews: Record<AppView, AppViewData> = {
    [AppView.Home]: HomeView,
    [AppView.Services]: ServicesView,
    [AppView.About]: AboutView,
    [AppView.Contact]: ContactView,
}