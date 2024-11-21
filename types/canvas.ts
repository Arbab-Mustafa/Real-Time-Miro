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
