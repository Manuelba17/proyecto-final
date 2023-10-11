import useForm from "../../customsHooks/useForm"
import image from '../../assets/image.svg'



export const RegisterPage = () => {

  const { values, handleInputChange, reset} =  useForm({
    nickName: '',
    mail: '',
    password: '',
    password2: ''
})

const {mail, password, password2, nickName} = values

const onFormSumbit = (event) => {
  event.preventDefault()

  reset()
          
}


  return (

<>
    <section className="login">


    <figure className="register_picture">
        <img src={image} className="login__img"/>     
    </figure>


    <form className="login_form" onSubmit={onFormSumbit}>
    <h2 className=" text-5xl p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Registrate</h2>
    
    <input 
    type="text" 
    placeholder="NickName" 
    className="login__input" autoFocus
    name='nickName'
    value={nickName}
    onChange={handleInputChange} />
    
    <input 
    type="text" 
    placeholder="Mail" 
    className="login__input"
    name='mail'
    value={mail}
    onChange={handleInputChange} />
    
    <input type="password" 
    placeholder="Password" 
    className="login__input"
    name='password'
    onChange={handleInputChange}
    value={password} />
  

   <input type="password" 
    placeholder="Confirma tu password:" 
    className="login__input "
    name='password2'
    onChange={handleInputChange}
    value={password2} />

    <div className="w-1/6 text-center rounded-lg px-px py-px bg-gradient-to-r from-pink-500 to-violet-500 box ">
   <button type='sumbit' className="login__cta hover:bg-gradient-to-r from-pink-500/5 to-violet-500/5 ">Sign Up</button>
    </div>
   
    </form>
   
    </section>
</>
  )
}
