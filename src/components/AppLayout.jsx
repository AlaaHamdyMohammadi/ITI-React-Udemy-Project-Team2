import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { useSelector } from "react-redux"

function AppLayout() {
   const nav= useSelector((state)=>state.nav.navbar)
   console.log(nav);
    return (
        <div>
          {(nav)?<Header/>:""}  
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default AppLayout
