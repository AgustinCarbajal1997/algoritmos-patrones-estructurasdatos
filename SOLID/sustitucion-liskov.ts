// 1. Clase base: CuentaBancaria
class CuentaBancaria {
    protected saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    depositar(cantidad: number): void {
      if (cantidad <= 0) {
        throw new Error("La cantidad a depositar debe ser mayor a cero.");
      }
      this.saldo += cantidad;
    }
  
    retirar(cantidad: number): void {
      if (cantidad <= 0) {
        throw new Error("La cantidad a retirar debe ser mayor a cero.");
      }
      if (cantidad > this.saldo) {
        throw new Error("Fondos insuficientes.");
      }
      this.saldo -= cantidad;
    }
  
    obtenerSaldo(): number {
      return this.saldo;
    }
  }
  
  // 2. Clase derivada: CuentaDeAhorro
  class CuentaDeAhorro extends CuentaBancaria {
    private tasaInteres: number;
  
    constructor(saldoInicial: number, tasaInteres: number) {
      super(saldoInicial);
      this.tasaInteres = tasaInteres;
    }
  
    aplicarInteres(): void {
      this.saldo += this.saldo * this.tasaInteres;
    }
  }
  
  // 3. Clase derivada: CuentaCorriente
  class CuentaCorriente extends CuentaBancaria {
    private limiteDescubierto: number;
  
    constructor(saldoInicial: number, limiteDescubierto: number) {
      super(saldoInicial);
      this.limiteDescubierto = limiteDescubierto;
    }
  
    retirar(cantidad: number): void {
      if (cantidad <= 0) {
        throw new Error("La cantidad a retirar debe ser mayor a cero.");
      }
      if (cantidad > this.saldo + this.limiteDescubierto) {
        throw new Error("Excede el límite permitido.");
      }
      this.saldo -= cantidad;
    }
  }
  
  // 4. Uso del Principio de Sustitución de Liskov
  const procesarCuenta = (cuenta: CuentaBancaria): void => {
    console.log(`Saldo inicial: ${cuenta.obtenerSaldo()}`);
    cuenta.depositar(100);
    console.log(`Saldo después de depositar: ${cuenta.obtenerSaldo()}`);
    cuenta.retirar(50);
    console.log(`Saldo después de retirar: ${cuenta.obtenerSaldo()}`);
  };
  
  // Usamos una CuentaDeAhorro
  const cuentaAhorro = new CuentaDeAhorro(500, 0.05);
  procesarCuenta(cuentaAhorro);
  
  // Usamos una CuentaCorriente
  const cuentaCorriente = new CuentaCorriente(300, 200);
  procesarCuenta(cuentaCorriente);