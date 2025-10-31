<script setup lang="ts">
import { DxDiagram, DxNodes, DxEdges, DxToolbox, DxGroup, DxContextMenu, DxContextToolbox, DxPropertiesPanel, DxHistoryToolbar, DxViewToolbar, DxMainToolbar } from 'devextreme-vue/diagram';
import type { DiagramNode, DiagramEdge } from '../types';

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
</script>

<template>
  <div id="app-container">
    <DxDiagram
      id="diagram"
      units="in"
      :simple-view="true"
      :read-only="false"
      :show-grid="true"
      :snap-to-grid="true"
      :grid-size="0.125"
      view-units="in"
      :zoom-level="1"
      auto-zoom-mode="fitWidth"
      :full-screen="false"
      page-orientation="landscape"
      page-color="#f4f4f4"
    >
      <DxNodes
        :data-source="nodes"
        key-expr="id"
        text-expr="text"
        type-expr="type"
      />
      <DxEdges
        :data-source="edges"
        key-expr="id"
        from-expr="from"
        to-expr="to"
      />
      <DxToolbox>
        <DxGroup category="general"/>
        <DxGroup category="flowchart"/>
        <DxGroup category="orgChart"/>
        <DxGroup category="containers"/>
        <DxGroup category="custom"/>
      </DxToolbox>
      <DxContextMenu :enabled="true"/>
      <DxContextToolbox :enabled="true"/>
      <DxPropertiesPanel visibility="auto"/>
      <DxHistoryToolbar :visible="true"/>
      <DxViewToolbar :visible="true"/>
      <DxMainToolbar :visible="true"/>
    </DxDiagram>
  </div>
</template>

<style scoped>
#app-container {
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 20px;
}

#diagram {
  width: 100%;
  height: calc(100vh - 40px);
  border: 1px solid #ddd;
}
</style>
