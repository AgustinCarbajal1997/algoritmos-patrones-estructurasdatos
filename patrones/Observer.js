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
var SvcMeteorologicoNacional = /** @class */ (function () {
    function SvcMeteorologicoNacional() {
        this.temperatura = 0;
        this.observadores = [];
    }
    SvcMeteorologicoNacional.prototype.agregarObserbador = function (observador) {
        this.observadores.push(observador);
    };
    SvcMeteorologicoNacional.prototype.eliminar = function (observador) {
        this.observadores.filter(function (ob) { return ob !== observador; });
    };
    SvcMeteorologicoNacional.prototype.notificarObservadores = function () {
        var _this = this;
        this.observadores.forEach(function (ob) { return ob.actualizar("".concat(_this.temperatura)); });
    };
    SvcMeteorologicoNacional.prototype.modificarTemperatura = function (temperatura) {
        this.temperatura = temperatura;
        this.notificarObservadores();
    };
    return SvcMeteorologicoNacional;
}());
var Celular = /** @class */ (function () {
    function Celular(name) {
        this.name = name;
    }
    Celular.prototype.actualizar = function (notification) {
        console.log("".concat(this.name, " recibio la siguiente notificacion: La temperatura es: ").concat(notification, "\u00BA"));
    };
    return Celular;
}());
var CarPlay = /** @class */ (function () {
    function CarPlay(name) {
        this.name = name;
    }
    CarPlay.prototype.actualizar = function (notification) {
        console.log("".concat(this.name, " recibio la siguiente notificacion: La temperatura es: ").concat(notification, "\u00BA"));
    };
    return CarPlay;
}());
var celu1 = new Celular("Agustin");
var celu2 = new Celular("Claudio");
var carPlay = new CarPlay("Corolla");
var servicioMeteorologico = new SvcMeteorologicoNacional();
servicioMeteorologico.agregarObserbador(celu1);
servicioMeteorologico.agregarObserbador(celu2);
servicioMeteorologico.agregarObserbador(carPlay);
servicioMeteorologico.modificarTemperatura(22);
