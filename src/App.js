import { useState } from "react";

import Header from "./components/Header";
import SideControls from "./components/SideControls";
import "./App.css";
import WelcomeModal from "./components/modals-and-windows/WelcomeModal";
import TriviaModal from "./components/modals-and-windows/TriviaModal";
import CookieMessageModal from "./components/modals-and-windows/CookieMessageModal";
import LeaderboardModal from "./components/modals-and-windows/LeaderboardModal";

function App() {
  const [mainContentState, setMainContentState] = useState("welcome");

  const [totalCookiesEarned, setTotalCookiesEarned] = useState(0);
  const [cookieStash, setCookieStash] = useState([
    1,
    2,
    3,
    "A very very very very very very very very very very very very very very very very very very very very very long message."
  ]);
  const [messageStash, setMessageStash] = useState([]); //OPTIONAL TO BE IMPLEMENTED LATER
  const [newMessage, setNewMessage] = useState(null);
  const [topRank, setTopRank] = useState();
  const [userInfo, setUserInfo] = useState({
    userName: "Anonymous",
    userDate: Date.now()
  });
  const [qInfo, setQInfo] = useState();
  const [leaderboardEntries, setLeaderboardEntries] = useState();
  const [activePointer, setActivePointer] = useState(false);

  const welcomeOkHandler = event => {
    event.preventDefault();
    setUserInfo({
      userName: document.getElementById("username-input").value || "Anonymous",
      userDate: Date.now()
    });
    setActivePointer(true);
    setMainContentState(null);
  };

  const getMoreCookiesHandler = async setModalMode => {
    setMainContentState("loading");
    setActivePointer(false);

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

  const crackACookieHandler = () => {
    if (cookieStash.length > 0) {
      const selectedMessage = cookieStash[cookieStash.length - 1];
      setCookieStash(cookieStash.filter((element, index) => index !== cookieStash.length - 1));
      setMessageStash(messageStash.concat(selectedMessage));
      setNewMessage(selectedMessage);
    } else {
      setNewMessage(null);
      setActivePointer(true);
    }

    setMainContentState("message");
  };

  const showLeaderboardHandler = async () => {
    setMainContentState("waiting");

    let responseData;
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/top-earners");

      responseData = await response.json();

      if (!response.ok) throw new Error(responseData);
    } catch (err) {
      console.log(err);
      throw new Error(err); // Simply rethrowing for now, to be replaced by something visual later
    }

    responseData = responseData.filter(element => element.cookieCount !== 0);

    responseData.sort((a, b) => {
      if (a.cookieCount > b.cookieCount) return -1;
      if (a.cookieCount < b.cookieCount) return 1;
      if (a.userDate < b.userDate) return -1;
      if (a.userDate > b.userDate) return 1;
      return -1;
    });

    const result = responseData.map((element, index) => {
      let fullDateStr = new Date(element.userDate).toISOString();
      let dateStr = fullDateStr.split("T")[0];
      let timeStr = fullDateStr.split("T")[1].split(":");
      timeStr = timeStr[0] + ":" + timeStr[1];
      return {
        rank: index + 1,
        user: `${element.userName} (${dateStr}, ${timeStr} UTC)`,
        cookieCount: element.cookieCount
      };
    });

    setLeaderboardEntries(result);

    setMainContentState("leaderboard");
  };

  const modalCloseHandler = () => {
    setMainContentState(null);
  };

  const mainContent =
    mainContentState === "welcome" ? (
      <WelcomeModal okHandler={welcomeOkHandler} />
    ) : mainContentState === "loading" ? (
      <TriviaModal
        closeHandler={modalCloseHandler}
        initialState="waiting"
        skipHandler={getMoreCookiesHandler}
        submitHandler={triviaSubmitHandler}
        qInfo={qInfo}
      />
    ) : mainContentState === "trivia" ? (
      <TriviaModal
        closeHandler={modalCloseHandler}
        initialState="question"
        skipHandler={getMoreCookiesHandler}
        submitHandler={triviaSubmitHandler}
        qInfo={qInfo}
      />
    ) : mainContentState === "message" ? (
      <CookieMessageModal closeHandler={modalCloseHandler} cookieMessage={newMessage} />
    ) : mainContentState === "leaderboard" ? (
      <LeaderboardModal closeHandler={modalCloseHandler} entries={leaderboardEntries} currentUserRank={topRank} />
    ) : null;

  return (
    <>
      <Header cookieStashCount={cookieStash.length} totalCookiesEarned={totalCookiesEarned} topRank={topRank} />
      <section className="body flex">
        <div className="main-sec flex-column">{mainContent}</div>
        <SideControls
          crackACookieHandler={crackACookieHandler}
          getMoreCookiesHandler={getMoreCookiesHandler}
          showLeaderboardHandler={showLeaderboardHandler}
          pointerIsActive={activePointer}
        />
      </section>
    </>
  );
}

export default App;
