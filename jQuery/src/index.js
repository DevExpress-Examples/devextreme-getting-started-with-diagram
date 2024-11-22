$(function () {
  $("#diagram").dxDiagram({
    height: 400,
    simpleView: true,
    customShapes: projectTasks.map(
      (obj) => ({
        type: `task${obj.ID}`,
        baseType: 'rectangle',
        defaultWidth: 2.3,
        defaultHeight: 1,
      }),
    ),
    customShapeTemplate(item, $container) {
      const task = item.dataItem;
      const $content = $(`${"<svg class='template'>"
        + "<text class='template-name' x='50%' y='40%'>"}${task.Task_Name}</text>`
        + `<text x='50%' y='60%'>${task.Description}</text>`
        + '</svg >');
      $container.append($content);
    },
    onContentReady() {
      let randomColor = randomLightColor();
      let style = document.createElement('style');
      style.innerHTML = `.dxdi-canvas .shape rect { fill: ${randomColor}; }`;
      document.head.appendChild(style);
    },
    zoomLevel: {
      value: 0.75,
      items: [0.5, 0.75, 1, 1.5]
    },
    toolbox: {
      visibility: 'collapsed',
    },
    pageColor: "#f0f0f0",
    nodes: {
      dataSource: new DevExpress.data.ArrayStore({
        key: 'ID',
        data: projectTasks,
      }),
      keyExpr: "ID",
      typeExpr(obj) { return `task${obj.ID}`; },
      parentKeyExpr: "Parent_ID",

    },
    propertiesPanel: {
      tabs: [
        {
          groups: [{ title: 'Object Properties', commands: ['lineStyle', 'lineColor', 'fillColor'] }],
        },
      ],
    },
  });


});
let randomLightColor = function () {
  let r = Math.floor(Math.random() * 128) + 128;
  let g = Math.floor(Math.random() * 128) + 128;
  let b = Math.floor(Math.random() * 128) + 128;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
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
