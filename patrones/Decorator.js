/*
// 1. Interfaz base para las notificaciones
interface Notificacion {
    enviar(mensaje: string): void;
  }

  // 2. Clase concreta que implementa la interfaz
class NotificacionBasica implements Notificacion {
    enviar(mensaje: string): void {
      console.log(`Notificación básica: ${mensaje}`);
    }
  }

 // 3. Clase abstracta de decorador que implementa la misma interfaz
abstract class DecoradorNotificacion implements Notificacion {
    protected componente: Notificacion;
  
    constructor(componente: Notificacion) {
      this.componente = componente;
    }
  
    enviar(mensaje: string): void {
      this.componente.enviar(mensaje); // este esta llamando al de la linea 28 y 39
    }
  }

// 4. Decoradores concretos
class NotificacionEmail extends DecoradorNotificacion {
    enviar(mensaje: string): void {
      super.enviar(mensaje); // Llama al método del componente original
      this.enviarEmail(mensaje); // Añade la funcionalidad específica
    }
  
    private enviarEmail(mensaje: string): void {
      console.log(`Enviando email con el mensaje: ${mensaje}`);
    }
  }
  
  class NotificacionSMS extends DecoradorNotificacion {
    enviar(mensaje: string): void {
      super.enviar(mensaje); // Llama al método del componente original
      this.enviarSMS(mensaje); // Añade la funcionalidad específica
    }
  
    private enviarSMS(mensaje: string): void {
      console.log(`Enviando SMS con el mensaje: ${mensaje}`);
    }
  }

// 5. Uso del patrón Decorator
const notificacionBasica = new NotificacionBasica();

console.log("Notificación básica:");
notificacionBasica.enviar("Hola, usuario!");

console.log("\nNotificación con email:");
const notificacionConEmail = new NotificacionEmail(notificacionBasica);
notificacionConEmail.enviar("Hola, usuario!");

console.log("\nNotificación con email y SMS:");
const notificacionConEmailYsms = new NotificacionSMS(notificacionConEmail);
notificacionConEmailYsms.enviar("Hola, usuario!");


*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NotificacionBasica = /** @class */ (function () {
    function NotificacionBasica() {
    }
    NotificacionBasica.prototype.enviar = function (message) {
        console.log("Notificacion BASICA enviada con este mje: ".concat(message, "}"));
    };
    return NotificacionBasica;
}());
var DecaradorNotificacion = /** @class */ (function () {
    function DecaradorNotificacion(notification) {
        this.notification = notification;
    }
    DecaradorNotificacion.prototype.enviar = function (message) {
        this.notification.enviar(message);
    };
    return DecaradorNotificacion;
}());
var NotificacionPush = /** @class */ (function (_super) {
    __extends(NotificacionPush, _super);
    function NotificacionPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificacionPush.prototype.enviar = function (message) {
        _super.prototype.enviar.call(this, message);
        this.enviarPushNotification(message);
    };
    NotificacionPush.prototype.enviarPushNotification = function (message) {
        console.log("Notificacion PUSH enviada con este mje: ".concat(message, "}"));
    };
    return NotificacionPush;
}(DecaradorNotificacion));
var NotificacionEmail = /** @class */ (function (_super) {
    __extends(NotificacionEmail, _super);
    function NotificacionEmail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificacionEmail.prototype.enviar = function (message) {
        _super.prototype.enviar.call(this, message);
        this.enviarEmailNotification(message);
    };
    NotificacionEmail.prototype.enviarEmailNotification = function (message) {
        console.log("Notificacion EMAIL enviada con este mje: ".concat(message, "}"));
    };
    return NotificacionEmail;
}(DecaradorNotificacion));
var notiBasica = new NotificacionBasica();
var notifiPush = new NotificacionPush(notiBasica);
var notifiEmail = new NotificacionEmail(notifiPush);
notifiEmail.enviar("Bienvenido a patros Agus!");
