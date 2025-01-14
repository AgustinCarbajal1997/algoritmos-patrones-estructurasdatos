/* 
// 1. Interfaz del Observador
interface Observador {
    actualizar(temperatura: number): void;
  }
  
  // 2. Interfaz del Sujeto
  interface Sujeto {
    agregarObservador(observador: Observador): void;
    eliminarObservador(observador: Observador): void;
    notificarObservadores(): void;
  }

 // 3. Implementación del Sujeto
class ServicioMeteorologico implements Sujeto {
    private observadores: Observador[] = [];
    private temperatura: number = 0;
  
    agregarObservador(observador: Observador): void {
      this.observadores.push(observador);
    }
  
    eliminarObservador(observador: Observador): void {
      this.observadores = this.observadores.filter(o => o !== observador);
    }
  
    notificarObservadores(): void {
      console.log("Notificando a los observadores...");
      this.observadores.forEach(observador => observador.actualizar(this.temperatura));
    }
  
    setTemperatura(nuevaTemperatura: number): void {
      console.log(`Actualizando la temperatura a ${nuevaTemperatura}°C`);
      this.temperatura = nuevaTemperatura;
      this.notificarObservadores();
    }
  }
  
 // 4. Implementaciones de Observadores
class DispositivoMovil implements Observador {
    private nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    actualizar(temperatura: number): void {
      console.log(`${this.nombre} recibió una actualización: Temperatura actual: ${temperatura}°C`);
    }
  } 

  class PantallaExterna implements Observador {
    actualizar(temperatura: number): void {
      console.log(`Pantalla externa muestra: Temperatura actual: ${temperatura}°C`);
    }
  }  

const servicioMeteorologico = new ServicioMeteorologico();
const movil1 = new DispositivoMovil("Móvil de Juan");
const movil2 = new DispositivoMovil("Móvil de María");
const pantallaExterna = new PantallaExterna();

servicioMeteorologico.agregarObservador(movil1);
servicioMeteorologico.agregarObservador(movil2);
servicioMeteorologico.agregarObservador(pantallaExterna);


console.log("\nPrimera actualización de temperatura:");
servicioMeteorologico.setTemperatura(25);

console.log("\nSegunda actualización de temperatura (se elimina un observador):");
servicioMeteorologico.eliminarObservador(movil1);
servicioMeteorologico.setTemperatura(30);
*/

interface Observador {
  actualizar(notification: string): void
}

interface Sujeto {
  agregarObserbador(observador: Observador): void
  eliminar(observador: Observador): void
  notificarObservadores(): void
}

class SvcMeteorologicoNacional implements Sujeto {

  private temperatura: number = 0
  private observadores: Observador[] = []

  agregarObserbador(observador: Observador): void {
    this.observadores.push(observador)
  }
  eliminar(observador: Observador): void {
    this.observadores.filter(ob => ob !== observador)
  }
  notificarObservadores(): void {
    this.observadores.forEach(ob => ob.actualizar(`${this.temperatura}`))
  }
  modificarTemperatura(temperatura: number): void {
    this.temperatura = temperatura
    this.notificarObservadores()
  }
}

class Celular implements Observador {
  private name: string
  constructor(name: string){
    this.name = name
  }
  actualizar(notification: string): void {
    console.log(`${this.name} recibio la siguiente notificacion: La temperatura es: ${notification}º`)
  }
  
}

class CarPlay implements Observador {
  private name: string
  constructor(name: string){
    this.name = name
  }
  actualizar(notification: string): void {
    console.log(`${this.name} recibio la siguiente notificacion: La temperatura es: ${notification}º`)
  }
}


const celu1 = new Celular("Agustin")
const celu2 = new Celular("Claudio")
const carPlay = new CarPlay("Corolla")

const servicioMeteorologico = new SvcMeteorologicoNacional()
servicioMeteorologico.agregarObserbador(celu1)
servicioMeteorologico.agregarObserbador(celu2)
servicioMeteorologico.agregarObserbador(carPlay)

servicioMeteorologico.modificarTemperatura(22)

