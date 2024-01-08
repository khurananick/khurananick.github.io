import Cytoscape from 'cytoscape';
import Dagre from 'cytoscape-dagre';
import Popper from 'cytoscape-popper';

// doesn't load in jest as from 'react-cytoscapejs' so we have to import it directly
import CytoscapeComponent from '../../node_modules/react-cytoscapejs/dist/react-cytoscape';

const GraphComponent = (props) => {
  const elements = props.elements;

  if(props.type === "popper") {
    // Cytoscape.use(Popper);
  }
  else {
    Cytoscape.use(Dagre);
  }

  return (
    <CytoscapeComponent
      elements={elements}
      layout={{ name: props.layout || "dagre" }}
      style={ { width: '100%', height: '400px' } }
      minZoom={1}
      maxZoom={1}
      cy={props.callback}
    />
  );
}

export default GraphComponent;