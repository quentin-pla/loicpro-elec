import {useEffect} from "react";

export const useScrollTop = () => {
    useEffect(() => {
        document.getElementById("root")?.scrollTo({top: 0, behavior: "auto"});
    }, []);
}