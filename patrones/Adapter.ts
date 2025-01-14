// 1. Interfaz de la API antigua
interface PagoAntiguo {
    procesarPago(cantidad: number): void;
  }
  
  // 2. Implementación concreta de la API antigua
  class ProcesadorPagoAntiguo implements PagoAntiguo {
    procesarPago(cantidad: number): void {
      console.log(`Pago procesado usando la API antigua. Cantidad: $${cantidad}`);
    }
  }
  
  // 3. Interfaz de la nueva API
  interface PagoNuevo {
    realizarPago(cantidad: number, moneda: string): void;
  }
  
  // 4. Implementación concreta de la nueva API
  class ProcesadorPagoNuevo implements PagoNuevo {
    realizarPago(cantidad: number, moneda: string): void {
      console.log(`Pago procesado usando la nueva API. Cantidad: ${cantidad} ${moneda}`);
    }
  }
  
  // 5. Adaptador para la nueva API
  class AdaptadorPagoNuevo implements PagoAntiguo {
    private procesadorPagoNuevo: PagoNuevo;
  
    constructor(procesadorPagoNuevo: PagoNuevo) {
      this.procesadorPagoNuevo = procesadorPagoNuevo;
    }
  
    procesarPago(cantidad: number): void {
      // Convertir la cantidad a dólares y usar la nueva API
      console.log("Adaptando la llamada para usar la nueva API...");
      this.procesadorPagoNuevo.realizarPago(cantidad, "USD");
    }
  }
  
  // 6. Uso del patrón Adapter
  console.log("Usando la API antigua:");
  const procesadorAntiguo = new ProcesadorPagoAntiguo();
  procesadorAntiguo.procesarPago(100);
  
  console.log("\nUsando la nueva API a través del adaptador:");
  const procesadorNuevo = new ProcesadorPagoNuevo();
  const adaptador = new AdaptadorPagoNuevo(procesadorNuevo);
  adaptador.procesarPago(150);
  