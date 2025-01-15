import { Outlet } from "react-router"
import Sidebar from "../Components/dashboard/Sidebar"


const DashBoardLayout = () => {
  return (
    <div>
     <div><Sidebar></Sidebar></div>
     <div><Outlet></Outlet></div>
     
    </div>
  )
}

export default DashBoardLayout
