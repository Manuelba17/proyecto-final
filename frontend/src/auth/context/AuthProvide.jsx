/* eslint-disable react/prop-types */
import { useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { modalReducer } from "./modalReducer"


const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return{
    user,
    logged: !!user,
    isLoading: false
  }

}

const URL_LOGIN = 'https://backend-24vg.onrender.com/api/v1/users/auth'

export const AuthProvide = ({children}) => {

    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(authReducer, {}, init)  
    const [modalState, modalDispatch] = useReducer(modalReducer, false)


    const login =  async(mail, password, reset) =>{

      dispatch({
        type: types.starLoad
      })
      
      let info
      const credentials = {
        mail,
        password
      }       
      

      const resp = await fetch(URL_LOGIN, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(credentials)
      })
      
      if (!resp.ok){

        const data = await resp.json()
        info = data
        const action = {
          type: types.message,
          payload: info
        }
        reset()
       return dispatch(action)

      }
        const data = await resp.json()
        info = data

        const action = {
          type: types.login,
          payload: info
        }
        
        dispatch(action)
        navigate('/dashboard', {replace: true})
        localStorage.setItem('user', JSON.stringify(data))

    }

    const onLogoutApp = () => {
      localStorage.removeItem('user')
      const action = {
        type: types.logout
      }

      dispatch(action)

    }

    const modalOpen = () => {
      modalDispatch({
        type: types.openModal
      })
    }

    const modalClose = () => {
      modalDispatch({ type: types.closeModal})
    }

  return (
    <AuthContext.Provider value={{
      ...state,
      state,
      modalState,
      login,
      onLogoutApp,
      modalOpen,
      modalClose
    }}>
        {children}
    </AuthContext.Provider>
  )
}
