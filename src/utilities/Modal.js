import "./Modal.css";

function Modal(props) {
  return (
    <div className={`modal flex-column ${props.classes ? props.classes : ""}`}>
      {props.children}
    </div>
  );
}

export default Modal;
