export enum StepType {
  inhale = "Inhale",
  hold = "Hold",
  exhale = "Exhale",
}

type Step = {
  type: StepType;
  duration: number;
};

export type Technique = {
  id: number;
  name: string;
  description: string;
  inhaleTime: number;
  exhaleTime: number;
  steps: Step[];
};
