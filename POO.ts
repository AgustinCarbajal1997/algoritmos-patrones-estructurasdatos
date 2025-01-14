class Developer {
    protected name: string
    static nombre = "Agustin desde static"
    constructor(name: string) {
        this.name = name
    }

    get(){
        console.log(this.name)
    }

    set(name: string){
        this.name = name
    }
}

class Frontend extends Developer {
    private stack: string


    constructor(name: string, stack: string){
        super(name)
        this.stack = stack
    }

    get(){
        console.log(`Mi nombre es: ${this.name} y soy desarrollador: ${this.stack}`)
    }

}




const dev = new Developer("Agustin")
const frontDev = new Frontend("Agustin Carbajal", "MERN")

//dev.get()
//dev.set("Claudio")
//dev.get()
console.log(Developer.nombre)
frontDev.get()