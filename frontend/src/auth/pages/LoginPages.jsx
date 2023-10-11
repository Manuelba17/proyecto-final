import '../css/login.css'
import image from '../../assets/image.svg'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import useForm from '../../customsHooks/useForm'


export const LoginPage = () => {

    
    const {login, state} = useContext(AuthContext)

    const {message} = state

  
        
    const { values, handleInputChange, reset} =  useForm({
        mail: '',
        password: ''
    })

    const {mail, password} = values

    
    const onLogin = (mail, password) => {
        login(mail, password)
    }

    const onFormSumbit = (event) => {
        event.preventDefault()
        onLogin(mail, password)
        reset()
                
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
            type="text" 
            placeholder="Mail:" 
            className="login__input" autoFocus
            name='mail'
            value={mail}
            onChange={handleInputChange} />
            <input type="password" 
            placeholder="Password:" 
            className="login__input"
            name='password'
            onChange={handleInputChange}
            value={password} />
            { message && <span>{message.message}</span>}
            
            <div className="w-1/6 text-center rounded-lg px-px py-px bg-gradient-to-r from-green-500 to-blue-500 shadow-white ">
   <button type='sumbit' className="login__cta hover:bg-gradient-to-r from-green-500/5 to-blue-500/5 ">Sign In</button>
    </div>
            
            
           
            </form>
           
            </section>
        </>
    )
}