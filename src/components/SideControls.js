import crackedCookieWithMsg from "../graphic-assets/vecteezy/cracked-cookie-w-message.svg";
import twoCookies from "../graphic-assets/vecteezy/two-cookies.svg";
import podium from "../graphic-assets/original/podium.svg";
import pointer from "../graphic-assets/original/pointer-arrow.svg";
import "./SideControls.css";

function SideControls(props) {
  return (
    <div className="side-controls">
      <div className="crack-a-cookie-group flex-column drop-shadow-click" onClick={props.crackACookieHandler}>
        <img src={crackedCookieWithMsg} alt="a cracked cookie with message"></img>
        <div>
          Crack a<br />
          Cookie
        </div>
      </div>
      <div className="get-more-cookies-group flex-column drop-shadow-click" onClick={props.getMoreCookiesHandler}>
        <img src={twoCookies} alt="two cookies"></img>
        <div className="pointer-anchor">
          Get More
          <br />
          Cookies
          {props.pointerIsActive ? <img src={pointer} alt="pointer arrow" className="pointer" /> : null}
        </div>
      </div>
      <div className="leaderboard-group flex-column drop-shadow-click" onClick={props.showLeaderboardHandler}>
        <img src={podium} alt="a podium" />
        <div>
          Top Earners
          <br />
          Leaderboard
        </div>
      </div>
    </div>
  );
}

export default SideControls;
