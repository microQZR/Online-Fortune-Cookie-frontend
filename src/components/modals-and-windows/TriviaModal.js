import { useState } from "react";

import Button from "../../utilities/Button";
import Modal from "../../utilities/Modal";
import closeButton from "../../graphic-assets/original/close-modal-button.svg";
import checkMark from "../../graphic-assets/original/check-mark.svg";
import wholeCookie from "../../graphic-assets/vecteezy/whole-cookie.svg";
import loadingCircle from "../../graphic-assets/original/Dual Ring-1s-200px.svg";
import "./TriviaModal.css";

function TriviaModal(props) {
  const [mode, setMode] = useState(props.initialState || "question");
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  return mode === "question" ? (
    <Modal classes="trivia-modal">
      <img src={closeButton} alt="close modal button" className="close-btn" onClick={props.closeHandler} />
      <div className="modal-title">Trivia Time!</div>
      <div className="modal-subtitle">Answer the following question correctly to obtain a cookie.</div>
      <div className="question">Question: {props.qInfo.question}</div>
      <form>
        <label htmlFor="trivia-answer-input">Answer:</label>
        <input
          type="text"
          name="trivia-answer"
          id="trivia-answer-input"
          className={`input ${isWrongAnswer ? "wrong" : ""}`}
          onClick={() => {
            setIsWrongAnswer(false);
          }}
        ></input>
        <div className="trivia-btn-set flex">
          <Button classes="blue" onClick={props.skipHandler}>
            Skip
          </Button>
          <Button
            type="submit"
            classes="green"
            onClick={event => {
              event.preventDefault();
              props.submitHandler(setMode, setIsWrongAnswer);
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  ) : mode === "response" ? (
    <Modal classes="response-modal">
      <img src={closeButton} alt="close modal button" className="close-btn" onClick={props.closeHandler} />
      <img src={checkMark} alt="green check mark" className="check-mark" />
      <div className="modal-title">Correct answer! Congratulations.</div>
      <div className="plus-cookie-group flex">
        <img src={wholeCookie} alt="a whole cookie" />
        <div>+ 1</div>
      </div>
    </Modal>
  ) : (
    <Modal classes="waiting-modal">
      <img src={closeButton} alt="close modal button" className="close-btn" onClick={props.closeHandler} />
      <img src={loadingCircle} alt="loading content" className="loading-circle"></img>
    </Modal>
  );
}

export default TriviaModal;
