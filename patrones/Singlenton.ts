class Lonely {
    private static instance: Lonely
    private constructor(){}

    static getInstance(){
        if(this.instance) {
            return this.instance
        }
        this.instance = new Lonely()
        return this.instance
    }
}

const nuevaClase = Lonely.getInstance()
const nuevaClase2 = Lonely.getInstance()

console.log(nuevaClase === nuevaClase2)




class SingletonPattern {
    private static instance: SingletonPattern

    private constructor(){}

    static getInstance(){
        if(this.instance) {
            return this.instance
        }
        this.instance = new SingletonPattern()
        return this.instance
    }
}

console.log(SingletonPattern.getInstance() === SingletonPattern.getInstance())