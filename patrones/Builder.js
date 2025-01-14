var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setSeats = function (seats) {
        this.seats = seats;
    };
    Car.prototype.setEngine = function (engine) {
        this.engine = engine;
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle() {
    }
    Motorcycle.prototype.setSeats = function (seats) {
        if (seats > 2) {
            throw new Error("Una moto no puede tener mas de dos asientos");
        }
        this.seats = seats;
    };
    Motorcycle.prototype.setEngine = function (engine) {
        this.engine = engine;
    };
    return Motorcycle;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = new Car();
    }
    CarBuilder.prototype.setSeats = function (seats) {
        this.car.setSeats(seats);
        return this;
    };
    CarBuilder.prototype.setEngine = function (engine) {
        this.car.setEngine(engine);
        return this;
    };
    CarBuilder.prototype.getResults = function () {
        return this.car;
    };
    return CarBuilder;
}());
var MotorcycleBuilder = /** @class */ (function () {
    function MotorcycleBuilder() {
        this.motorcycle = new Motorcycle();
    }
    MotorcycleBuilder.prototype.setSeats = function (seats) {
        this.motorcycle.setSeats(seats);
        return this;
    };
    MotorcycleBuilder.prototype.setEngine = function (engine) {
        this.motorcycle.setEngine(engine);
        return this;
    };
    MotorcycleBuilder.prototype.getResults = function () {
        return this.motorcycle;
    };
    return MotorcycleBuilder;
}());
var car = new CarBuilder().setSeats(4).getResults();
console.log("car", car);
var motorcycle = new MotorcycleBuilder().setEngine("116cc").getResults();
console.log("motorcycle", motorcycle);
/* otro ejemplo */
var Casa = /** @class */ (function () {
    function Casa() {
        this.paredes = null;
        this.techo = null;
        this.puertas = null;
        this.ventanas = null;
        this.jardin = false;
    }
    Casa.prototype.mostrarDetalles = function () {
        console.log("\n        Casa construida con:\n        - Paredes: ".concat(this.paredes, "\n        - Techo: ").concat(this.techo, "\n        - Puertas: ").concat(this.puertas, "\n        - Ventanas: ").concat(this.ventanas, "\n        - Jard\u00EDn: ").concat(this.jardin ? "Sí" : "No", "\n      "));
    };
    return Casa;
}());
// 3. Implementación concreta del Builder
var ConstructorCasaConcreto = /** @class */ (function () {
    function ConstructorCasaConcreto() {
        this.casa = new Casa();
    }
    ConstructorCasaConcreto.prototype.construirParedes = function (material) {
        this.casa.paredes = material;
        return this;
    };
    ConstructorCasaConcreto.prototype.construirTecho = function (material) {
        this.casa.techo = material;
        return this;
    };
    ConstructorCasaConcreto.prototype.instalarPuertas = function (cantidad) {
        this.casa.puertas = cantidad;
        return this;
    };
    ConstructorCasaConcreto.prototype.instalarVentanas = function (cantidad) {
        this.casa.ventanas = cantidad;
        return this;
    };
    ConstructorCasaConcreto.prototype.agregarJardin = function () {
        this.casa.jardin = true;
        return this;
    };
    ConstructorCasaConcreto.prototype.obtenerResultado = function () {
        var resultado = this.casa;
        this.reset(); // Reiniciar para el próximo uso
        return resultado;
    };
    ConstructorCasaConcreto.prototype.reset = function () {
        this.casa = new Casa();
    };
    return ConstructorCasaConcreto;
}());
// 4. Director: Controla el proceso de construcción
var Director = /** @class */ (function () {
    function Director(builder) {
        this.builder = builder;
    }
    Director.prototype.construirCasaSimple = function () {
        return this.builder
            .construirParedes("Ladrillo")
            .construirTecho("Tejas")
            .instalarPuertas(1)
            .instalarVentanas(2)
            .obtenerResultado();
    };
    Director.prototype.construirCasaLujo = function () {
        return this.builder
            .construirParedes("Hormigón")
            .construirTecho("Techo Solar")
            .instalarPuertas(3)
            .instalarVentanas(8)
            .agregarJardin()
            .obtenerResultado();
    };
    return Director;
}());
// 5. Uso del patrón Builder
var builder = new ConstructorCasaConcreto();
var director = new Director(builder);
console.log("Construyendo una casa simple:");
var casaSimple = director.construirCasaSimple();
casaSimple.mostrarDetalles();
console.log("Construyendo una casa de lujo:");
var casaLujo = director.construirCasaLujo();
casaLujo.mostrarDetalles();
// otro ejemplo con vehiculo
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
        this.ruedas = null;
        this.espejos = null;
        this.puertas = null;
        this.aireAc = false;
        this.color = null;
    }
    Vehiculo.prototype.mostrarDetalles = function () {
        console.log("\n      Vehiculo construida con:\n      - Ruedas: ".concat(this.ruedas, "\n      - Espejos: ").concat(this.espejos, "\n      - Puertas: ").concat(this.puertas, "\n      - AireAC: ").concat(this.aireAc ? "Sí" : "No", "\n      - Color: ").concat(this.color, "\n    "));
    };
    return Vehiculo;
}());
var ConstructorVehiculo = /** @class */ (function () {
    function ConstructorVehiculo() {
        this.vehiculo = new Vehiculo();
    }
    ConstructorVehiculo.prototype.agregarRuedas = function (number) {
        this.vehiculo.ruedas = number;
        return this;
    };
    ConstructorVehiculo.prototype.agregarEspejos = function (number) {
        this.vehiculo.espejos = number;
        return this;
    };
    ConstructorVehiculo.prototype.agregarPuertas = function (number) {
        this.vehiculo.puertas = number;
        return this;
    };
    ConstructorVehiculo.prototype.agregarAc = function () {
        this.vehiculo.aireAc = true;
        return this;
    };
    ConstructorVehiculo.prototype.agregarColor = function (string) {
        this.vehiculo.color = string;
        return this;
    };
    ConstructorVehiculo.prototype.obtenerResultado = function () {
        var resultado = this.vehiculo;
        this.reset();
        return resultado;
    };
    ConstructorVehiculo.prototype.reset = function () {
        this.vehiculo = new Vehiculo();
    };
    return ConstructorVehiculo;
}());
var DirectorVehiculos = /** @class */ (function () {
    function DirectorVehiculos(builder) {
        this.builder = builder;
    }
    DirectorVehiculos.prototype.construirMoto = function () {
        return this.builder
            .agregarRuedas(2)
            .agregarEspejos(2)
            .agregarColor("Rojo")
            .obtenerResultado();
    };
    DirectorVehiculos.prototype.construirAuto = function () {
        return this.builder
            .agregarRuedas(4)
            .agregarPuertas(4)
            .agregarAc()
            .agregarEspejos(3)
            .agregarColor("Gris")
            .obtenerResultado();
    };
    DirectorVehiculos.prototype.construirBicicleta = function () {
        return this.builder
            .agregarColor("Verde")
            .agregarRuedas(2)
            .obtenerResultado();
    };
    return DirectorVehiculos;
}());
var constructorVehiculo = new ConstructorVehiculo();
var directorVehiculo = new DirectorVehiculos(constructorVehiculo);
var moto = directorVehiculo.construirMoto().mostrarDetalles();
var auto = directorVehiculo.construirAuto().mostrarDetalles();
var bici = directorVehiculo.construirBicicleta().mostrarDetalles();
