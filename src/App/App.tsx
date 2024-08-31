import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import "./App.styles.scss";
import {AppView} from "../types/AppView/AppView";
import {AppViewData} from "../types/AppView/AppViewData";
import {AppViews} from "const/AppViews";

export const App = (): JSX.Element => {
    return (
        <Routes>
            {renderRoutes(AppViews)}
            <Route path="*" element={<Navigate to={AppViews[AppView.Home].path} replace/>}/>
        </Routes>
    )
}

///////////////////////////////////////////////////// PURE METHODS /////////////////////////////////////////////////////

const renderRoutes = (appViews: Record<AppView, AppViewData>) => {
    return Object.values(appViews).map(view => (
        <Route key={view.path} path={view.path} element={<view.element/>}/>
    ))
}