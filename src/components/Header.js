import Card from "../utilities/Card";
import wholeCookie from "../graphic-assets/vecteezy/whole-cookie.svg";
import "./Header.css";

function Header() {
  return (
    <section className="header flex">
      <Card classes="app-title">Online Fortune Cookie</Card>
      <div className="header-controls flex">
        <div className="star-badge-group flex drop-shadow-click">
          <div className="star-badge flex">#1</div>
          <div>
            Top Cookie
            <br />
            Earner
          </div>
        </div>
        <div className="cookie-count-group flex">
          <img src={wholeCookie} alt="test" />
          <div>
            Cookie Count
            <br />
            <span>× 0</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
