class Heap {
  constructor(arr, operator) {
    this.arr = arr
    this.operator = operator;
    this.heap = [];
    for(const n of arr) this.insert(n)
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.size() - 1);
  }

  size() {
    return this.heap.length;
  }

  bubbleUp(index) {
    const elem = this.heap[index];
    const parentIndex = Math.floor((index + 1) / 2) - 1;
    const parent = this.heap[parentIndex];

    if(this.operator(parent, elem)) {
      this.heap[index] = parent;
      this.heap[parentIndex] = elem;
      this.bubbleUp(parentIndex);
    }
  }

  top() {
    return this.heap[0];
  }

  removeTop() {
    if(this.size() === 0) return null;
    if(this.size() === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    const length = this.size();

    if (left <= length && this.operator(this.heap[smallest], this.heap[left])) {
      smallest = left;
    }
    if (right <= length && this.operator(this.heap[smallest],this.heap[right])) {
      smallest = right;
    }
    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.sinkDown(smallest);
    }
  }

  reset() {
    this.heap = [];
    for(const n of this.arr) this.insert(n)
  }
}

export default Heap;