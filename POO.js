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
var Developer = /** @class */ (function () {
    function Developer(name) {
        this.name = name;
    }
    Developer.prototype.get = function () {
        console.log(this.name);
    };
    Developer.prototype.set = function (name) {
        this.name = name;
    };
    Developer.nombre = "Agustin desde static";
    return Developer;
}());
var Frontend = /** @class */ (function (_super) {
    __extends(Frontend, _super);
    function Frontend(name, stack) {
        var _this = _super.call(this, name) || this;
        _this.stack = stack;
        return _this;
    }
    Frontend.prototype.get = function () {
        console.log("Mi nombre es: ".concat(this.name, " y soy desarrollador: ").concat(this.stack));
    };
    return Frontend;
}(Developer));
var dev = new Developer("Agustin");
var frontDev = new Frontend("Agustin Carbajal", "MERN");
//dev.get()
//dev.set("Claudio")
//dev.get()
console.log(Developer.nombre);
frontDev.get();
