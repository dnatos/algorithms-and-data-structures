class Queue {
  constructor() {
    this.myQueue = [];
  }

  add(data) {
    this.myQueue.unshift(data);
  }

  remove() {
    return this.myQueue.pop();
  }
}
