import HeapClass from '../../Helpers/HeapClass';

test('creates min heap successfully', () => {
  const minHeap = new HeapClass([1,2,3,4,5], (a,b) => a > b);
  expect(minHeap.top()).toBe(1);
});

test('removes from min heap successfully', () => {
  const minHeap = new HeapClass([1,2,3,4,5], (a,b) => a > b);
  minHeap.removeTop()
  expect(minHeap.top()).toBe(2);
});

test('creates max heap successfully', () => {
  const minHeap = new HeapClass([1,2,3,4,5], (a,b) => a < b);
  expect(minHeap.top()).toBe(5);
});

test('removes from max heap successfully', () => {
  const minHeap = new HeapClass([1,2,3,4,5], (a,b) => a < b);
  minHeap.removeTop()
  expect(minHeap.top()).toBe(4);
});