import { Link } from "react-router-dom";

function Header() {
    function handleLogout(){
        window.localStorage.removeItem('email');
        window.location.pathname= '/';
    }
  return (
    <div className="containerr shadow">
      <nav className="d-flex  padding-2">
        <div className="d-flex flex-1">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="d-flex">
          {window.localStorage.getItem("email") ? (
            <>
              <div className="register-nav" onClick={handleLogout}>Log out</div>
              <Link to={"/dashboard"} className="register-nav">Dashboard</Link>
            </>
          ) : (
            <>
              <Link
                to={"/register"}
                className="register-nav"
              >
                Register
              </Link>
              <Link
                to={"/login"}
                className="register-nav"
              >
                Login
              </Link>
              <Link
                to={"/dashboard"}
                className="register-nav"
              >
                Dashboard
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Header;
