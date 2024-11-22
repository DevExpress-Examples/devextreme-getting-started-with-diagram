import { Component } from '@angular/core';
import { AppService, Task } from './app.service';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})

export class AppComponent {
  projectTasks: Task[];
  dataSource: ArrayStore;
  zoomItems: number[] = [0.5, 0.75, 1, 1.5];
  constructor(service: AppService) {
    this.projectTasks = service.getTasks();
    this.dataSource = new ArrayStore({
      key: 'ID',
      data: service.getTasks(),
    });
  }
  itemTypeExpr(obj: Task) {
    return `task${obj.ID}`;
  }
  randomLightColor() {
    let r = Math.floor(Math.random() * 128) + 128;
    let g = Math.floor(Math.random() * 128) + 128;
    let b = Math.floor(Math.random() * 128) + 128;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  customFill() {
    let randomColor = this.randomLightColor();
      let style = document.createElement('style');
      style.innerHTML = `.dxdi-canvas .shape rect { fill: ${randomColor}; }`;
      document.head.appendChild(style);
  }
}
