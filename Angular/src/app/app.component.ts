import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DxDiagramModule } from 'devextreme-angular/ui/diagram';
import { DiagramNode, DiagramEdge } from './app.types';

@Component({
  selector: 'app-root',
  imports: [DxDiagramModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
