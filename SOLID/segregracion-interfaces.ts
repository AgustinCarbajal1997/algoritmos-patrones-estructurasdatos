// 1. Interfaces seguidas por el Principio de Segregación de Interfaces

// Interfaz para dispositivos que imprimen
interface Imprimible {
    imprimir(doc: string): void;
  }
  
  // Interfaz para dispositivos que escanean
  interface Escaneable {
    escanear(): string;
  }
  
  // 2. Clases concretas que implementan solo las interfaces relevantes
  
  // Impresora que solo puede imprimir
  class Impresora implements Imprimible {
    imprimir(doc: string): void {
      console.log(`Imprimiendo el documento: ${doc}`);
    }
  }
  
  // Escáner que solo puede escanear
  class Escaner implements Escaneable {
    escanear(): string {
      return "Documento escaneado";
    }
  }
  
  // Impresora multifuncional que puede imprimir y escanear
  class ImpresoraMultifuncional implements Imprimible, Escaneable {
    imprimir(doc: string): void {
      console.log(`Imprimiendo el documento: ${doc}`);
    }
  
    escanear(): string {
      return "Documento escaneado";
    }
  }
  
  // 3. Uso de las clases y las interfaces
  const impresora = new Impresora();
  impresora.imprimir("Factura");
  
  const escaner = new Escaner();
  console.log(escaner.escanear());
  
  const impresoraMultifuncional = new ImpresoraMultifuncional();
  impresoraMultifuncional.imprimir("Contrato");
  console.log(impresoraMultifuncional.escanear());


/*
  podemos combinar interfaces
*/

  interface Prueba1 {
    realizarAccion():void
  }

  interface Prueba2 extends Prueba1 {
    realizarAccion2():void
  }

  class Prueba implements Prueba2 {
    realizarAccion2(): void {
      throw new Error("Method not implemented.");
    }
    realizarAccion(): void {
      throw new Error("Method not implemented.");
    }

  }