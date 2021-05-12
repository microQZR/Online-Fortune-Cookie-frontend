import { useState } from "react";

import Modal from "../../utilities/Modal";
import outOfCookiesWarning from "../../graphic-assets/original/out-of-cookies-warning.svg";
import closeButton from "../../graphic-assets/original/close-modal-button.svg";
import "./CookieMessageModal.css";

function CookieMessageModal(props) {
  const [isOutOfCookies, setIsOutOfCookies] = useState(true);

  return isOutOfCookies ? (
    <Modal classes="cookie-msg-warning-modal">
      <img
        src={closeButton}
        alt="close modal button"
        className="close-btn"
        onClick={props.closeHandler}
      />
      <img src={outOfCookiesWarning} alt="warning sign" />
      <div className="modal-title">
        Looks like you've run out of cookies..
        <br />
        You should get more!
      </div>
    </Modal>
  ) : (
    <Modal classes="cookie-msg-modal">
      <img
        src={closeButton}
        alt="close modal button"
        className="close-btn"
        onClick={props.closeHandler}
      />
    </Modal>
  );
}

export default CookieMessageModal;
