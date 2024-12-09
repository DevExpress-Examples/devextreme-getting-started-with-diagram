<template>
  <DxDiagram :simple-view="true" page-color="#f0f0f0">
    <DxNodes :data-source="dataSource" :key-expr="'ID'" :text-expr="'Task_Name'" :parent-key-expr="'Parent_ID'" />
    <DxDefaultItemProperties text-style="font-family: 'Courier New', monospace;" />
    <DxPropertiesPanel>
      <DxTab>
        <DxGroup title="Object Properties" :commands="['lineStyle', 'lineColor', 'fillColor']" />
      </DxTab>
    </DxPropertiesPanel>
    <DxToolbox :show-search="false">
      <DxGroup :category="'general'" :shapes="['text', 'rectangle']" />
    </DxToolbox>
  </DxDiagram>
</template>

<script setup>
import 'devexpress-diagram/dist/dx-diagram.min.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxDiagram, { DxNodes, DxDefaultItemProperties, DxToolbox, DxPropertiesPanel, DxTab, DxGroup } from 'devextreme-vue/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

const dataSource = new ArrayStore({
  key: 'ID',
  data: service.getTasks(),
});

</script>