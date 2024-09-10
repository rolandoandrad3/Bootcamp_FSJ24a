/** async - await (promesas) (funciones asincronica) */

//declarando una funcion asincronica para los datos de los personajes
export async function getAllCharacters() {
    try{
        const response = await fetch("https://dragonball-api.com/api/characters");
        const data = await response.json();
        console.log(data);
        
    }catch(error){
        console.log('Error al obtener la data de dragon ball', error);
    }
}


