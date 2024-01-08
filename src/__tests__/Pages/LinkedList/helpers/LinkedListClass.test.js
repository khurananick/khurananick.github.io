import LinkedListClass from '../../../../Pages/LinkedList/helpers/LinkedListClass';

test('creates linked list successfully', () => {
  const linkedList = new LinkedListClass();
  expect(linkedList.head).not.toBe(null);
});

test('adds to linked list successfully', () => {
  const linkedList = new LinkedListClass();
  linkedList.push(1);
  expect(linkedList.tail.value).toBe(1);
});

test('removes from linked list successfully', () => {
  const linkedList = new LinkedListClass();
  linkedList.push(4);
  linkedList.push(5);
  linkedList.remove(2);
  expect(linkedList.tail.value).toBe(5);

  linkedList.push(7);
  linkedList.push(8);
  linkedList.remove(linkedList.length-1);
  expect(linkedList.tail.value).toBe(7);

  linkedList.push(9);
  linkedList.push(10);
  linkedList.remove(0);
  expect(linkedList.head.value).toBe(2);
});