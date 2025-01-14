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
// 2. Clases concretas que implementan la interfaz
var Auto = /** @class */ (function () {
    function Auto() {
    }
    Auto.prototype.obtenerDescripcion = function () {
        return "Soy un Auto, diseñado para la carretera.";
    };
    return Auto;
}());
var Moto = /** @class */ (function () {
    function Moto() {
    }
    Moto.prototype.obtenerDescripcion = function () {
        return "Soy una Moto, ideal para trayectos rápidos.";
    };
    return Moto;
}());
// 3. Enumeración para tipos de vehículo
var TipoVehiculo;
(function (TipoVehiculo) {
    TipoVehiculo["Auto"] = "Auto";
    TipoVehiculo["Moto"] = "Moto";
})(TipoVehiculo || (TipoVehiculo = {}));
// 4. Clase Factory
var FabricaVehiculos = /** @class */ (function () {
    function FabricaVehiculos() {
    }
    FabricaVehiculos.crearVehiculo = function (tipo) {
        switch (tipo) {
            case TipoVehiculo.Auto:
                return new Auto();
            case TipoVehiculo.Moto:
                return new Moto();
            default:
                throw new Error("Tipo de vehículo no soportado.");
        }
    };
    return FabricaVehiculos;
}());
// 5. Uso del patrón Factory
var auto = FabricaVehiculos.crearVehiculo(TipoVehiculo.Auto);
console.log(auto.obtenerDescripcion()); // "Soy un Auto, diseñado para la carretera."
var moto = FabricaVehiculos.crearVehiculo(TipoVehiculo.Moto);
console.log(moto.obtenerDescripcion());
var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.obtenerPago = function () {
        console.log("Se paga con tarjeta de credito");
        return "Se paga con tarjeta de credito";
    };
    return CreditCard;
}());
var Paypal = /** @class */ (function () {
    function Paypal() {
    }
    Paypal.prototype.obtenerPago = function () {
        console.log("Se paga con Paypal");
        return "Se paga con Paypal";
    };
    return Paypal;
}());
var Cash = /** @class */ (function () {
    function Cash() {
    }
    Cash.prototype.obtenerPago = function () {
        console.log("Se paga con  CASH EFECTIVO");
        return "Se paga con CASH EFECTIVO";
    };
    return Cash;
}());
var PaymentTypes;
(function (PaymentTypes) {
    PaymentTypes[PaymentTypes["CreditCard"] = 0] = "CreditCard";
    PaymentTypes[PaymentTypes["Paypal"] = 1] = "Paypal";
    PaymentTypes[PaymentTypes["Cash"] = 2] = "Cash";
})(PaymentTypes || (PaymentTypes = {}));
var FactoryMethod = /** @class */ (function () {
    function FactoryMethod() {
    }
    FactoryMethod.metodoDePago = function (type) {
        switch (type) {
            case PaymentTypes.CreditCard:
                return new CreditCard();
            case PaymentTypes.Paypal:
                return new Paypal();
            case PaymentTypes.Cash:
                return new Cash();
            default:
                throw new Error("No existe el metodo de pago introducido");
        }
    };
    return FactoryMethod;
}());
var metodoCreditCard = FactoryMethod.metodoDePago(PaymentTypes.CreditCard).obtenerPago();
var metodoPaypal = FactoryMethod.metodoDePago(PaymentTypes.Paypal).obtenerPago();
var metodoCash = FactoryMethod.metodoDePago(PaymentTypes.Cash).obtenerPago();