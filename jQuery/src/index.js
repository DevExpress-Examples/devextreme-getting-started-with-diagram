$(function () {
  $("#diagram").dxDiagram({
    nodes: {
      dataSource: new DevExpress.data.ArrayStore({
        key: 'ID',
        data: projectTasks,
      }),
      keyExpr: "ID",
      parentKeyExpr: "Parent_ID",
      textExpr: "Task_Name",
    },
    simpleView: true,
    pageColor: "#f0f0f0",
    defaultItemProperties: {
      textStyle: "font-family: 'Courier New', monospace;"
    },
    propertiesPanel: {
      tabs: [
        {
          groups: [{ title: 'Object Properties', commands: ['lineStyle', 'lineColor', 'fillColor'] }],
        },
      ],
    },
    toolbox: {
      showSearch: false,
      groups: [{
        category: 'general',
        shapes: ['text', 'rectangle'],
      }]
    },
  });
});