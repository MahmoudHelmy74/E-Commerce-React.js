import { Outlet } from "react-router";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/Topbar";
import './dashboard.css'
function Dashboard() {
    return (
        <div >
            <TopBar />
            <div className="content-flex">
                <SideBar />
                <Outlet />
            </div>
            
        </div>
    )
}
export default Dashboard;
