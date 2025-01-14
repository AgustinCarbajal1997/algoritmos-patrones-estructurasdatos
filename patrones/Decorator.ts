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



/* otro ejemplo  */

interface Notificacion {
  enviar(message: string): void
}

class NotificacionBasica implements Notificacion {
  enviar(message: string): void {
   console.log(`Notificacion BASICA enviada con este mje: ${message}}`) 
  }
}

abstract class DecaradorNotificacion implements Notificacion {
  protected notification: Notificacion

  constructor(notification: Notificacion){
    this.notification = notification
  }

  enviar(message: string): void {
    this.notification.enviar(message)
  }
}

class NotificacionPush extends DecaradorNotificacion {
  enviar(message: string): void {
    super.enviar(message)
    this.enviarPushNotification(message)
  }
  private enviarPushNotification(message: string) {
    console.log(`Notificacion PUSH enviada con este mje: ${message}}`) 
  }
}

class NotificacionEmail extends DecaradorNotificacion {
  enviar(message: string): void {
    super.enviar(message)
    this.enviarEmailNotification(message)
  }
  private enviarEmailNotification(message: string) {
    console.log(`Notificacion EMAIL enviada con este mje: ${message}}`) 
  }
}

const notiBasica  = new NotificacionBasica()
const notifiPush  = new NotificacionPush(notiBasica)
const notifiEmail = new NotificacionEmail(notifiPush)

notifiEmail.enviar("Bienvenido a patros Agus!")

