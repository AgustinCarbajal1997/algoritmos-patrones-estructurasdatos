// Clase concreta que implementa el Mediador
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
        this.users = [];
    }
    ChatRoom.prototype.addUser = function (user) {
        this.users.push(user);
    };
    ChatRoom.prototype.sendMessage = function (message, sender) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user !== sender) {
                user.receiveMessage(message, sender);
            }
        }
    };
    return ChatRoom;
}());
// Clase Usuario
var User = /** @class */ (function () {
    function User(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    User.prototype.sendMessage = function (message) {
        console.log("".concat(this.name, " env\u00EDa: ").concat(message));
        this.mediator.sendMessage(message, this);
    };
    User.prototype.receiveMessage = function (message, sender) {
        console.log("".concat(this.name, " recibe de ").concat(sender.getName(), ": ").concat(message));
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
// Uso del patrón Mediador
var chatRoom = new ChatRoom();
var user1 = new User("Alice", chatRoom);
var user2 = new User("Bob", chatRoom);
var user3 = new User("Charlie", chatRoom);
chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);
user1.sendMessage("Hola a todos!");
user2.sendMessage("Hola Alice!");
user3.sendMessage("¿Cómo están?");
