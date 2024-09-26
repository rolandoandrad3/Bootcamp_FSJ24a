import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ListNotes from './components/ListNotes'
import Notes from './components/Notes'
import Header from './Header'

/**
 * componentes funcionales, de clase
 * hooks
 * 
 * PascalCase
 * ListTasks
 * listTasks
 */

function App() {
  //estado para guardar las notas
  const [listNotes, setListNotes] = useState([])
  /**
   * React.Fragment
   */
  return (
    <>
      {/** llamando al componente  
       * pasando propiedades de un componente a otro
       * 
      */}
      <Header fullname="Alejandra Villatoro" saludo="Que ondas!"/>
      <div className='container'>
        <section>
          <h2>Registrando Notas</h2>
          {/**
           * en el formulario le pasamos 2 propiedades
           */}
          <Form listNotes={listNotes} setListNotes={setListNotes}/>
        </section>
        <section>
          <h2>Notas..</h2>
          <ListNotes listNotes={listNotes}/>
        </section>
        {/* <Notes title="Aprendiendo Props" description="Las props las podemos heredar.."/>
        <Notes title="Introduccion al estado" description="los estados de react.."/> */}
      </div>
    </>
  )
}

export default App
