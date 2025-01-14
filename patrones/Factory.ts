
/*
interface IPaymentMethod {
    commision:number
}

enum PaymentType {
    Visa,
    Mastercard,
    PayPal
};

 el comportamiento puede cambiar pero la implementancio va a ser la misma. Como siempre se implementa la misma interfaz, siempre se 
tiene que agregar una propiedad que se llame commision, independientemente del metodo de pago 


class Mastercard implements IPaymentMethod {
  get commision(): number {
      return 0.04
  }
}

class Visa implements IPaymentMethod {
  get commision(): number {
      return 0.05
  }
}

class Paypal implements IPaymentMethod {
  get commision(): number {
      return 0.06
  }
}

class PaymentMethodFactory {
  public static createPaymentType(type: PaymentType): IPaymentMethod {
      if(type === PaymentType.Mastercard) {
          return new Mastercard()
      }
      if(type === PaymentType.PayPal) {
          return new Paypal()
      }
      if(type === PaymentType.Visa) {
          return new Visa()
      }

      throw new Error("Invalid payment method")
  }
}

class Order {
  paymentType?: IPaymentMethod
  commision: number = 0

  constructor(private type: PaymentType, public amount: number) {} // amount es el monto de la orden

  public create(): void {
      // set payment method
      this.paymentType = PaymentMethodFactory.createPaymentType(this.type)
      //calculate commision
      this.commision = this.paymentType.commision * this.amount
      console.log("comision de:", this.commision)
  }

}

let order1 = new Order(PaymentType.Visa, 100)
let order2 = new Order(PaymentType.Mastercard, 100)
let order3 = new Order(PaymentType.PayPal, 100)

order1.create()
order2.create()
order3.create()
*/



/* OTRO EJEMPLO CON VEHICULO */

// 1. Interfaz común para los productos
interface Vehiculo {
    obtenerDescripcion(): string;
  }
  
  // 2. Clases concretas que implementan la interfaz
  class Auto implements Vehiculo {
    obtenerDescripcion(): string {
      return "Soy un Auto, diseñado para la carretera.";
    }
  }
  
  class Moto implements Vehiculo {
    obtenerDescripcion(): string {
      return "Soy una Moto, ideal para trayectos rápidos.";
    }
  }
  
  // 3. Enumeración para tipos de vehículo
  enum TipoVehiculo {
    Auto = "Auto",
    Moto = "Moto",
  }
  
  // 4. Clase Factory
  class FabricaVehiculos {
    static crearVehiculo(tipo: TipoVehiculo): Vehiculo {
      switch (tipo) {
        case TipoVehiculo.Auto:
          return new Auto();
        case TipoVehiculo.Moto:
          return new Moto();
        default:
          throw new Error("Tipo de vehículo no soportado.");
      }
    }
  }
  
  // 5. Uso del patrón Factory
  const auto = FabricaVehiculos.crearVehiculo(TipoVehiculo.Auto);
  console.log(auto.obtenerDescripcion()); // "Soy un Auto, diseñado para la carretera."
  
  const moto = FabricaVehiculos.crearVehiculo(TipoVehiculo.Moto);
  console.log(moto.obtenerDescripcion()); 



  /*  METODO DE PAGO */


  interface IPaymentMethod {
    obtenerPago(): string
  }

  class CreditCard implements IPaymentMethod {
    obtenerPago(): string {
      console.log("Se paga con tarjeta de credito")
      return "Se paga con tarjeta de credito"
    }

  }

  class Paypal implements IPaymentMethod {
    obtenerPago(): string {
      console.log("Se paga con Paypal")
      return "Se paga con Paypal"
    }
  }

  class Cash implements IPaymentMethod {
    obtenerPago(): string {
      console.log("Se paga con  CASH EFECTIVO")
      return "Se paga con CASH EFECTIVO"
    }
  }

  enum PaymentTypes {
    CreditCard,
    Paypal,
    Cash
  }

  class FactoryMethod {
    static metodoDePago(type: PaymentTypes): IPaymentMethod {
      switch(type){
        case PaymentTypes.CreditCard: 
            return new CreditCard()
          case PaymentTypes.Paypal: 
            return new Paypal()
          case PaymentTypes.Cash: 
            return new Cash()  
          default:
            throw new Error("No existe el metodo de pago introducido")  
      }
    }
  }

const metodoCreditCard  = FactoryMethod.metodoDePago(PaymentTypes.CreditCard).obtenerPago()
const metodoPaypal      = FactoryMethod.metodoDePago(PaymentTypes.Paypal).obtenerPago()
const metodoCash        = FactoryMethod.metodoDePago(PaymentTypes.Cash).obtenerPago()




