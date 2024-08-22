import 'bootstrap/dist/css/bootstrap.min.css';
import './public/assets/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { agregarCurso } from './src/components/carrito';

//evento de escucha cuando se recarga la pagina HTML
document.addEventListener('DOMContentLoaded', () => {
    //llamando el elemento del main
    const listadoCursos = document.querySelector('#lista-cursos'); //<main>

    //alojar todos los eventos para el carrito
    /**
     * Mandamos un evento de escucha al contenido del main, cuando la persona le de click se ejecuta la funcion "agregarCurso"
     */
    listadoCursos.addEventListener('click', agregarCurso);
})


