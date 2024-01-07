import Cytoscape from 'cytoscape';
import Dagre from 'cytoscape-dagre';

// doesn't load in jest as from 'react-cytoscapejs' so we have to import it directly
import CytoscapeComponent from '../../node_modules/react-cytoscapejs/dist/react-cytoscape';
Cytoscape.use(Dagre);

const GraphComponent = (props) => {
  const elements = props.elements;
  return (
    <CytoscapeComponent
      elements={elements}
      layout={{ name: "dagre" }}
      style={ { width: '100%', height: '400px' } }
      minZoom={1}
      maxZoom={1}
    />
  );
}

export default GraphComponent;