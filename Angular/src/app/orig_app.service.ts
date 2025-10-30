import { Injectable } from '@angular/core';

export class Task {
  "ID": number;
  "Parent_ID"?: number;
  "Task_Name": string;
  "Description": string;
}

const projectTasks: Task[] = [
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

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getTasks() {
    return projectTasks;
  }
}
