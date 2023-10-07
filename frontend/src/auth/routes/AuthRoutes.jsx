import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPages"
import { RegisterPage } from "../pages/RegisterPage"

export const AuthRoutes = () => {
  return (
    <>
        <Routes>
            <Route>
             <Route path="/login" element={<LoginPage />} />    
             <Route path="/register" element={<RegisterPage />} />
            </Route>
        </Routes>
    </>
  )
}
