import { NavHome } from "../../ui/components/NavHome"
import back from '../../assets/back.png'

export const HomePage = () => {
  return (
    <>
    <div className="absolute z-0 w-full h-screen">
      <img src={back} alt=""  className="absolute w-full h-full"/>
    </div>

   <section className="max-w-7xl mx-auto h-screen relative">
   <NavHome />
   
   </section>
   </>
  )
}
