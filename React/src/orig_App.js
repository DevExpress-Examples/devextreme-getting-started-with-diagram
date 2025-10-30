import React from "react";
import 'devexpress-diagram/dist/dx-diagram.min.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import ArrayStore from "devextreme/data/array_store";
import Diagram, { Nodes, DefaultItemProperties, Toolbox, PropertiesPanel, Tab, Group } from 'devextreme-react/diagram';
import service from './data.js';

const dataSource = new ArrayStore({
  key: 'ID',
  data: service.getTasks(),
});
const objectCommands = ['lineStyle', 'lineColor', 'fillColor'];
const toolboxShapes = ['text', 'rectangle'];
function App() {
  return (
    <Diagram
      simpleView={true}
      pageColor="#f0f0f0"
    >
      <Nodes
        dataSource={dataSource}
        keyExpr="ID"
        textExpr="Task_Name"
        parentKeyExpr="Parent_ID"
      />
      <DefaultItemProperties
        textStyle="font-family: 'Courier New', monospace;"
      />
      <PropertiesPanel>
        <Tab>
          <Group
            title="Object Properties"
            commands={objectCommands}
          />
        </Tab>
      </PropertiesPanel>
      <Toolbox showSearch={false} >
        <Group
          category="general"
          shapes={toolboxShapes}
        />
      </Toolbox>
    </Diagram>
  );
};

export default App;
