// Mediador
interface Mediator {
    sendMessage(message: string, colleague: Colleague): void;
  }
  
  // Compañero
  abstract class Colleague {
    protected mediator: Mediator;
  
    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }
  
    abstract receiveMessage(message: string): void;
  }
  
  // Compañero Concreto 1
  class ConcreteColleague1 extends Colleague {
    public send(message: string): void {
      console.log('Colleague1 sends message:', message);
      this.mediator.sendMessage(message, this);
    }
  
    public receiveMessage(message: string): void {
      console.log('Colleague1 receives message:', message);
    }
  }
  
  // Compañero Concreto 2
  class ConcreteColleague2 extends Colleague {
    public send(message: string): void {
      console.log('Colleague2 sends message:', message);
      this.mediator.sendMessage(message, this);
    }
  
    public receiveMessage(message: string): void {
      console.log('Colleague2 receives message:', message);
    }
  }
  
  // Mediador Concreto
  class ConcreteMediator implements Mediator {
    private colleague1: ConcreteColleague1;
    private colleague2: ConcreteColleague2;
  
    constructor(colleague1: ConcreteColleague1, colleague2: ConcreteColleague2) {
      this.colleague1 = colleague1;
      this.colleague2 = colleague2;
    }
  
    public sendMessage(message: string, colleague: Colleague): void {
      if (colleague === this.colleague1) {
        this.colleague2.receiveMessage(message);
      } else if (colleague === this.colleague2) {
        this.colleague1.receiveMessage(message);
      }
    }
  }
  
  // Uso del patrón Mediator
  let colleague1 = new ConcreteColleague1(null as any); // Inicialmente sin mediador
  let colleague2 = new ConcreteColleague2(null as any); // Inicialmente sin mediador
  
  // Creamos el mediador
  const mediator = new ConcreteMediator(colleague1, colleague2);
  
  // Establecemos el mediador en los compañeros
  colleague1 = new ConcreteColleague1(mediator);
  colleague2 = new ConcreteColleague2(mediator);
  
  // Ejemplo de comunicación
  colleague1.send('¡Hola, Colleague2!');
  colleague2.send('¡Hola, Colleague1!');
  