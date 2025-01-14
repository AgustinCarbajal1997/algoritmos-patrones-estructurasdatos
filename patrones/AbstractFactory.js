// 2. Productos concretos de transporte terrestre
var Auto = /** @class */ (function () {
    function Auto() {
    }
    Auto.prototype.obtenerTipo = function () {
        return "Vehículo terrestre: Auto";
    };
    return Auto;
}());
var Gasolina = /** @class */ (function () {
    function Gasolina() {
    }
    Gasolina.prototype.obtenerDescripcion = function () {
        return "Combustible fósil: Gasolina";
    };
    return Gasolina;
}());
// 3. Productos concretos de transporte aéreo
var Avion = /** @class */ (function () {
    function Avion() {
    }
    Avion.prototype.obtenerTipo = function () {
        return "Vehículo aéreo: Avión";
    };
    return Avion;
}());
var Queroseno = /** @class */ (function () {
    function Queroseno() {
    }
    Queroseno.prototype.obtenerDescripcion = function () {
        return "Combustible de aviación: Queroseno";
    };
    return Queroseno;
}());
// 5. Implementaciones concretas de la fábrica
var FabricaTerrestre = /** @class */ (function () {
    function FabricaTerrestre() {
    }
    FabricaTerrestre.prototype.crearVehiculo = function () {
        return new Auto();
    };
    FabricaTerrestre.prototype.crearCombustible = function () {
        return new Gasolina();
    };
    return FabricaTerrestre;
}());
var FabricaAerea = /** @class */ (function () {
    function FabricaAerea() {
    }
    FabricaAerea.prototype.crearVehiculo = function () {
        return new Avion();
    };
    FabricaAerea.prototype.crearCombustible = function () {
        return new Queroseno();
    };
    return FabricaAerea;
}());
// 6. Uso del patrón Abstract Factory
function mostrarDetallesFabrica(fabrica) {
    var vehiculo = fabrica.crearVehiculo();
    var combustible = fabrica.crearCombustible();
    console.log(vehiculo.obtenerTipo());
    console.log(combustible.obtenerDescripcion());
}
console.log("Producción en fábrica terrestre:");
var fabricaTerrestre = new FabricaTerrestre();
mostrarDetallesFabrica(fabricaTerrestre);
console.log("\nProducción en fábrica aérea:");
var fabricaAerea = new FabricaAerea();
mostrarDetallesFabrica(fabricaAerea);
