// https://github.com/Anexsoft/Design-Patterns-TypeScript/tree/master/creational/abstract-factory
interface Vehiculo {
    obtenerTipo(): string;
  }
  
  interface Combustible {
    obtenerDescripcion(): string;
  }
  
  // 2. Productos concretos de transporte terrestre
  class Auto implements Vehiculo {
    obtenerTipo(): string {
      return "Vehículo terrestre: Auto";
    }
  }
  
  class Gasolina implements Combustible {
    obtenerDescripcion(): string {
      return "Combustible fósil: Gasolina";
    }
  }
  
  // 3. Productos concretos de transporte aéreo
  class Avion implements Vehiculo {
    obtenerTipo(): string {
      return "Vehículo aéreo: Avión";
    }
  }
  
  class Queroseno implements Combustible {
    obtenerDescripcion(): string {
      return "Combustible de aviación: Queroseno";
    }
  }
  
  // 4. Interfaz Abstract Factory  Fabrica de Fabricas
  interface FabricaTransporte {
    crearVehiculo(): Vehiculo;
    crearCombustible(): Combustible;
  }
  
  // 5. Implementaciones concretas de la fábrica
  class FabricaTerrestre implements FabricaTransporte {
    crearVehiculo(): Vehiculo {
      return new Auto();
    }
    crearCombustible(): Combustible {
      return new Gasolina();
    }
  }
  
  class FabricaAerea implements FabricaTransporte {
    crearVehiculo(): Vehiculo {
      return new Avion();
    }
    crearCombustible(): Combustible {
      return new Queroseno();
    }
  }
  
  // 6. Uso del patrón Abstract Factory
  function mostrarDetallesFabrica(fabrica: FabricaTransporte): void {
    const vehiculo = fabrica.crearVehiculo();
    const combustible = fabrica.crearCombustible();
  
    console.log(vehiculo.obtenerTipo());
    console.log(combustible.obtenerDescripcion());
  }
  
  console.log("Producción en fábrica terrestre:");
  const fabricaTerrestre = new FabricaTerrestre();
  mostrarDetallesFabrica(fabricaTerrestre);
  
  console.log("\nProducción en fábrica aérea:");
  const fabricaAerea = new FabricaAerea();
  mostrarDetallesFabrica(fabricaAerea);