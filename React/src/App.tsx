import { useRef } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-diagram/dist/dx-diagram.min.css';
import Diagram, {
  Nodes,
  Edges,
  Toolbox,
  Group,
  ContextMenu,
  ContextToolbox,
  PropertiesPanel,
  HistoryToolbar,
  ViewToolbar,
  MainToolbar,
} from 'devextreme-react/diagram';
import type { DiagramNode, DiagramEdge } from './types';

const nodes: DiagramNode[] = [
  {
    id: '1',
    text: 'Development',
    type: 'rectangle',
  },
  {
    id: '2',
    text: 'Testing',
    type: 'rectangle',
  },
  {
    id: '3',
    text: 'Deployment',
    type: 'rectangle',
  },
];

const edges: DiagramEdge[] = [
  {
    id: '1',
    from: '1',
    to: '2',
  },
  {
    id: '2',
    from: '2',
    to: '3',
  },
];

function App(): JSX.Element {
  const diagramRef = useRef<any>(null);

  return (
    <div id="app-container">
      <Diagram
        id="diagram"
        ref={diagramRef}
        units="in"
        simpleView={true}
        readOnly={false}
        showGrid={true}
        snapToGrid={true}
        gridSize={0.125}
        viewUnits="in"
        zoomLevel={1}
        autoZoomMode="fitWidth"
        fullScreen={false}
        pageOrientation="landscape"
        pageColor="#f4f4f4"
      >
        <Nodes
          dataSource={nodes}
          keyExpr="id"
          textExpr="text"
          typeExpr="type"
        />
        <Edges
          dataSource={edges}
          keyExpr="id"
          fromExpr="from"
          toExpr="to"
        />
        <Toolbox>
          <Group category="general" />
          <Group category="flowchart" />
          <Group category="orgChart" />
          <Group category="containers" />
          <Group category="custom" />
        </Toolbox>
        <ContextMenu enabled={true} />
        <ContextToolbox enabled={true} />
        <PropertiesPanel visibility="auto" />
        <HistoryToolbar visible={true} />
        <ViewToolbar visible={true} />
        <MainToolbar visible={true} />
      </Diagram>
    </div>
  );
}

export default App;
