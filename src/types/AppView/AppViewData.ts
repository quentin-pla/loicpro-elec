import {AppView} from "./AppView";
import {ReactElement} from "react";

export interface AppViewData {
    id: AppView,
    path: string,
    element: () => ReactElement,
    title: string,
}