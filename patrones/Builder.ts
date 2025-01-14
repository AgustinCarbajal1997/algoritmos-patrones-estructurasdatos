interface Builder {
    setSeats(seats: number): this
    setEngine(engine: string): this
}

class Car {
    private seats: number
    private engine: string

    public setSeats(seats: number): void {
        this.seats = seats
    }

    public setEngine(engine: string): void {
        this.engine = engine
    }
}

class Motorcycle {
    private seats: number
    private engine: string

    public setSeats(seats: number): void {
        if(seats > 2) {
            throw new Error("Una moto no puede tener mas de dos asientos")
        }
        this.seats = seats
    }

    public setEngine(engine: string): void {
        this.engine = engine
    }
}


class CarBuilder implements Builder {
    private car: Car
    
    constructor(){
        this.car = new Car()
    }

    public setSeats(seats: number): this {
        this.car.setSeats(seats) 
        return this
    }
    public setEngine(engine: string): this {
        this.car.setEngine(engine) 
        return this
    }
    public getResults(){
        return this.car
    }
}

class MotorcycleBuilder implements Builder {
    private motorcycle: Motorcycle
    
    constructor(){
        this.motorcycle = new Motorcycle()
    }

    public setSeats(seats: number): this {
        this.motorcycle.setSeats(seats) 
        return this
    }
    public setEngine(engine: string): this {
        this.motorcycle.setEngine(engine) 
        return this
    }
    public getResults(){
        return this.motorcycle
    }
}

const car = new CarBuilder().setSeats(4).getResults()
console.log("car", car)
const motorcycle = new MotorcycleBuilder().setEngine("116cc").getResults()
console.log("motorcycle", motorcycle)


/* otro ejemplo */

class Casa {
    paredes: string | null = null;
    techo: string | null = null;
    puertas: number | null = null;
    ventanas: number | null = null;
    jardin: boolean = false;
  
    mostrarDetalles(): void {
      console.log(`
        Casa construida con:
        - Paredes: ${this.paredes}
        - Techo: ${this.techo}
        - Puertas: ${this.puertas}
        - Ventanas: ${this.ventanas}
        - Jardín: ${this.jardin ? "Sí" : "No"}
      `);
    }
  }
  
  // 2. Interfaz Builder
  interface ConstructorCasa {
    construirParedes(material: string): this;
    construirTecho(material: string): this;
    instalarPuertas(cantidad: number): this;
    instalarVentanas(cantidad: number): this;
    agregarJardin(): this;
    obtenerResultado(): Casa;
  }
  
  // 3. Implementación concreta del Builder
  class ConstructorCasaConcreto implements ConstructorCasa {
    private casa: Casa;
  
    constructor() {
      this.casa = new Casa();
    }
  
    construirParedes(material: string): this {
      this.casa.paredes = material;
      return this;
    }
  
    construirTecho(material: string): this {
      this.casa.techo = material;
      return this;
    }
  
    instalarPuertas(cantidad: number): this {
      this.casa.puertas = cantidad;
      return this;
    }
  
    instalarVentanas(cantidad: number): this {
      this.casa.ventanas = cantidad;
      return this;
    }
  
    agregarJardin(): this {
      this.casa.jardin = true;
      return this;
    }
  
    obtenerResultado(): Casa {
      const resultado = this.casa;
      this.reset(); // Reiniciar para el próximo uso
      return resultado;
    }
  
    private reset(): void {
      this.casa = new Casa();
    }
  }
  
  // 4. Director: Controla el proceso de construcción
  class Director {
    private builder: ConstructorCasa;
  
    constructor(builder: ConstructorCasa) {
      this.builder = builder;
    }
  
    construirCasaSimple(): Casa {
      return this.builder
        .construirParedes("Ladrillo")
        .construirTecho("Tejas")
        .instalarPuertas(1)
        .instalarVentanas(2)
        .obtenerResultado();
    }
  
    construirCasaLujo(): Casa {
      return this.builder
        .construirParedes("Hormigón")
        .construirTecho("Techo Solar")
        .instalarPuertas(3)
        .instalarVentanas(8)
        .agregarJardin()
        .obtenerResultado();
    }
  }
  
  // 5. Uso del patrón Builder
  const builder = new ConstructorCasaConcreto();
  const director = new Director(builder);
  
  console.log("Construyendo una casa simple:");
  const casaSimple = director.construirCasaSimple();
  casaSimple.mostrarDetalles();
  
  console.log("Construyendo una casa de lujo:");
  const casaLujo = director.construirCasaLujo();
  casaLujo.mostrarDetalles();


  // otro ejemplo con vehiculo

  class Vehiculo {
    ruedas: number  | null  = null
    espejos: number | null  = null
    puertas: number | null  = null
    aireAc: boolean         = false
    color: string   | null  = null

    mostrarDetalles(){
      console.log(`
      Vehiculo construida con:
      - Ruedas: ${this.ruedas}
      - Espejos: ${this.espejos}
      - Puertas: ${this.puertas}
      - AireAC: ${this.aireAc ? "Sí" : "No"}
      - Color: ${this.color}
    `);
    }
  }

  interface BuilderInterface {
    agregarRuedas(number: number): this;
    agregarEspejos(number: number): this;
    agregarPuertas(number: number): this;
    agregarAc(): this;
    agregarColor(string: string): this;
    obtenerResultado(): Vehiculo
  }

  class ConstructorVehiculo implements BuilderInterface {
    private vehiculo: Vehiculo

    constructor(){
      this.vehiculo = new Vehiculo()
    }

    agregarRuedas(number: number): this {
      this.vehiculo.ruedas = number
      return this
    }
    agregarEspejos(number: number): this {
      this.vehiculo.espejos = number
      return this
    }
    agregarPuertas(number: number): this {
      this.vehiculo.puertas = number
      return this
    }
    agregarAc(): this {
      this.vehiculo.aireAc = true
      return this
    }
    agregarColor(string: string): this {
      this.vehiculo.color = string
      return this
    }

    obtenerResultado(): Vehiculo{
      const resultado = this.vehiculo
      this.reset()
      return resultado
    }

    private reset(){
      this.vehiculo = new Vehiculo()
    }
  }

  class DirectorVehiculos {
    builder: BuilderInterface

    constructor(builder: BuilderInterface) {
      this.builder = builder
    }

    construirMoto(): Vehiculo {
     return this.builder
        .agregarRuedas(2)
        .agregarEspejos(2)
        .agregarColor("Rojo")
        .obtenerResultado()
    }

    construirAuto(): Vehiculo{
      return this.builder
        .agregarRuedas(4)
        .agregarPuertas(4)
        .agregarAc()
        .agregarEspejos(3)
        .agregarColor("Gris")
        .obtenerResultado()
    }

    construirBicicleta(): Vehiculo{
        return this.builder
        .agregarColor("Verde")
        .agregarRuedas(2)
        .obtenerResultado()
    }
  }

  const constructorVehiculo = new ConstructorVehiculo()
  const directorVehiculo                =  new DirectorVehiculos(constructorVehiculo)

  const moto = directorVehiculo.construirMoto().mostrarDetalles()
  const auto = directorVehiculo.construirAuto().mostrarDetalles()
  const bici = directorVehiculo.construirBicicleta().mostrarDetalles()
  

