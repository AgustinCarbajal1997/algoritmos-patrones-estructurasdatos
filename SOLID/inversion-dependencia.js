// 2. Implementación concreta de procesador de pago con tarjeta de crédito
var ProcesadorTarjetaCredito = /** @class */ (function () {
    function ProcesadorTarjetaCredito() {
    }
    ProcesadorTarjetaCredito.prototype.procesarPago = function (monto) {
        console.log("Procesando el pago de $".concat(monto, " con tarjeta de cr\u00E9dito"));
    };
    return ProcesadorTarjetaCredito;
}());
// 3. Implementación concreta de procesador de pago con PayPal
var ProcesadorPayPal = /** @class */ (function () {
    function ProcesadorPayPal() {
    }
    ProcesadorPayPal.prototype.procesarPago = function (monto) {
        console.log("Procesando el pago de $".concat(monto, " con PayPal"));
    };
    return ProcesadorPayPal;
}());
// 4. Clase de servicio de pago, ahora depende de la abstracción (interfaz)
var ServicioDePago = /** @class */ (function () {
    function ServicioDePago(procesador) {
        // El servicio de pago ahora depende de la abstracción, no de una implementación concreta
        this.procesador = procesador;
    }
    ServicioDePago.prototype.realizarPago = function (monto) {
        this.procesador.procesarPago(monto);
    };
    return ServicioDePago;
}());
// 5. Uso del servicio con diferentes implementaciones del procesador de pago
// Usando el procesador de tarjeta de crédito
var procesadorCredito = new ProcesadorTarjetaCredito();
var servicioCredito = new ServicioDePago(procesadorCredito);
servicioCredito.realizarPago(100); // Imprime: Procesando el pago de $100 con tarjeta de crédito
// Usando el procesador de PayPal
var procesadorPaypal = new ProcesadorPayPal();
var servicioPaypal = new ServicioDePago(procesadorPaypal);
servicioPaypal.realizarPago(200); // Imprime: Procesando el pago de $200 con PayPal
var ProcesadorDeNotificacionesCorreo = /** @class */ (function () {
    function ProcesadorDeNotificacionesCorreo() {
    }
    ProcesadorDeNotificacionesCorreo.prototype.enviarNotification = function (message) {
        console.log("Enviando notificaci\u00F3n por correo: ".concat(message));
    };
    return ProcesadorDeNotificacionesCorreo;
}());
var ProcesadorDeNotificacionesPorPUSH = /** @class */ (function () {
    function ProcesadorDeNotificacionesPorPUSH() {
    }
    ProcesadorDeNotificacionesPorPUSH.prototype.enviarNotification = function (message) {
        console.log("Enviando notificaci\u00F3n PUSH POR FIREBASE: ".concat(message));
    };
    return ProcesadorDeNotificacionesPorPUSH;
}());
var ServicioDeNotificaciones = /** @class */ (function () {
    function ServicioDeNotificaciones(procesador) {
        this.procesador = procesador;
    }
    ServicioDeNotificaciones.prototype.enviarNotificacion = function (message) {
        this.procesador.enviarNotification(message);
    };
    return ServicioDeNotificaciones;
}());
var nuevaNoti = new ProcesadorDeNotificacionesCorreo();
var nuevoSvc = new ServicioDeNotificaciones(nuevaNoti);
nuevoSvc.enviarNotificacion("Hola Agustin desde inyeccion de dependencia");
var nuevaNotiPUSH = new ProcesadorDeNotificacionesPorPUSH();
var nuevoSvc1 = new ServicioDeNotificaciones(nuevaNotiPUSH);
nuevoSvc.enviarNotificacion("Hola Agustin desde inyeccion de dependencia NOTIFICACION PUSH");
