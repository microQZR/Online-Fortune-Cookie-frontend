import Button from "../../utilities/Button";
import Modal from "../../utilities/Modal";
import "./WelcomeModal.css";

function WelcomeModal(props) {
  return (
    <Modal classes="welcome-modal">
      <div className="modal-title">Welcome to Online Fortune Cookie</div>
      <div className="modal-subtitle">A virtual fortune cookie dispenser</div>
      <form className="flex-column">
        <label htmlFor="username-input">Please enter your name (optional)</label>
        <input type="text" name="username" id="username-input" className="input"></input>
        <Button type="submit" classes="blue" onClick={props.okHandler}>
          OK
        </Button>
      </form>
    </Modal>
  );
}

export default WelcomeModal;
