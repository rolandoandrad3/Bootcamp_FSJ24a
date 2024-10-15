import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useForm } from 'react-hook-form'
import db from '../firebase/appConfig';

export default function RegisterProduct() {
    const { register, handleSubmit, watch, formState: {errors} } = useForm()
    /**
     * register = hace referencia a lo que capturo en la entrada de dato
     * watch = permite observar alguna entrada de dato (valor)
     * handleSubmit = es la accion de lo que voy hacer con la informacion
     */

    console.log(watch('name'));
    //metodo para guardar un producto
    const saveProduct = async () => {
        console.log("Se ha guardado");
        
        //conectarnos a la bd y guardamos un documento
        try{
            await addDoc(collection(db, "products"), {
                name: "Test",
                description: "Test"
            })
        }catch(error){
            console.error("Error al registrar el producto", error)
        }
    }
    
    return (
        <div>
            <h2>Registro de Productos</h2>
            <form action="" onSubmit={handleSubmit(saveProduct)}>
                <div>
                    <label htmlFor="">Ingresar Producto</label>
                    <input type="text" {...register('name')}/>
                </div>

                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" {...register('description')}/>
                </div>
                <div>
                    <button type='submit'>Guardar Producto</button>
                </div>
            </form>
        </div>
    )
}
