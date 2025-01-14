/*
// 1. Interfaz para el procesador de archivos
interface ProcesadorArchivo {
    procesar(contenido: string): void;
  }
  
  // 2. Implementaciones concretas de procesadores
  class ProcesadorTexto implements ProcesadorArchivo {
    procesar(contenido: string): void {
      console.log(`Procesando archivo de texto: ${contenido}`);
    }
  }
  
  class ProcesadorJSON implements ProcesadorArchivo {
    procesar(contenido: string): void {
      try {
        const data = JSON.parse(contenido);
        console.log("Procesando archivo JSON:", data);
      } catch (error) {
        console.error("Error al procesar el archivo JSON:", error.message);
      }
    }
  }
  
  // 3. Clase principal que delega el procesamiento
  class GestorArchivos {
    private procesador: ProcesadorArchivo;
  
    constructor(procesador: ProcesadorArchivo) {
      this.procesador = procesador;
    }
  
    cambiarProcesador(procesador: ProcesadorArchivo): void {
      this.procesador = procesador;
    }
  
    procesarArchivo(contenido: string): void {
      console.log("Delegando el procesamiento del archivo...");
      this.procesador.procesar(contenido);
    }
  }
  
  // 4. Uso del patrón Delegate
  const archivoTexto = "Hola, este es un archivo de texto.";
  const archivoJSON = '{"nombre": "Juan", "edad": 30}';
  
  const gestor = new GestorArchivos(new ProcesadorTexto());
  
  console.log("Procesando archivo de texto:");
  gestor.procesarArchivo(archivoTexto);
  
  console.log("\nCambiando al procesador JSON:");
  gestor.cambiarProcesador(new ProcesadorJSON());
  gestor.procesarArchivo(archivoJSON);


*/

interface ProcesadorDeArchivo {
  procesarArchivo(contenido: string):void
}

class ProcesadorTexto implements ProcesadorDeArchivo {
  procesarArchivo(contenido: string): void {
    console.log(`Se procesa el archivo en texto: ${contenido}`)
  }
}

class ProcesadorJSON implements ProcesadorDeArchivo {
  procesarArchivo(contenido: string): void {
    console.log("Se processa el contenido en JSON:", JSON.parse(contenido))
  }
}

class GestorArchivo {
  private procesadorArchivo: ProcesadorDeArchivo

  constructor(procesadorArchivo: ProcesadorDeArchivo){
    this.procesadorArchivo = procesadorArchivo
  }

  procesarArchivo(contenido: string){
    this.procesadorArchivo.procesarArchivo(contenido)
  }

  modificarProcesadorArchivo(procesadorArchivo: ProcesadorDeArchivo){
    this.procesadorArchivo = procesadorArchivo
  }
}

const procesadorTexto   = new ProcesadorTexto()
const procesadorJSON    = new ProcesadorJSON()

const gestorArchivo     = new GestorArchivo(procesadorTexto)

gestorArchivo.procesarArchivo("Hola Agustin desde Texto")
gestorArchivo.modificarProcesadorArchivo(procesadorJSON)
gestorArchivo.procesarArchivo('{"contenido": "Hola Agustin desde JSON"}')



  