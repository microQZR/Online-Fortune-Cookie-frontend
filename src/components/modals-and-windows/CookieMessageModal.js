import Modal from "../../utilities/Modal";
import outOfCookiesWarning from "../../graphic-assets/original/out-of-cookies-warning.svg";
import closeButton from "../../graphic-assets/original/close-modal-button.svg";
import cookieLeftHalf from "../../graphic-assets/vecteezy/half-cookie-left.svg";
import cookieRightHalf from "../../graphic-assets/vecteezy/half-cookie-right.svg";
import "./CookieMessageModal.css";

function CookieMessageModal(props) {
  return props.cookieMessage ? (
    <Modal classes="cookie-msg-modal">
      <img src={closeButton} alt="close modal button" className="close-btn" onClick={props.closeHandler} />
      <div className="flex">
        <img src={cookieLeftHalf} alt="left half of cookie" className="cookie-left-half half" />
        <div className="cookie-message">{props.cookieMessage}</div>
        <img src={cookieRightHalf} alt="right half of cookie" className="cookie-right-half half" />
      </div>
    </Modal>
  ) : (
    <Modal classes="cookie-msg-warning-modal">
      <img src={closeButton} alt="close modal button" className="close-btn" onClick={props.closeHandler} />
      <img src={outOfCookiesWarning} alt="warning sign" />
      <div className="modal-title">
        Looks like you've run out of cookies..
        <br />
        You should get more!
      </div>
    </Modal>
  );
}

export default CookieMessageModal;
