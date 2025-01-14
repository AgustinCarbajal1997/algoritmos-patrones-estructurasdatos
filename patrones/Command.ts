// 1. Interfaz Command
interface Comando {
    ejecutar(): void;
    deshacer(): void;
  }
  
  // 2. Receptores: Dispositivos que ejecutan acciones
  class Luz {
    encender(): void {
      console.log("La luz está encendida.");
    }
  
    apagar(): void {
      console.log("La luz está apagada.");
    }
  }
  
  class Ventilador {
    encender(): void {
      console.log("El ventilador está encendido.");
    }
  
    apagar(): void {
      console.log("El ventilador está apagado.");
    }
  }
  
  // 3. Comandos concretos
  class EncenderLuzComando implements Comando {
    private luz: Luz;
  
    constructor(luz: Luz) {
      this.luz = luz;
    }
  
    ejecutar(): void {
      this.luz.encender();
    }
  
    deshacer(): void {
      this.luz.apagar();
    }
  }
  
  class ApagarLuzComando implements Comando {
    private luz: Luz;
  
    constructor(luz: Luz) {
      this.luz = luz;
    }
  
    ejecutar(): void {
      this.luz.apagar();
    }
  
    deshacer(): void {
      this.luz.encender();
    }
  }
  
  class EncenderVentiladorComando implements Comando {
    private ventilador: Ventilador;
  
    constructor(ventilador: Ventilador) {
      this.ventilador = ventilador;
    }
  
    ejecutar(): void {
      this.ventilador.encender();
    }
  
    deshacer(): void {
      this.ventilador.apagar();
    }
  }
  
  class ApagarVentiladorComando implements Comando {
    private ventilador: Ventilador;
  
    constructor(ventilador: Ventilador) {
      this.ventilador = ventilador;
    }
  
    ejecutar(): void {
      this.ventilador.apagar();
    }
  
    deshacer(): void {
      this.ventilador.encender();
    }
  }
  
  // 4. Invocador: Control remoto
  class ControlRemoto {
    private historial: Comando[] = [];
  
    ejecutarComando(comando: Comando): void {
      console.log("Ejecutando comando...");
      comando.ejecutar();
      this.historial.push(comando);
    }
  
    deshacerUltimoComando(): void {
      const comando = this.historial.pop();
      if (comando) {
        console.log("Deshaciendo comando...");
        comando.deshacer();
      } else {
        console.log("No hay comandos para deshacer.");
      }
    }
  }
  
  // 5. Uso del patrón Command
  const luz = new Luz();
  const ventilador = new Ventilador();
  
  const encenderLuz = new EncenderLuzComando(luz);
  const apagarLuz = new ApagarLuzComando(luz);
  const encenderVentilador = new EncenderVentiladorComando(ventilador);
  const apagarVentilador = new ApagarVentiladorComando(ventilador);
  
  const controlRemoto = new ControlRemoto();
  
  console.log("Acciones:");
  controlRemoto.ejecutarComando(encenderLuz);
  controlRemoto.ejecutarComando(encenderVentilador);
  
  console.log("\nDeshacer últimas acciones:");
  controlRemoto.deshacerUltimoComando();
  controlRemoto.deshacerUltimoComando();
  