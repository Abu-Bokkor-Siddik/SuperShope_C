import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const Root = () => {
  return (
    <div>
     <Navbar className=""></Navbar>
      <div className="min-h-[850px]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root
