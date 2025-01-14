//https://medium.com/@bohndez.dev/estructuras-de-datos-linked-list-en-javascript-e84f3c50a4c4

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  unshift(value) {
    const newNode = new Node(value, this.head, null);

    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode; // si no existe head y tail, el nodo que creamos sera head y tail
    }
    this.head = newNode;
  }

  push(value) {
    const newNode = new Node(value, null, this.tail);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode; // si no existe head y tail, el nodo que creamos sera head y tail
    }

    this.tail = newNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const oldHeadeValue = this.head.value;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return oldHeadeValue;
  }

  pop() {
    if (!this.tail) {
      return null;
    }

    const oldTailValue = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return oldTailValue;
  }
}

const myList = new DoublyLinkedList();
console.log(myList);

myList.unshift("Manzana");
myList.unshift("Platano");
myList.push("melón");
myList.push("sandía");
console.log(myList);

console.log(myList);
console.log(myList.shift());
console.log(myList);
console.log(myList.pop());
console.log(myList);
