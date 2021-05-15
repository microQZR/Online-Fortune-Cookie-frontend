import Card from "../utilities/Card";
import wholeCookie from "../graphic-assets/vecteezy/whole-cookie.svg";
import zigZag from "../graphic-assets/original/zig-zag-arrow.svg";
import "./Header.css";

function Header(props) {
  return (
    <section className="header flex">
      <Card classes="app-title">Online Fortune Cookie</Card>
      <div className="header-controls flex">
        {props.topRank && (
          <div className="star-badge-group flex drop-shadow-click">
            <div className="star-badge flex">#{props.topRank}</div>
            <div>
              Top Cookie
              <br />
              Earner
            </div>
          </div>
        )}
        <div className="total-earned-group flex">
          <img src={zigZag} alt="test" />
          <div>
            Total Cookies Earned
            <br />
            <span>× {props.totalCookiesEarned}</span>
          </div>
        </div>
        <div className="cookie-count-group flex">
          <img src={wholeCookie} alt="test" />
          <div>
            Cookie Count
            <br />
            <span>× {props.cookieStashCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
