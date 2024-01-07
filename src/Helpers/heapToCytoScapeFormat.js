const heapToCytoScapeFormat = function (obj) {
  let nodes = [];
  let edges = [];
  for (let i = 0; i < obj.heap.length; i++) {
    nodes.push({ data: { id: i, label: obj.heap[i] } });
    if (i > 0) {
      let parentIndex = Math.floor((i + 1) / 2) - 1;
      edges.push({ data: { source: parentIndex, target: i, label: obj.heap[parentIndex] + ' -> ' + obj.heap[i] } });
    }
  }
  return nodes.concat(edges);
}

export default heapToCytoScapeFormat;