import React, { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import auth_user from '../firebase/appConfig'
import Login from './session/Login'
import {signOut} from 'firebase/auth'

export default function Home() {
    //estado donde vamos a verificar si el usuario esta autenticado
    const [user, setUser] = useState(null)

    //verificamos si el usuario esta en firebase
    //userFirebase = devuelve un objeto si la persona existe
    onAuthStateChanged(auth_user, (userFirebase) => {
        if(userFirebase){
            //si el usuario existe
            console.log(userFirebase);
            setUser(userFirebase)
        }else{
            setUser(null)
        }
    })

    //metodo para cerrar sesion
    const logout = () => {
        signOut(auth_user).then(() => {
            alert("La sesion se ha cerrado");
        }).catch((error) => {
            console.error("Error al cerrar sesion", error)
        })
    }

    return (
        <div>
            {
                //validamos si el usuario existe le damos la bienvenida sino tendra que loguearse
                user ? 
                <>
                    <h1>Bienvendio a la aplicacion!</h1>
                    <p>Has iniciado sesion</p>
                    <button onClick={logout}>Cerrar Sesion</button>
                </>
                : <Login />
            }
            
        </div>
    )
}
