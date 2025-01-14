// 2. Estrategias concretas
var EnvioTerrestre = /** @class */ (function () {
    function EnvioTerrestre() {
    }
    EnvioTerrestre.prototype.calcularCosto = function (distancia) {
        return distancia * 0.5; // Costo base por kilómetro
    };
    return EnvioTerrestre;
}());
var EnvioAereo = /** @class */ (function () {
    function EnvioAereo() {
    }
    EnvioAereo.prototype.calcularCosto = function (distancia) {
        return distancia * 1.5; // Costo más alto por kilómetro
    };
    return EnvioAereo;
}());
var EnvioMaritimo = /** @class */ (function () {
    function EnvioMaritimo() {
    }
    EnvioMaritimo.prototype.calcularCosto = function (distancia) {
        return distancia * 0.8; // Costo intermedio por kilómetro
    };
    return EnvioMaritimo;
}());
// 3. Contexto que usa las estrategias
var CalculadoraEnvio = /** @class */ (function () {
    function CalculadoraEnvio(estrategia) {
        this.estrategia = estrategia;
    }
    CalculadoraEnvio.prototype.cambiarEstrategia = function (estrategia) {
        this.estrategia = estrategia;
    };
    CalculadoraEnvio.prototype.calcularCostoEnvio = function (distancia) {
        return this.estrategia.calcularCosto(distancia);
    };
    return CalculadoraEnvio;
}());
// 4. Uso del patrón Strategy
var distancia = 1000; // Distancia en kilómetros
var envioTerrestre = new EnvioTerrestre();
var envioAereo = new EnvioAereo();
var envioMaritimo = new EnvioMaritimo();
var calculadora = new CalculadoraEnvio(envioTerrestre);
console.log("Cálculo usando envío terrestre:");
console.log("Costo: $".concat(calculadora.calcularCostoEnvio(distancia)));
console.log("\nCambiando a envío aéreo:");
calculadora.cambiarEstrategia(envioAereo);
console.log("Costo: $".concat(calculadora.calcularCostoEnvio(distancia)));
console.log("\nCambiando a envío marítimo:");
calculadora.cambiarEstrategia(envioMaritimo);
console.log("Costo: $".concat(calculadora.calcularCostoEnvio(distancia)));
