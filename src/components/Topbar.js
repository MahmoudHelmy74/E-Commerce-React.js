import { Link } from "react-router-dom";

function TopBar() {
    return (
        <div className="d-flex containerr top-bar shadow">
            <h1>Store</h1>
            <Link to={'/'} className="register-nav" > Go to Web Site </Link>
        </div>
    )
}
export default TopBar;
