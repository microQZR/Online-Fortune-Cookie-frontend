import { useState } from "react";

import Header from "./components/Header";
import SideControls from "./components/SideControls";
import "./App.css";
import WelcomeModal from "./components/modals-and-windows/WelcomeModal";
import TriviaModal from "./components/modals-and-windows/TriviaModal";
import CookieMessageModal from "./components/modals-and-windows/CookieMessageModal";

function App() {
  const [mainContentState, setMainContentState] = useState("welcome");

  const [totalCookiesEarned, setTotalCookiesEarned] = useState(0);
  const [cookieStash, setCookieStash] = useState([1, 2, 3]);
  const [messageStash, setMessageStash] = useState([]); //OPTIONAL TO BE IMPLEMENTED LATER
  const [newMessage, setNewMessage] = useState(null);
  const [topRank, setTopRank] = useState();
  const [userInfo, setUserInfo] = useState({
    userName: "Anonymous",
    userDate: Date.now()
  });
  const [qInfo, setQInfo] = useState();

  const welcomeOkHandler = event => {
    event.preventDefault();
    setUserInfo({
      userName: document.getElementById("username-input").value || "Anonymous",
      userDate: Date.now()
    });
    setMainContentState(null);
  };

  const getMoreCookiesHandler = async setModalMode => {
    setMainContentState("loading");

    let responseData;
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/trivia");

      responseData = await response.json();

      if (!response.ok) throw new Error(responseData);

      setQInfo(responseData);
    } catch (err) {
      console.log(err);
      throw new Error(err); // Simply rethrowing for now, to be replaced by something visual later
    }

    setMainContentState("null"); //This is to force React to properly rerender
    setMainContentState("trivia");
  };

  const triviaSubmitHandler = async (setModalMode, setIsWrongInputState) => {
    setModalMode("waiting");

    let responseData;
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/trivia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          qid: qInfo.qid,
          answer: document.getElementById("trivia-answer-input").value,
          userName: userInfo.userName,
          userDate: userInfo.userDate,
          cookiesEarned: totalCookiesEarned
        })
      });

      responseData = await response.json();

      if (!response.ok) throw new Error(responseData);
    } catch (err) {
      console.log(err);
      throw new Error(err); // Simply rethrowing for now, to be replaced by something visual later
    }

    if (!responseData.isAnswerCorrect) {
      setIsWrongInputState(true);
      setModalMode("question");
      return;
    }

    setTotalCookiesEarned(totalCookiesEarned + 1);

    if (responseData.cookieContentType === "message") setCookieStash(cookieStash.concat(responseData.value));

    if (responseData.topRank) setTopRank(responseData.topRank);

    setModalMode("response");
  };

  const triviaCloseHandler = () => {
    setMainContentState(null);
  };

  const crackACookieHandler = () => {
    if (cookieStash.length > 0) {
      const selectedMessage = cookieStash[cookieStash.length - 1];
      setCookieStash(cookieStash.filter((element, index) => index !== cookieStash.length - 1));
      setMessageStash(messageStash.concat(selectedMessage));
      setNewMessage(selectedMessage);
    } else setNewMessage(null);

    setMainContentState("message");
  };

  const messageCloseHandler = () => {
    setMainContentState(null);
  };

  const mainContent =
    mainContentState === "welcome" ? (
      <WelcomeModal okHandler={welcomeOkHandler} />
    ) : mainContentState === "loading" ? (
      <TriviaModal
        closeHandler={triviaCloseHandler}
        initialState="waiting"
        skipHandler={getMoreCookiesHandler}
        submitHandler={triviaSubmitHandler}
        qInfo={qInfo}
      />
    ) : mainContentState === "trivia" ? (
      <TriviaModal
        closeHandler={triviaCloseHandler}
        initialState="question"
        skipHandler={getMoreCookiesHandler}
        submitHandler={triviaSubmitHandler}
        qInfo={qInfo}
      />
    ) : mainContentState === "message" ? (
      <CookieMessageModal closeHandler={messageCloseHandler} cookieMessage={newMessage} />
    ) : null;

  return (
    <>
      <Header cookieStashCount={cookieStash.length} totalCookiesEarned={totalCookiesEarned} topRank={topRank} />
      <section className="body flex">
        <div className="main-sec flex-column">{mainContent}</div>
        <SideControls crackACookieHandler={crackACookieHandler} getMoreCookiesHandler={getMoreCookiesHandler} />
      </section>
    </>
  );
}

export default App;
