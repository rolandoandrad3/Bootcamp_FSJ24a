import React, { useState } from 'react'
import ListNotes from './ListNotes'

export default function Form({listNotes, setListNotes}) {
    //declarando un estado
    /**
     * [0] => se guarda como se inicializa el estado
     * [1] => se encarga de actualizar el estado
     */
    const [titleNote, setTitleNote] = useState("")
    const [descriptionNote, setDescriptionNote] = useState("")

    

    //funcion para capturar el titulo de la nota
    const handleTitle = (e) =>{
        //cuando encontres la etiqueta captura su valor
        //console.log(e.target.value);
        //actualizamos el estado
        setTitleNote(e.target.value)
    }

    const handleDescription = (e) =>{
        //cuando encontres la etiqueta captura su valor
        //console.log(e.target.value);
        //actualizamos el estado
        setDescriptionNote(e.target.value)
    }

    //metodo para guardar la nota
    const handleSubmit = (e) => {
        e.preventDefault()
        //guardar la nota

        //spread operator (...) hacemos una copia del arreglo y guardamos la nueva nota
        setListNotes([...listNotes, {
            title: titleNote,
            description: descriptionNote
        }])
    }

    console.log(listNotes);
    
    /**
     * let titulo = document.querySelect().value
     */
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='ingresa un titulo' onChange={(e) => handleTitle(e)}/>

                <textarea placeholder='descripcion...' onChange={(e) => handleDescription(e)}></textarea>

                <input type="submit" value="Guardar Nota"/>
            </form>
        </div>
    )
}
