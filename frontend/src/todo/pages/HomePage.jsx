import { NavHome } from "../../ui/components/NavHome"
//import back from '../../assets/back.png'

export const HomePage = () => {
  return (
    <main className="fondo">
   {/*  <div className="absolute z-0 w-full h-screen">
      <img src={back} alt=""  className="absolute w-full h-full"/>
    </div> */}

   <section className="max-w-7xl mx-auto h-screen">
   <NavHome />

   <h1 className="text-center -mt-10 text-3xl font-serif md:mt-8"> Tus notas al instante</h1>
    
  

   </section>
   </main>
  )
}
