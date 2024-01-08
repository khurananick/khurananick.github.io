class StackClass {
  constructor() {
    this.stack = []
    this.init()
  }

  init() {
    for(let i=1; i<4; i++) this.push(i)
  }

  push(element) {
    this.stack.push(element)
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }
    return this.stack.pop()
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return this.stack.length === 0
  }

  reset() {
    this.stack = []
    this.init()
  }
}

export default StackClass;