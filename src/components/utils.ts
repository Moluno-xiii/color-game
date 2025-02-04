import { colorsWithVariants } from "../data";

const getRandomNum = (min: number, max: number) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

const getRandomColorArray = () => {
  return colorsWithVariants[getRandomNum(0, 18)];
};

const getRandomColor = (obj: { variants: string[] }) => {
  return obj.variants[getRandomNum(0, 5)];
};
export { getRandomNum, getRandomColor, getRandomColorArray };
