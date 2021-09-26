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
            <div className="header-control-desc">
              Top Cookie
              <br />
              Earner
            </div>
          </div>
        )}
        <div className="total-earned-group flex">
          <img src={zigZag} alt="test" />
          <div>
            <span className="header-control-desc">Total Cookies Earned</span>
            <br />
            <span className="header-control-num">× {props.totalCookiesEarned}</span>
          </div>
        </div>
        <div className="cookie-count-group flex">
          <img src={wholeCookie} alt="test" />
          <div>
            <span className="header-control-desc">Cookie Count</span>
            <br />
            <span className="header-control-num">× {props.cookieStashCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
