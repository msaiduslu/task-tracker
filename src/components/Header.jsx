const Header = ({ show, setShow }) => {
  return (
    <div className="header-container">
      <h1>Task Tracker</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Close Add Task Bar" : "Show Add Task Bar"}
      </button>
    </div>
  );
};

export default Header;
