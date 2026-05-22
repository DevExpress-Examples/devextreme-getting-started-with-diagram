$(() => {
  const _diagram = $('#diagram').dxDiagram({
    units: 'in',
    pageOrientation: 'landscape',
    pageColor: '#f4f4f4',
    simpleView: true,
    readOnly: false,
    showGrid: true,
    snapToGrid: true,
    gridSize: 0.125,
    viewUnits: 'in',
    zoomLevel: 1,
    autoZoomMode: 'fitWidth',
    fullScreen: false,
    nodes: {
      dataSource: [
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
      ],
      keyExpr: 'id',
      textExpr: 'text',
      typeExpr: 'type',
    },
    edges: {
      dataSource: [
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
      ],
      keyExpr: 'id',
      fromExpr: 'from',
      toExpr: 'to',
    },
    toolbox: {
      visible: true,
      groups: ['general', 'flowchart', 'orgChart', 'containers', 'custom'],
    },
    contextMenu: {
      enabled: true,
    },
    contextToolbox: {
      enabled: true,
    },
    propertiesPanel: {
      visibility: 'auto',
    },
    historyToolbar: {
      visible: true,
    },
    viewToolbar: {
      visible: true,
    },
    mainToolbar: {
      visible: true,
    },
    onContentReady(e) {
      e.component.fitToContent();
    },
  }).dxDiagram('instance');
});
