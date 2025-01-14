// el polimorfismo se puede lograr a través de interfaces, clases abstractas y genéricos.

//interfaces 

interface Person {
    name: string
    age: number
    //getData(): void
}

function getPerson(person: Person){
    console.log(`Esta es la persona: ${person.name}, de edad: ${person.age}`)
}

getPerson({ name: "Agustin", age: 27 })


//class NewPerson implements Person {
//    name: string
//    age: number
//
//    getData(): void {
//        console.log(this.)
//    }
//}
// clases abstractas

abstract class Animal {
    abstract makeSound(): void

    move(): void {
        console.log("Moving...")
    }
}

class Perico extends Animal {
    makeSound(): void {
        console.log("HACE RUIDO")
    }

    //move(): void {
    //    console.log("MOVING 2")
    //}
}

const perico = new Perico()

perico.makeSound()
perico.move()

// genericos

function reverse<T>(list: T[]): T[] {
    const reversedList = list.reverse()
    console.log(reversedList)
    return reversedList
}

reverse([1,2,3,4,5])
reverse(["Agustin", "Miguel", "Claudio", "Gisela"])
