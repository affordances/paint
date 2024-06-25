import { settingsConfig } from "./constants";

export const transformSliderValue = (
  minNew: number,
  maxNew: number,
  value: number
): number => {
  return (
    minNew +
    ((value - settingsConfig.sliderMin) /
      (settingsConfig.sliderMax - settingsConfig.sliderMin)) *
      (maxNew - minNew)
  );
};

export const reverseTransformSliderValue = (
  minNew: number,
  maxNew: number,
  value: number
): number =>
  settingsConfig.sliderMin +
  ((value - minNew) / (maxNew - minNew)) *
    (settingsConfig.sliderMax - settingsConfig.sliderMin);
