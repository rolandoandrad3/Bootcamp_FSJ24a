import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from '../firebase/appConfig'

export default function ListProducts() {
    //declaramos un estado para la lista de productos
    const [products, setProducts] = useState([])

    //montando la informacion de los productos que hay en firebase
    useEffect(() => {
        //Funcion que nos permite visualizar la info de la bd en tiempo real
        onSnapshot(
            //obtenemos la conexion de la base de datos y el nombre de la coleccion
            collection(db, "products"),
            (snapshot) => {
                //objeto de firebase
                //console.log(snapshot);
                //testeando el primer documento de la coleccion
                console.log(snapshot.docs[0].data());
                
                /** mapeando / iterando los documentos de la coleccion */
                const array_products = snapshot.docs.map((doc) => {
                    //copiamos la data de cada documento de la coleccion productos y la mandamos al array_products
                    return {...doc.data(), id: doc.id}
                })
                //testear 
                console.log(array_products);
                
                //actualizamos el estado con el arreglo de productos
                setProducts(array_products)
            }
        )
    }, [])

    return (
        <div>
            <h2>Lista de Productos</h2>
            <div>
                {
                    products.length > 0 ?
                        products.map((product) => {
                            return (
                                <div key={product.id}>
                                    <div>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <button>Editar</button>
                                        <button>Eliminar</button>
                                    </div>
                                </div>
                            )
                        })
                    : <p>No hay productos por el momento</p>
                }
            </div>
        </div>
    )
}
