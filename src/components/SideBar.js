import { NavLink } from "react-router-dom";

function SideBar() {
    return (
        <div className="side-bar">
            <NavLink activeclassname= 'active' to={'/dashboard/users'} className="item-link"><i className="fa-solid fa-users"></i>Users</NavLink>
            <NavLink activeclassname= 'active' to={'/dashboard/createUser'} className="item-link"><i className="fa-solid fa-user-plus"></i>New Users</NavLink>
            <NavLink activeclassname= 'active' to={'/dashboard/products'} className="item-link"><i className="fa-solid fa-brands fa-product-hunt"></i>Product</NavLink>
            <NavLink activeclassname= 'active' to={'/dashboard/CreateProduct'} className="item-link"><i className="fa-solid fa-plus"></i>New Product</NavLink>
        </div>
        
    )
}
export default SideBar;