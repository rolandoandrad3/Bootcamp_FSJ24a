import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

//rescatar la informacion de la api por medio de fetch o axios
const fetcher = async (url) => {
    return await axios.get(url).then((response) => response.data).catch((error) => {
        throw new Error(`Error al cargar los datos de la api`)
    })
}

export default function CharactersSWR() {
    /**
     * data = representa la informacion que se ha capturado
     * error = representa los errores si no hay informacion
     * isLoading = representa la carga de datos
     */
    const { data, error, isLoading } = useSWR('https://dragonball-api.com/api/characters', fetcher)

    //mostrando la informacion de los personajes
    console.log(data.items);
    

    return (
        <div>CharactersSWR</div>
    )
}
