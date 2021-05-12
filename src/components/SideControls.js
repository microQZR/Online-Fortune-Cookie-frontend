import crackedCookieWithMsg from "../graphic-assets/vecteezy/cracked-cookie-w-message.svg";
import twoCookies from "../graphic-assets/vecteezy/two-cookies.svg";
import "./SideControls.css";

function SideControls(props) {
  return (
    <div className="side-controls">
      <div
        className="crack-a-cookie-group flex-column drop-shadow-click"
        onClick={props.crackACookieHandler}
      >
        <img
          src={crackedCookieWithMsg}
          alt="a cracked cookie with message"
        ></img>
        <div>
          Crack a<br />
          Cookie
        </div>
      </div>
      <div
        className="get-more-cookies-group flex-column drop-shadow-click"
        onClick={props.getMoreCookiesHandler}
      >
        <img src={twoCookies} alt="two cookies"></img>
        <div>
          Get More
          <br />
          Cookies
        </div>
      </div>
    </div>
  );
}

export default SideControls;
