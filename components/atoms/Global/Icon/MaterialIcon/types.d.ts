interface IMaterialIconOptions {
  fill?: boolean;
  weight?: number;
  grade?: number;
  opticalSize?: number;
}

interface IMaterialIcon {
  icon: string;
  options?: IMaterialIconOptions;
}
