const listToCytoscapeFormat = function (obj) {
  let nodes = [];
  let edges = [];
  let current = obj.head;
  let counter = 0;
  while (current !== null) {
    nodes.push({ data: { id: counter, label: current.value } });
    if (current.next !== null) {
      edges.push({ data: { source: counter, target: counter + 1, label: current.value + ' -> ' + current.next.value } });
    }
    current = current.next;
    counter++;
  }
  return nodes.concat(edges);
}

export default listToCytoscapeFormat;