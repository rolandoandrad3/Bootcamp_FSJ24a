import React from 'react'
import Notes from './Notes'

export default function ListNotes({listNotes}) {
    return (
        <div>
            {
                //iterando el arreglo de las notas
                /** pasando la informacion de cada nota a otro componente */
                listNotes.map((note) => {
                    return (
                        <Notes title={note.title} description={note.description}/>
                    )
                })
            }
        </div>
    )
}
