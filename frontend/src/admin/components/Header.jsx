
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button className="btn btn-primary" id="menu-toggle">
        Toggle Menu
      </button>
      <div className="ml-auto">
        <button className="btn btn-danger">Logout</button>
      </div>
    </nav>
  );
};

export default Header;
