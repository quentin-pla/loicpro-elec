import "./Button.styles.scss";

export const Button = (props: {
    title: string,
    onClick?: () => void,
    primary?: boolean,
    color?: string,
    disabled?: boolean,
}) => {

    const className = [
        "custom-button",
        props.primary && "custom-button-primary",
    ].filter(Boolean).join(" ");

    return (
        <button disabled={props.disabled} className={className} onClick={props.onClick}>
            <span style={{color: props.color}}>{props.title}</span>
        </button>
    )
}