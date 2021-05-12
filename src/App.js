import { useState } from "react";

import Header from "./components/Header";
import SideControls from "./components/SideControls";
import "./App.css";
import WelcomeModal from "./components/modals-and-windows/WelcomeModal";
import TriviaModal from "./components/modals-and-windows/TriviaModal";
import CookieMessageModal from "./components/modals-and-windows/CookieMessageModal";

function App() {
  const [mainContentState, setMainContentState] = useState("trivia");

  const getMoreCookiesHandler = () => {
    setMainContentState("trivia");
  };

  const crackACookieHandler = () => {
    setMainContentState("message");
  };

  const welcomeOkHandler = () => {
    setMainContentState(null);
  };

  const triviaCloseHandler = () => {
    setMainContentState(null);
  };

  const trviaSkipHandler = () => {};

  const triviaSubmitHandler = () => {};

  const messageCloseHandler = () => {
    setMainContentState(null);
  };

  const mainContent =
    mainContentState === "welcome" ? (
      <WelcomeModal okHandler={welcomeOkHandler} />
    ) : mainContentState === "trivia" ? (
      <TriviaModal
        closeHandler={triviaCloseHandler}
        skipHandler={trviaSkipHandler}
        submitHandler={triviaSubmitHandler}
      />
    ) : mainContentState === "message" ? (
      <CookieMessageModal closeHandler={messageCloseHandler} />
    ) : null;

  return (
    <>
      <Header />
      <section className="body flex">
        <div className="main-sec flex-column">{mainContent}</div>
        <SideControls
          crackACookieHandler={crackACookieHandler}
          getMoreCookiesHandler={getMoreCookiesHandler}
        />
      </section>
    </>
  );
}

export default App;
