import "./Banner.styles.scss";
import {AppViews} from "../../const/AppViews";
import {useNavigate} from "react-router-dom";
import React, {useCallback, useLayoutEffect, useMemo, useState} from "react";
import {AppView} from "../../types/AppView/AppView";
import {NavigationFilled} from "@fluentui/react-icons";

export const Banner = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        setIsMobile(window.innerWidth <= 1000);
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth <= 1000);
        })
    }, []);

    const handleToggleOpenMenu = useCallback(() => {
        setOpenMenu(prev => !prev);
    }, []);

    const handleNavigateView = useCallback((view: AppView) => () => {
        navigate(AppViews[view].path);
    }, [navigate]);

    const className = [
        "banner",
        openMenu && "banner-open",
    ].filter(Boolean).join(" ");

    const menuItems = useMemo(() => {
        return Object.values(AppViews).slice(0, 4).map(view => (
            <button
                key={view.id}
                onClick={handleNavigateView(view.id)}
                className={window.location.pathname === view.path ? "banner-active-item" : ""}>
                {view.title?.toUpperCase()}
            </button>
        ))
    }, [handleNavigateView]);

    return (
        <div className={className}>
            <div className={"banner-top"}>
                <div className={"banner-logo"}>
                    <h3>LOIC<span className={"primary-color"}>PRO</span> ELEC</h3>
                </div>
                {isMobile ?
                    <button>
                        <NavigationFilled fontSize={20} onClick={handleToggleOpenMenu}/>
                    </button>
                    :
                    menuItems
                }
            </div>
            <div className={"banner-menu " + (openMenu ? "banner-menu-open" : "")}>
                {openMenu && menuItems}
            </div>
        </div>
    );
}