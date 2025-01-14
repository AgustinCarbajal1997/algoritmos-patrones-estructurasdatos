// 2. Receptores: Dispositivos que ejecutan acciones
var Luz = /** @class */ (function () {
    function Luz() {
    }
    Luz.prototype.encender = function () {
        console.log("La luz está encendida.");
    };
    Luz.prototype.apagar = function () {
        console.log("La luz está apagada.");
    };
    return Luz;
}());
var Ventilador = /** @class */ (function () {
    function Ventilador() {
    }
    Ventilador.prototype.encender = function () {
        console.log("El ventilador está encendido.");
    };
    Ventilador.prototype.apagar = function () {
        console.log("El ventilador está apagado.");
    };
    return Ventilador;
}());
// 3. Comandos concretos
var EncenderLuzComando = /** @class */ (function () {
    function EncenderLuzComando(luz) {
        this.luz = luz;
    }
    EncenderLuzComando.prototype.ejecutar = function () {
        this.luz.encender();
    };
    EncenderLuzComando.prototype.deshacer = function () {
        this.luz.apagar();
    };
    return EncenderLuzComando;
}());
var ApagarLuzComando = /** @class */ (function () {
    function ApagarLuzComando(luz) {
        this.luz = luz;
    }
    ApagarLuzComando.prototype.ejecutar = function () {
        this.luz.apagar();
    };
    ApagarLuzComando.prototype.deshacer = function () {
        this.luz.encender();
    };
    return ApagarLuzComando;
}());
var EncenderVentiladorComando = /** @class */ (function () {
    function EncenderVentiladorComando(ventilador) {
        this.ventilador = ventilador;
    }
    EncenderVentiladorComando.prototype.ejecutar = function () {
        this.ventilador.encender();
    };
    EncenderVentiladorComando.prototype.deshacer = function () {
        this.ventilador.apagar();
    };
    return EncenderVentiladorComando;
}());
var ApagarVentiladorComando = /** @class */ (function () {
    function ApagarVentiladorComando(ventilador) {
        this.ventilador = ventilador;
    }
    ApagarVentiladorComando.prototype.ejecutar = function () {
        this.ventilador.apagar();
    };
    ApagarVentiladorComando.prototype.deshacer = function () {
        this.ventilador.encender();
    };
    return ApagarVentiladorComando;
}());
// 4. Invocador: Control remoto
var ControlRemoto = /** @class */ (function () {
    function ControlRemoto() {
        this.historial = [];
    }
    ControlRemoto.prototype.ejecutarComando = function (comando) {
        console.log("Ejecutando comando...");
        comando.ejecutar();
        this.historial.push(comando);
    };
    ControlRemoto.prototype.deshacerUltimoComando = function () {
        var comando = this.historial.pop();
        if (comando) {
            console.log("Deshaciendo comando...");
            comando.deshacer();
        }
        else {
            console.log("No hay comandos para deshacer.");
        }
    };
    return ControlRemoto;
}());
// 5. Uso del patrón Command
var luz = new Luz();
var ventilador = new Ventilador();
var encenderLuz = new EncenderLuzComando(luz);
var apagarLuz = new ApagarLuzComando(luz);
var encenderVentilador = new EncenderVentiladorComando(ventilador);
var apagarVentilador = new ApagarVentiladorComando(ventilador);
var controlRemoto = new ControlRemoto();
console.log("Acciones:");
controlRemoto.ejecutarComando(encenderLuz);
controlRemoto.ejecutarComando(encenderVentilador);
console.log("\nDeshacer últimas acciones:");
controlRemoto.deshacerUltimoComando();
controlRemoto.deshacerUltimoComando();
