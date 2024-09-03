import "./Banner.styles.scss";
import {AppViews} from "../../const/AppViews";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {AppView} from "../../types/AppView/AppView";

export const Banner = () => {
    const navigate = useNavigate();

    const handleNavigateView = useCallback((view: AppView) => () => {
        navigate(AppViews[view].path);
    }, []);

    return (
        <div className={"banner"}>
            <div className={"banner-logo"}>
                <h3>LOIC<span className={"primary-color"}>PRO</span> ELEC</h3>
            </div>
            {Object.values(AppViews).slice(0, 4).map(view => (
                <h3
                    key={view.id}
                    className={window.location.pathname === view.path ? "banner-active-item" : ""}
                    onClick={handleNavigateView(view.id)}>
                    {view.title?.toUpperCase()}
                </h3>
            ))}
        </div>
    );
}