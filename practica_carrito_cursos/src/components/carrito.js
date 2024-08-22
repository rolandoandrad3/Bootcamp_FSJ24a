//declarando el arreglo para guardar los cursos
let arregloCarrito = [];
/** accedemos al tbody especificando en la tabla que se encuentra con su id */
const bodyCarrito = document.querySelector('#lista-carrito tbody');

//e => representa un evento
export function agregarCurso(e){
    //classList
    //let buton = document.querySelector('button');
    //validamos los elementos html que contengan la clase 'button-carrito'
    if(e.target.classList.contains('button-carrito')){ //true / false
        //seleccionar los elementos que contenga el boton

        //seleccionamos el padre de la etiqueta (<button>)
        const cursoSeleccionado = e.target.parentElement.parentElement;
        //console.log(cursoSeleccionado);

        //llamamos la funcion para leer los datos del curso que selecciono el usuario
        leerDatosCurso(cursoSeleccionado);
    }
}

//funcion para leer los datos del curso
function leerDatosCurso(curso){
    //convertimos la informacion del curso en un objeto
    const objetoCurso = {
        //clave - valor
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('button').getAttribute('data-id')
    }
    //console.log(objetoCurso)
    //agregamos los cursos al arreglo
    arregloCarrito.push(objetoCurso);
    console.log(arregloCarrito);

    //una vez agregado los cursos al arreglo dibujamos en la table
    carritoHTML();
}

//Iterar el arreglo de los cursos en la tabla html
function carritoHTML(){
    //iterando un arreglo (map(), foreach(), for, while, do while)
    arregloCarrito.map(curso => {
        //creando una fila (tr)
        const fila = document.createElement('tr');
        //dibujando las celdas de cada fila
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar_curso" data-id=${curso.id}>Eliminar</a>
            </td>
        `;
        //insertando las filas en <tbody>
        bodyCarrito.appendChild(fila)
    })
}