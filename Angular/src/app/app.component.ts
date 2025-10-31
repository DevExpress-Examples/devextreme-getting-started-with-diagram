import { Component } from '@angular/core';
import { DiagramNode, DiagramEdge } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nodes: DiagramNode[] = [
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

  edges: DiagramEdge[] = [
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

  onContentReady(): void {
    // Diagram is ready
  }
}
