class QueueClass{
  constructor() {
    this.queue = []
    this.init()
  }

  init() {
    for(let i=1; i<4; i++) this.enqueue(i)
  }

  enqueue(element) {
    this.queue.push(element)
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    return this.queue.shift()
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.queue[0]
  }

  last() {
    if (this.isEmpty()) {
      return null
    }
    return this.queue[this.queue.length - 1]
  }

  isEmpty() {
    return this.queue.length === 0
  }

  reset() {
    this.queue = []
    this.init()
  }
}

export default QueueClass;