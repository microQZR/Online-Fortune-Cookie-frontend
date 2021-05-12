import { useState } from "react";

import Button from "../../utilities/Button";
import Modal from "../../utilities/Modal";
import closeButton from "../../graphic-assets/original/close-modal-button.svg";
import checkMark from "../../graphic-assets/original/check-mark.svg";
import wholeCookie from "../../graphic-assets/vecteezy/whole-cookie.svg";
import "./TriviaModal.css";

function TriviaModal(props) {
  const [mode, setMode] = useState("question");
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  return mode === "question" ? (
    <Modal classes="trivia-modal">
      <img
        src={closeButton}
        alt="close modal button"
        className="close-btn"
        onClick={props.closeHandler}
      />
      <div className="modal-title">Trivia Time!</div>
      <div className="modal-subtitle">
        Answer the following question correctly to obtain a cookie.
      </div>
      <div className="question">
        Question: Which city is the capital of France?
      </div>
      <form>
        <label htmlFor="trivia-answer-input">Answer:</label>
        <input
          type="text"
          name="trivia-answer"
          id="trivia-answer-input"
        ></input>
        <div className="trivia-btn-set flex">
          <Button classes="blue" onClick={props.skipHandler}>
            Skip
          </Button>
          <Button type="submit" classes="green" onClick={props.submitHandler}>
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  ) : mode === "response" ? (
    <Modal classes="response-modal">
      <img
        src={closeButton}
        alt="close modal button"
        className="close-btn"
        onClick={props.closeHandler}
      />
      <img src={checkMark} alt="green check mark" className="check-mark" />
      <div className="modal-title">Correct answer! Congratulations.</div>
      <div className="plus-cookie-group flex">
        <img src={wholeCookie} alt="a whole cookie" />
        <div>+ 1</div>
      </div>
    </Modal>
  ) : (
    <Modal>
      <img
        src={closeButton}
        alt="close modal button"
        className="close-btn"
        onClick={props.closeHandler}
      />
    </Modal>
  );
}

export default TriviaModal;
