var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Compañero
var Colleague = /** @class */ (function () {
    function Colleague(mediator) {
        this.mediator = mediator;
    }
    return Colleague;
}());
// Compañero Concreto 1
var ConcreteColleague1 = /** @class */ (function (_super) {
    __extends(ConcreteColleague1, _super);
    function ConcreteColleague1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteColleague1.prototype.send = function (message) {
        console.log('Colleague1 sends message:', message);
        this.mediator.sendMessage(message, this);
    };
    ConcreteColleague1.prototype.receiveMessage = function (message) {
        console.log('Colleague1 receives message:', message);
    };
    return ConcreteColleague1;
}(Colleague));
// Compañero Concreto 2
var ConcreteColleague2 = /** @class */ (function (_super) {
    __extends(ConcreteColleague2, _super);
    function ConcreteColleague2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteColleague2.prototype.send = function (message) {
        console.log('Colleague2 sends message:', message);
        this.mediator.sendMessage(message, this);
    };
    ConcreteColleague2.prototype.receiveMessage = function (message) {
        console.log('Colleague2 receives message:', message);
    };
    return ConcreteColleague2;
}(Colleague));
// Mediador Concreto
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(colleague1, colleague2) {
        this.colleague1 = colleague1;
        this.colleague2 = colleague2;
    }
    ConcreteMediator.prototype.sendMessage = function (message, colleague) {
        if (colleague === this.colleague1) {
            this.colleague2.receiveMessage(message);
        }
        else if (colleague === this.colleague2) {
            this.colleague1.receiveMessage(message);
        }
    };
    return ConcreteMediator;
}());
// Uso del patrón Mediator
var colleague1 = new ConcreteColleague1(null); // Inicialmente sin mediador
var colleague2 = new ConcreteColleague2(null); // Inicialmente sin mediador
// Creamos el mediador
var mediator = new ConcreteMediator(colleague1, colleague2);
// Establecemos el mediador en los compañeros
colleague1 = new ConcreteColleague1(mediator);
colleague2 = new ConcreteColleague2(mediator);
// Ejemplo de comunicación
colleague1.send('¡Hola, Colleague2!');
colleague2.send('¡Hola, Colleague1!');
