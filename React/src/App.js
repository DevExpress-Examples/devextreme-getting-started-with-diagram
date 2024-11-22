import 'devexpress-diagram/dist/dx-diagram.min.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Diagram, { CustomShape, Nodes, DefaultItemProperties, ZoomLevel, Toolbox, PropertiesPanel, Tab, Group } from 'devextreme-react/diagram';
const zoomItems = [0.5, 0.75, 1, 1.5];
const itemTypeExpr = (obj) => {
  return `task${obj.ID}`;
};

const randomLightColor = () => {
  let r = Math.floor(Math.random() * 128) + 128;
  let g = Math.floor(Math.random() * 128) + 128;
  let b = Math.floor(Math.random() * 128) + 128;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const customFill = () => {
  let randomColor = randomLightColor();
  let style = document.createElement('style');
  style.innerHTML = `.dxdi-canvas .shape rect { fill: ${randomColor}; }`;
  document.head.appendChild(style);
};

const projectTasks = [
  {
    "ID": 1,
    "Task_Name": "Project Planning",
    "Description": "Define project scope and goals",
  },
  {
    "ID": 2,
    "Parent_ID": 1,
    "Task_Name": "Requirement Analysis",
    "Description": "Gather and document requirements",
  },
  {
    "ID": 3,
    "Parent_ID": 1,
    "Task_Name": "Resource Allocation",
    "Description": "Assign team and resources",
  },
  {
    "ID": 4,
    "Parent_ID": 2,
    "Task_Name": "Design Specifications",
    "Description": "Outline system design",
  },
  {
    "ID": 5,
    "Parent_ID": 3,
    "Task_Name": "Task Scheduling",
    "Description": "Develop project timeline",
  },
  {
    "ID": 6,
    "Parent_ID": 2,
    "Task_Name": "Risk Assessment",
    "Description": "Identify potential risks",
  },
  {
    "ID": 7,
    "Parent_ID": 1,
    "Task_Name": "Kick-off Meeting",
    "Description": "Launch project with stakeholders",
  }
];
const customShapeRender = (data) => {
  return (
    <svg>
      <text className="template-name" x="50%" y="40%">
        {data.dataItem.Task_Name}
      </text>
      <text x="50%" y="60%">
        {data.dataItem.Description}
      </text>
    </svg>
  );
}

function App() {
  return (
    <Diagram
      height={400}
      customShapeRender={customShapeRender}
      simpleView={true}
      onContentReady={customFill}
      pageColor="#f0f0f0"
    >
      {projectTasks.map((obj, index) => (
        <CustomShape
          type={`task${obj.ID}`}
          baseType="rectangle"
          defaultWidth={2.3}
          defaultHeight={1}
          key={index}
        />
      ))}
      <Nodes
        dataSource={projectTasks}
        keyExpr="ID"
        typeExpr={itemTypeExpr}
        parentKeyExpr="Parent_ID"
      />
      <ZoomLevel
        defaultValue={0.75}
        items={zoomItems}
      />
      <Toolbox visibility="collapsed" />
      <PropertiesPanel visibility="visible">
        <Tab>
          <Group
            title="Object Properties"
            commands={['lineStyle', 'lineColor', 'fillColor']}
          />
        </Tab>
      </PropertiesPanel>
    </Diagram>
  );
};

export default App;
