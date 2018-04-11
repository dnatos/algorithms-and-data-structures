class Stack {
  constructor() {
    this.myStack = [];
  }

  push(data) {
    this.myStack.push(data);
  }

  pop() {
    return this.myStack.pop();
  }

  last() {
    return this.myStack[this.myStack.length - 1];
  }
}
