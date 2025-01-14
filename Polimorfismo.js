// el polimorfismo se puede lograr a través de interfaces, clases abstractas y genéricos.
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
function getPerson(person) {
    console.log("Esta es la persona: ".concat(person.name, ", de edad: ").concat(person.age));
}
getPerson({ name: "Agustin", age: 27 });
// clases abstractas
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Perico = /** @class */ (function (_super) {
    __extends(Perico, _super);
    function Perico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perico.prototype.makeSound = function () {
        console.log("HACE RUIDO");
    };
    return Perico;
}(Animal));
var perico = new Perico();
perico.makeSound();
perico.move();
// genericos
function reverse(list) {
    var reversedList = list.reverse();
    console.log(reversedList);
    return reversedList;
}
reverse([1, 2, 3, 4, 5]);
reverse(["Agustin", "Miguel", "Claudio", "Gisela"]);
