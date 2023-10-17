import useForm from "../../customsHooks/useForm"
import image from '../../assets/image.svg'
import {useFormRegister} from '../../todo/helpers/useFormRegister'



export const RegisterPage = () => {

const {isValid, isValidFormRegister, setIsValid} = useFormRegister()
  
const { values, handleInputChange, reset} =  useForm({
    nickName: '',
    mail: '',
    password: '',
    password2: ''
})

const {mail, password, password2, nickName} = values

const  createUser = async (body, reset, setIsValid) => {

  setIsValid({
    msgRegister: '',
    isLoading: true
  })
    
      const credentials = {
        nickName: body.nickName,
        mail: body.mail,
        password: body.password
      }

      fetch('https://backend-24vg.onrender.com/api/v1/users', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(credentials)
      }).then(resp => resp.json())
      .then(data => {
        
        if(data?.message){
         return setIsValid({
          msgRegister: data.message,
          isLoading: false
        })}

        setIsValid({
          msgRegister: 'Usuario creado con éxito',
          isLoading: false
        });
        reset()

      }).catch(err => console.log(err))

}



const onFormSumbit = (event) => {
  event.preventDefault()
  
  if(isValidFormRegister(nickName, password, password2)){
    createUser(values, reset, setIsValid)
  }
          
}




  return (

<>
    <section className="login sm:flex sm:flex-col ">


    <figure className="register_picture h-full w-1/2 sm:w-full">
        <img src={image} className="login__img"/>     
    </figure>


    <form className="login_form sm:w-full w-1/2  " onSubmit={onFormSumbit}>
    <h2 className=" text-5xl p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">Registrate</h2>
    
    <input 
    type="text" 
    placeholder="NickName" 
    className="login__input w-1/2 md:w-10/12 " autoFocus
    name='nickName'
    value={nickName}
    onChange={handleInputChange} />
    
    <input 
    required
    type="mail" 
    placeholder="Mail" 
    className="login__input w-1/2 md:w-10/12"
    name='mail'
    value={mail}
    onChange={handleInputChange} />
    
    <input type="password" 
    placeholder="Password" 
    className="login__input w-1/2 md:w-10/12"
    name='password'
    onChange={handleInputChange}
    value={password} />
  

   <input type="password" 
    placeholder="Confirma tu password:" 
    className="login__input w-1/2 md:w-10/12"
    name='password2'
    onChange={handleInputChange}
    value={password2} />

    <div>
      {(isValid.msgRegister) && isValid.msgRegister}
    </div>


    <div className="w-1/6 text-center rounded-lg px-px py-px bg-gradient-to-r from-pink-500 to-violet-500 box md:w-10/12 ">
                { isValid.isLoading ?  <button type="sumbit" className="login__cta hover:bg-gradient-to-r from-green-500/5 to-blue-500/5" disabled>
                <svg className="animate-spin mx-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">    
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  
</button>
                :
                <button type='sumbit' className="login__cta hover:bg-gradient-to-r from-green-500/5 to-blue-500/5 md:w-10/12 ">Sign Up</button>}
                
            
    </div>
   
    </form>
   
    </section>
</>
  )
}
