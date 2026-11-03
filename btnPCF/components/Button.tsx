import "../css/Button.css";

function Button(props: { label: string; onClick: () => void }) {
    return <button onClick={props.onClick}>{props.label}</button>;
}


export default Button;
