import React from 'react'

export default function Notes({title, description}) {
    return (
        <div className='card-note'>
            <h2 className='title-note'>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
