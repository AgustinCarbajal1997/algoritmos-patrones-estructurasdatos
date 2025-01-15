// Definimos la interfaz del Mediador
interface Mediator {
  sendMessage(message: string, sender: User): void;
  addUser(user: User): void;
}

// Clase concreta que implementa el Mediador
class ChatRoom implements Mediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    for (const user of this.users) {
      if (user !== sender) {
        user.receiveMessage(message, sender);
      }
    }
  }
}

// Clase Usuario
class User {
  constructor(private name: string, private mediator: Mediator) {}

  sendMessage(message: string): void {
    console.log(`${this.name} envía: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receiveMessage(message: string, sender: User): void {
    console.log(`${this.name} recibe de ${sender.getName()}: ${message}`);
  }

  getName(): string {
    return this.name;
  }
}

// Uso del patrón Mediador
const chatRoom = new ChatRoom();

const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);
const user3 = new User("Charlie", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.sendMessage("Hola a todos!");
user2.sendMessage("Hola Alice!");
user3.sendMessage("¿Cómo están?");