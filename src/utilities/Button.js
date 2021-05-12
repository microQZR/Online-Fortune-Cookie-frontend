import "./Button.css";

function Button(props) {
  return (
    <button
      className={`btn ${props.classes ? props.classes : ""}`}
      type={props.type ?? "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
