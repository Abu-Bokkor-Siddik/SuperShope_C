import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const MainLayouts = () => {
  return (
    <div>
      <div>
     <Navbar className=""></Navbar>
      <div className="min-h-[850px]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default MainLayouts
