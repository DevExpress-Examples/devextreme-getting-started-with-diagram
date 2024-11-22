<template>
<DxDiagram
  :height="400"
  custom-shape-template="customShapeTemplate"
  :simple-view="true"
  @content-ready="customFill"
  page-color="#f0f0f0"
>
  <DxCustomShape
    v-for="obj in projectTasks"
    :type="'task' + obj.ID"
    :base-type="'rectangle'"
    :default-width="2.3"
    :default-height="1"
    :key="obj.ID"
  />
  <template #customShapeTemplate="{ data }">
    <svg>
      <text class="template-name" x="50%" y="40%">
        {{ data.dataItem.Task_Name }}
      </text>
      <text x="50%" y="60%">
        {{ data.dataItem.Description }}
      </text>
    </svg>
  </template>
  <DxNodes
    :data-source="projectTasks"
    :key-expr="'ID'"
    :type-expr="itemTypeExpr"
    :parent-key-expr="'Parent_ID'"
  />
  <DxZoomLevel
    :value="0.75"
    :items="zoomItems"
  />
  <DxToolbox visibility="collapsed" />
  <DxPropertiesPanel visibility="visible">
    <DxTab>
      <DxGroup
        title="Object Properties"
        :commands="['lineStyle', 'lineColor', 'fillColor']"
      />
    </DxTab>
  </DxPropertiesPanel>
</DxDiagram>
</template>

<script setup>
import { ref } from 'vue';
import 'devexpress-diagram/dist/dx-diagram.min.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxDiagram, { DxCustomShape, DxNodes, DxDefaultItemProperties, DxZoomLevel, DxToolbox, DxPropertiesPanel, DxTab, DxGroup } from 'devextreme-vue/diagram';

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

</script>

<style lang="css" scoped>
.template-name {
  font-weight: bold;
  font-size: 16px;
}
</style>