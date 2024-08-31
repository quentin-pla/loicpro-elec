import * as React from "react";
import {ReactElement} from "react";
//@ts-ignore
import {ReactComponent as FacebookSvg} from "./facebook.svg";
//@ts-ignore
import {ReactComponent as InstagramSvg} from "./instagram.svg";

export type IIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
export type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };
export type IconFunc = (props: IconProps) => ReactElement;

const renderSvgIcon = (Icon: IIcon): IconFunc => (props: IconProps) => {
    const propsClone: IconProps = {...props};
    propsClone.width = propsClone.width ?? 20;
    propsClone.height = propsClone.height ?? 20;
    return <Icon className={"custom-icon"} {...propsClone}/>;
}

export const FacebookIcon: IconFunc = renderSvgIcon(FacebookSvg);
export const InstagramIcon: IconFunc = renderSvgIcon(InstagramSvg);