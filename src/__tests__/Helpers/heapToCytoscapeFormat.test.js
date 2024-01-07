import heapToCytoScapeFormat from "../../Helpers/heapToCytoScapeFormat";
import HeapClass from "../../Helpers/HeapClass";

test("converts heap to cytoscape format", () => {
  const heap = new HeapClass([1, 2, 3, 4, 5], (a, b) => a > b);
  const cyto = heapToCytoScapeFormat(heap);
  expect(cyto).toEqual([
    { data: { id: 0, label: 1 } },
    { data: { id: 1, label: 2 } },
    { data: { id: 2, label: 3 } },
    { data: { id: 3, label: 4 } },
    { data: { id: 4, label: 5 } },
    { data: { source: 0, target: 1, label: "1 -> 2" } },
    { data: { source: 0, target: 2, label: "1 -> 3" } },
    { data: { source: 1, target: 3, label: "2 -> 4" } },
    { data: { source: 1, target: 4, label: "2 -> 5" } },
  ]);
});

test("converts heap to cytoscape format correctly", () => {
  const heap = new HeapClass([1, 2, 3, 4, 5], (a, b) => a > b);
  const cyto = heapToCytoScapeFormat(heap);
  expect(cyto).not.toEqual([
    { data: { id: 0, label: 1 } },
    { data: { id: 2, label: 3 } },
    { data: { id: 3, label: 4 } },
    { data: { id: 4, label: 5 } },
    { data: { source: 0, target: 1, label: "1 -> 2" } },
    { data: { source: 0, target: 2, label: "1 -> 3" } },
    { data: { source: 1, target: 4, label: "2 -> 5" } },
  ]);
});
