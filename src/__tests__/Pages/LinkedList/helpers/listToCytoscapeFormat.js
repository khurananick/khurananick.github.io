import listToCytoscapeFormat from "../../../../Pages/LinkedList/helpers/listToCytoscapeFormat";
import LinkedListClass from "../../../../Pages/LinkedList/helpers/LinkedListClass";

it('converts linked list to cytoscape format', () => {
  const linkedList = new LinkedListClass();
  const cyto = listToCytoscapeFormat(linkedList);
  expect(cyto).toEqual([
    { data: { id: 0, label: 1 } },
    { data: { id: 1, label: 2 } },
    { data: { id: 2, label: 3 } },
    { data: { source: 0, target: 1, label: "1 -> 2" } },
    { data: { source: 1, target: 2, label: "2 -> 3" } }
  ]);
});