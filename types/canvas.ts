export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayredType {
  Rectangle,
  Path,
  Ellipse,
  Text,
  Note,
}

export type RectangleLayer = {
  type: LayredType.Rectangle;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type EllipseLayer = {
  type: LayredType.Ellipse;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type PathLayer = {
  type: LayredType.Path;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  points: number[][];
  value?: string;
};

export type TextleLayer = {
  type: LayredType.Text;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type NoteLayer = {
  type: LayredType.Note;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export enum CanvasMode {
  None,
  Pressing,
  Translating,
  SelectingNet,
  inserting,
  Pencil,
  Resizing,
}

export type CanvasState =
  | {
      Mode: CanvasMode.None;
    }
  | {
      Mode: CanvasMode.SelectingNet;
    }
  | {
      Mode: CanvasMode.inserting;
    }
  | {
      Mode: CanvasMode.Pressing;
    }
  | {
      Mode: CanvasMode.Translating;
    }
  | {
      Mode: CanvasMode.Pencil;
    }
  | {
      Mode: CanvasMode.Resizing;
    };
