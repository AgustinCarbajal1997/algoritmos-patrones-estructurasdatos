// 1. Interfaz de la estrategia
interface EstrategiaEnvio {
    calcularCosto(distancia: number): number;
  }

  // 2. Estrategias concretas
class EnvioTerrestre implements EstrategiaEnvio {
    calcularCosto(distancia: number): number {
      return distancia * 0.5; // Costo base por kilómetro
    }
  }
  
  class EnvioAereo implements EstrategiaEnvio {
    calcularCosto(distancia: number): number {
      return distancia * 1.5; // Costo más alto por kilómetro
    }
  }
  
  class EnvioMaritimo implements EstrategiaEnvio {
    calcularCosto(distancia: number): number {
      return distancia * 0.8; // Costo intermedio por kilómetro
    }
  }

  // 3. Contexto que usa las estrategias
class CalculadoraEnvio {
    private estrategia: EstrategiaEnvio;
  
    constructor(estrategia: EstrategiaEnvio) {
      this.estrategia = estrategia;
    }
  
    cambiarEstrategia(estrategia: EstrategiaEnvio): void {
      this.estrategia = estrategia;
    }
  
    calcularCostoEnvio(distancia: number): number {
      return this.estrategia.calcularCosto(distancia);
    }
  }

  // 4. Uso del patrón Strategy
const distancia = 1000; // Distancia en kilómetros

const envioTerrestre = new EnvioTerrestre();
const envioAereo = new EnvioAereo();
const envioMaritimo = new EnvioMaritimo();

const calculadora = new CalculadoraEnvio(envioTerrestre);

console.log("Cálculo usando envío terrestre:");
console.log(`Costo: $${calculadora.calcularCostoEnvio(distancia)}`);

console.log("\nCambiando a envío aéreo:");
calculadora.cambiarEstrategia(envioAereo);
console.log(`Costo: $${calculadora.calcularCostoEnvio(distancia)}`);

console.log("\nCambiando a envío marítimo:");
calculadora.cambiarEstrategia(envioMaritimo);
console.log(`Costo: $${calculadora.calcularCostoEnvio(distancia)}`);