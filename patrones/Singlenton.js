var Lonely = /** @class */ (function () {
    function Lonely() {
    }
    Lonely.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Lonely();
        return this.instance;
    };
    return Lonely;
}());
var nuevaClase = Lonely.getInstance();
var nuevaClase2 = Lonely.getInstance();
console.log(nuevaClase === nuevaClase2);
var SingletonPattern = /** @class */ (function () {
    function SingletonPattern() {
    }
    SingletonPattern.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new SingletonPattern();
        return this.instance;
    };
    return SingletonPattern;
}());
console.log(SingletonPattern.getInstance() === SingletonPattern.getInstance());
