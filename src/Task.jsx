import "./styles.css";

export default function Task({ goal, key }) {
  const index = key;

  return (
    <div className="task">
      <form>
        <h4 className="inheritM goal">{goal}</h4>
        <input className="inheritM cBox" type="checkbox"></input>
      </form>
    </div>
  );
}
