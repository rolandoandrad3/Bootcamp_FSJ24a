
//Clase base
class Persona{
    //atributos
    nombre:string;
    apellido:string;
    correo:string;
    protected password:string;
    //el atributo dui va recibir ya sea una cadena o numeros
    private dui:string | number;
    //bootcamp:string; //clase hija donde yo lo necesito

    //metodos en comun
    constructor(nombre:string, apellido:string, correo:string, pass:string, dui:string | number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.password = pass;
        this.dui = dui;
    }

    //creamos el metodo get y set para el atributo privado
    getDui(){
        return this.dui;
    }

    setDui(dui: string | number){
        this.dui = dui;
    }

    verPerfil(){
        //code..
    }
}


//CLASES HIJAS
class Coach extends Persona{
    //atributos exclusivos para el coach
    bootcamp:string;

    constructor(nombre:string, apellido:string, correo:string, pass:string, dui:string | number, bootcamp:string){
        //reutilizar codigo
        //heredar el constructor padre
        super(nombre, apellido, correo, pass, dui);
        this.bootcamp = bootcamp;
    }
}

//crear un coach ()
let coach = new Coach("Oscar","Lemus","oscar@kodigo.org","oscar","12345-6","FSJ22");
console.log(coach);
