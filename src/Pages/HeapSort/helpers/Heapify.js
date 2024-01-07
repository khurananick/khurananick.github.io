import HeapClass from '../../../Helpers/HeapClass'
import heapToCytoScapeFormat from '../../../Helpers/heapToCytoScapeFormat';
import shuffleArray from '../../../Helpers/shuffleArray'

class Heapify {
  init() {
    this.minHeap = new HeapClass([], (a, b) => a > b);
    this.sorted = []
    this.canceled = false;
    this.array = null;
    this.callback = null;
    this.finalCallback = null;
    this.timeout = 1000;
    this.timeoutFn = null;
  }

  addToHeap() {
    if(this.canceled) return;

    if(this.array.length === 0) {
      this.removeFromHeap();
      return;
    }

    const item = this.array.pop();
    this.minHeap.insert(item);
    const elements = heapToCytoScapeFormat(this.minHeap);
    this.callback(this.array, elements);

    this.timeoutFn = setTimeout(() => {
      this.addToHeap();
    }, this.timeout);
  }

  removeFromHeap() {
    if(this.canceled) return;

    if(!this.minHeap.size()) {
      this.finalCallback(this.sorted);
      return;
    }

    this.sorted.push(this.minHeap.removeTop());
    const elements = heapToCytoScapeFormat(this.minHeap);
    this.callback(this.sorted, elements);

    this.timeoutFn = setTimeout(() => {
      this.removeFromHeap();
    }, this.timeout);
  }

  start(array, callback, finalCallback) {
    this.canceled = false;

    while(this.sorted.length) this.sorted.pop()

    this.array = shuffleArray(array);
    this.callback = callback;
    this.finalCallback = finalCallback;
    this.addToHeap();
  }

  cancel() {
    clearTimeout(this.timeoutFn);
    this.canceled = true;
  }
}

export default Heapify;