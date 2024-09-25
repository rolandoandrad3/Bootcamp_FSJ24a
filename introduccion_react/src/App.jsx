import './App.css'
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

      <Header fullname="Melvin Gonzalez" saludo="Buenas Noches"/>

      <Header fullname="Orlando" saludo="Hola a todos!"/>
    </>
  )
}

export default App
