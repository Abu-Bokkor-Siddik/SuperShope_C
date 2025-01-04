import { Outlet } from "react-router"


const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
