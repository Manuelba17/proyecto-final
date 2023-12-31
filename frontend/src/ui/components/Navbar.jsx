import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';
import '../css/navbar.css'

export const Navbar = () => {
  
  const {onLogoutApp} = useContext(AuthContext)

  
  const navigate = useNavigate();

  const onLogout = () => {
    onLogoutApp()
    navigate('/auth/login', {replace: true});    
  }

  return (
    <>
     <nav className='flex px-28 py-6 md:px-0  '>

        <div className='flex-grow text-center'>
          <h1 className='text-xl sm:ml-4'>Bienvenido al modulo de tareas</h1>
        </div>

        <div>
          <button className='border border-red-600 px-4 py-1 rounded-md hover:bg-red-600/25 md:hidden' onClick={onLogout}>
          Sign out
          </button>
        </div>



     </nav>
    </>
  )
}

