import "./Card.css";

function Card(props) {
  return (
    <div className={`card ${props.classes ? props.classes : ""}`}>
      {props.children}
    </div>
  );
}

export default Card;
