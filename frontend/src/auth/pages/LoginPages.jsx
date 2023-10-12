import '../css/login.css'
import image from '../../assets/image.svg'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import useForm from '../../customsHooks/useForm'


export const LoginPage = () => {

    
    const {login, state, isLoading} = useContext(AuthContext)

    const {message} = state

  
        
    const { values, handleInputChange, reset} =  useForm({
        mail: '',
        password: ''
    })

    const {mail, password} = values

    
    const onLogin = (mail, password) => {
        login(mail, password, reset)
    }

    const onFormSumbit = (event) => {
        event.preventDefault()
        onLogin(mail, password,reset)
        
                
    }
    
    return (
        <>

        <section className="login">
            <figure className="login__picture">
                <img src={image} className="login__img"/>     
            </figure>


            <form className="login_form" onSubmit={onFormSumbit}>
            <h2 className="login__title after:bg-gradient-to-r from-green-500 to-blue-500">Iniciar Sesión</h2>

            <input 
            type="email" 
            placeholder="Mail:" 
            className="login__input" autoFocus
            name='mail'
            value={mail}
            onChange={handleInputChange} 
            required/>

            <input type="password" 
            placeholder="Password:" 
            className="login__input"
            name='password'
            onChange={handleInputChange}
            value={password} 
            required/>
             { !isLoading && <span>{message?.message}</span>} 
            
            <div className="w-1/6 text-center rounded-lg px-px py-px bg-gradient-to-r from-green-500 to-blue-500 shadow-white ">
                { isLoading ?  <button type="sumbit" className="login__cta hover:bg-gradient-to-r from-green-500/5 to-blue-500/5" disabled>
                <svg className="animate-spin mx-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">    
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  
</button>
                :
                <button type='sumbit' className="login__cta hover:bg-gradient-to-r from-green-500/5 to-blue-500/5 ">Sign In</button>}
                
            
    </div>
            
            
           
            </form>
           
            </section>
        </>
    )
}