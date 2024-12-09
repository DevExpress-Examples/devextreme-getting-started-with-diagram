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
  constructor(service: AppService) {
    this.projectTasks = service.getTasks();
    this.dataSource = new ArrayStore({
      key: 'ID',
      data: service.getTasks(),
    });
  }
}
