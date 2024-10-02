import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Characters() {
    //[]
    //un estado para guardar a los personajes de dragon ball
    const [characters, setCharacters] = useState([])

    /**
     * el efecto que se va hacer (funcion)
     * arreglo de dependencia
     * [] => que solamente se va renderizar una vez
     */
    useEffect(() => {
        //metodo para obtener la informacion de la api
        const getCharacters = async () => {
            try{
                //obtenemos la informacion de los personajes
                const response = await axios.get('https://dragonball-api.com/api/characters')
                //de la data que manda axios solicitamos el arreglo de los personajes (items)
                //console.log(response.data.items);
                //actualizando el estado de los personajes
                setCharacters(response.data.items)
                //desestructurar la data
                //const { items } = response.data
                
            }catch(error){
                console.log(error.message);
            }   
        }

        //llamando a la funcion para que haga efecto
        getCharacters();
    }, [])
    console.log(characters);
    

    return (
        <div>Characters</div>
    )
}
