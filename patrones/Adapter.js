// 2. Implementación concreta de la API antigua
var ProcesadorPagoAntiguo = /** @class */ (function () {
    function ProcesadorPagoAntiguo() {
    }
    ProcesadorPagoAntiguo.prototype.procesarPago = function (cantidad) {
        console.log("Pago procesado usando la API antigua. Cantidad: $".concat(cantidad));
    };
    return ProcesadorPagoAntiguo;
}());
// 4. Implementación concreta de la nueva API
var ProcesadorPagoNuevo = /** @class */ (function () {
    function ProcesadorPagoNuevo() {
    }
    ProcesadorPagoNuevo.prototype.realizarPago = function (cantidad, moneda) {
        console.log("Pago procesado usando la nueva API. Cantidad: ".concat(cantidad, " ").concat(moneda));
    };
    return ProcesadorPagoNuevo;
}());
// 5. Adaptador para la nueva API
var AdaptadorPagoNuevo = /** @class */ (function () {
    function AdaptadorPagoNuevo(procesadorPagoNuevo) {
        this.procesadorPagoNuevo = procesadorPagoNuevo;
    }
    AdaptadorPagoNuevo.prototype.procesarPago = function (cantidad) {
        // Convertir la cantidad a dólares y usar la nueva API
        console.log("Adaptando la llamada para usar la nueva API...");
        this.procesadorPagoNuevo.realizarPago(cantidad, "USD");
    };
    return AdaptadorPagoNuevo;
}());
// 6. Uso del patrón Adapter
console.log("Usando la API antigua:");
var procesadorAntiguo = new ProcesadorPagoAntiguo();
procesadorAntiguo.procesarPago(100);
console.log("\nUsando la nueva API a través del adaptador:");
var procesadorNuevo = new ProcesadorPagoNuevo();
var adaptador = new AdaptadorPagoNuevo(procesadorNuevo);
adaptador.procesarPago(150);
