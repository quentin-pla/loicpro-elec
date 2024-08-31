import "./CheckItem.styles.scss";
import {CheckmarkCircleFilled} from "@fluentui/react-icons";
//@ts-ignore
import variables from "../../variables.module.scss";

export const CheckItem = (props: {
    title: string,
}) => {
    return (
        <div className={"check-item"}>
            <CheckmarkCircleFilled className={"no-shrink"} fontSize={28} color={variables.primaryColor}/>
            <p>{props.title}</p>
        </div>
    )
}