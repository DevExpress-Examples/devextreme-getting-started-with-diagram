export interface DiagramNode {
  id: string;
  text: string;
  type?: string;
}

export interface DiagramEdge {
  id: string;
  from: string;
  to: string;
}
