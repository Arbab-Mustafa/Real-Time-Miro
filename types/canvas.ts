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

export type Point = {
  x: number;
  y: number;
};

export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export enum Side {
  Top = 1,
  Right = 2,
  Bottom = 4,
  Left = 8,
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
  Inserting,
  Pencil,
  Resizing,
}

export type CanvasState =
  | {
      Mode: CanvasMode.None;
    }
  | {
      Mode: CanvasMode.SelectingNet;
      Origin: Point;
      Current?: Point;
    }
  | {
      Mode: CanvasMode.Inserting;
      LayerType:
        | LayredType.Ellipse
        | LayredType.Path
        | LayredType.Rectangle
        | LayredType.Text
        | LayredType.Note;
    }
  | {
      Mode: CanvasMode.Pressing;
      Origin: Point;
    }
  | {
      Mode: CanvasMode.Translating;
      Origin: Point;
    }
  | {
      Mode: CanvasMode.Pencil;
    }
  | {
      Mode: CanvasMode.Resizing;
      InitialBounce: XYWH;
      Cornor: Side;
    };
