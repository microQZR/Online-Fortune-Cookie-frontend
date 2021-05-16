import Button from "../../utilities/Button";
import Modal from "../../utilities/Modal";
import "./LeaderboardModal.css";

function LeaderboardModal(props) {
  return (
    <Modal classes="leaderboard-modal">
      {props.currentUserRank ? (
        <style>
          {`.leaderboard-entries > *:nth-child(${props.currentUserRank}) {
                border: 2px solid;
                border-radius: 8px;
                color: #ff7222;
                font-weight: 600;
              }`}
        </style>
      ) : null}
      <div className="leaderboard-title">All-time Top Cookie Earners</div>
      <div className="leaderboard-group">
        <div className="leaderboard-heading flex">
          <div className="col-1">Rank</div>
          <div className="col-2">User</div>
          <div className="col-3">
            Cookies
            <br />
            Earned
          </div>
        </div>
        <div className="leaderboard-entries flex-column">
          {props.entries.map(entry => (
            <div className="l-entry flex" key={entry.rank}>
              <div className="col-1">{entry.rank}</div>
              <div className="col-2">{entry.user}</div>
              <div className="col-3">{entry.cookieCount}</div>
            </div>
          ))}
        </div>
      </div>
      <Button classes="blue" onClick={props.closeHandler}>
        Close
      </Button>
    </Modal>
  );
}

export default LeaderboardModal;
