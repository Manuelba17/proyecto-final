import { Link } from "react-router-dom"
import image from "../../assets/notas-ancladas.png"
import '../css/navbar.css'

export const NavHome = () => {



  return (
    <>
    <nav className="flex pt-7 justify-between md:flex-col md:gap-4 " >

      <div >      
       <img src={image} className="h-24" alt="" />
      </div>

      <div className="flex">
        
        <Link to={"/auth/login"} className="border px-6 py-2  rounded-md mr-2 boxi hover:bg-gradient-to-r from-green-500/30 to-blue-500/20">Login</Link>
        <div className=" my-auto hover:border-b-violet-800 hover:border-b-2 p-2 ">
        <Link to={"/auth/register"} className="p-2 rounded-md " >Sign Up</Link>
        </div>
      </div>
        
    </nav>
    </>
  )
}
