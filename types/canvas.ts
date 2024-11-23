export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayerType {
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
  type: LayerType.Rectangle;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type EllipseLayer = {
  type: LayerType.Ellipse;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type PathLayer = {
  type: LayerType.Path;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  points: number[][];
  value?: string;
};

export type TextleLayer = {
  type: LayerType.Text;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type NoteLayer = {
  type: LayerType.Note;
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
        | LayerType.Ellipse
        | LayerType.Path
        | LayerType.Rectangle
        | LayerType.Text
        | LayerType.Note;
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

export type Layer =
  | RectangleLayer
  | EllipseLayer
  | PathLayer
  | TextleLayer
  | NoteLayer;
