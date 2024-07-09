import { StepType, Technique } from "../../types";

export const techniques: Technique[] = [
  {
    id: 1,
    name: "Box Breathing",
    description:
      "A technique involving equal counts for inhaling, holding, exhaling, and holding again, typically 4 seconds each.",
    inhaleTime: 4,
    exhaleTime: 4,
    steps: [
      { type: StepType.inhale, duration: 4 },
      { type: StepType.hold, duration: 4 },
      { type: StepType.exhale, duration: 4 },
      { type: StepType.hold, duration: 4 },
    ],
  },
  {
    id: 2,
    name: "Pranayama Breathing",
    description:
      "A calming technique where you inhale through your nose for 4 seconds, hold for 7 seconds, and exhale through your mouth for 8 seconds.",
    inhaleTime: 4,
    exhaleTime: 8,
    steps: [
      { type: StepType.inhale, duration: 4 },
      { type: StepType.hold, duration: 7 },
      { type: StepType.exhale, duration: 8 },
    ],
  },
  {
    id: 3,
    name: "5-5-5 Breathing",
    description:
      "A simple method where you breathe in, hold, and breathe out, each for 5 seconds.",
    inhaleTime: 5,
    exhaleTime: 5,
    steps: [
      { type: StepType.inhale, duration: 5 },
      { type: StepType.hold, duration: 5 },
      { type: StepType.exhale, duration: 5 },
    ],
  },
];

export const meditations = [
  {
    id: 1,
    name: "Beach Sounds",
    thumbnail: "beach",
  },
  {
    id: 2,
    name: "Rain Sounds",
    thumbnail: "rain",
  },
  {
    id: 3,
    name: "Water Fountain",
    thumbnail: "waterFountain",
  },
];

export const imageMap: Record<string, any> = {
  beach: require("../images/beach.jpg"),
  rain: require("../images/rain.jpg"),
  waterFountain: require("../images/water-fountain.jpg"),
};
