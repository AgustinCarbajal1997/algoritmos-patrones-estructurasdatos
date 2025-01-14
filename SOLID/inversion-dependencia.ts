// 1. Interfaz para el procesador de pagos
interface ProcesadorDePago {
    procesarPago(monto: number): void;
  }
  
  // 2. Implementación concreta de procesador de pago con tarjeta de crédito
  class ProcesadorTarjetaCredito implements ProcesadorDePago {
    procesarPago(monto: number): void {
      console.log(`Procesando el pago de $${monto} con tarjeta de crédito`);
    }
  }
  
  // 3. Implementación concreta de procesador de pago con PayPal
  class ProcesadorPayPal implements ProcesadorDePago {
    procesarPago(monto: number): void {
      console.log(`Procesando el pago de $${monto} con PayPal`);
    }
  }
  
  // 4. Clase de servicio de pago, ahora depende de la abstracción (interfaz)
  class ServicioDePago {
    private procesador: ProcesadorDePago;
  
    constructor(procesador: ProcesadorDePago) {
      // El servicio de pago ahora depende de la abstracción, no de una implementación concreta
      this.procesador = procesador;
    }
  
    realizarPago(monto: number): void {
      this.procesador.procesarPago(monto);
    }
  }
  
  // 5. Uso del servicio con diferentes implementaciones del procesador de pago
  
  // Usando el procesador de tarjeta de crédito
  const procesadorCredito = new ProcesadorTarjetaCredito();
  const servicioCredito = new ServicioDePago(procesadorCredito);
  servicioCredito.realizarPago(100); // Imprime: Procesando el pago de $100 con tarjeta de crédito
  
  // Usando el procesador de PayPal
  const procesadorPaypal = new ProcesadorPayPal();
  const servicioPaypal = new ServicioDePago(procesadorPaypal);
  servicioPaypal.realizarPago(200); // Imprime: Procesando el pago de $200 con PayPal


  /* INYECCION DE DEPENDENCIA */


  interface IProcesadorDeNotificaciones {
    enviarNotification(message: string): void
  }

  class ProcesadorDeNotificacionesCorreo implements IProcesadorDeNotificaciones {
      enviarNotification(message: string): void {
          console.log(`Enviando notificación por correo: ${message}`)
      }
  }

  class ProcesadorDeNotificacionesPorPUSH implements IProcesadorDeNotificaciones {
    enviarNotification(message: string): void {
        console.log(`Enviando notificación PUSH POR FIREBASE: ${message}`)
    }
  }
  class ServicioDeNotificaciones {
    private procesador: IProcesadorDeNotificaciones

    constructor(procesador: IProcesadorDeNotificaciones){ // inyeccion de dependencia a traves del constructor
        this.procesador = procesador
    }

    enviarNotificacion(message: string){
        this.procesador.enviarNotification(message)
    }
  }


  const nuevaNoti = new ProcesadorDeNotificacionesCorreo()
  const nuevoSvc = new ServicioDeNotificaciones(nuevaNoti)
  nuevoSvc.enviarNotificacion("Hola Agustin desde inyeccion de dependencia")

  const nuevaNotiPUSH = new ProcesadorDeNotificacionesPorPUSH()
  const nuevoSvc1 = new ServicioDeNotificaciones(nuevaNotiPUSH)
  nuevoSvc.enviarNotificacion("Hola Agustin desde inyeccion de dependencia NOTIFICACION PUSH")