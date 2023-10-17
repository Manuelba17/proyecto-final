import { useState } from 'react';


    export const useFormRegister = () => {

        const [isValid, setIsValid] = useState({
            msgRegister: '',
            isLoading: false
        })


        const isValidFormRegister = (name, pass1,pass2) => {

            if(name.trim().length ===0){
                setIsValid({
                    msgRegister: 'Ingrese un nombre',
                    isLoading: false
                })
                return false;
            } else if(pass1 !== pass2){
            setIsValid({
                msgRegister: 'Las contraseñas deben coincidir',
                isLoading: false
            });
            return false;
        }

        setIsValid({
            msgRegister: '',
            isLoading: false
        });
        return true;
            
}

    return {isValid, isValidFormRegister, setIsValid}
    

    }