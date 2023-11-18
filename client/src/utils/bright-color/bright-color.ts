import { hexToRgb } from "@mui/material";

/**
 * изменяет яркость цвета
 * @param hex изменяемый цвет
 * @param coefficient коэфициент яркости от -1 (чёрный) до 1 (белый)
 * @returns изменённый цвет
 */
const brightColor = (hex: string, coefficient: number): string => {
  let r, g, b: number;
  let temp: string;

  coefficient > 1 ? (coefficient = 1) : (coefficient = coefficient);
  coefficient < -1 ? (coefficient = -1) : (coefficient = coefficient);

  temp = hexToRgb(hex);
  let arr: string[] = temp.split(",").map((item) => item.replace(/[^\d]/g, ""));

  r = parseInt(arr[0]);
  g = parseInt(arr[1]);
  b = parseInt(arr[2]);

  r =
    coefficient > 0
      ? r + Math.round((255 - r) * coefficient)
      : coefficient < 0
      ? r - Math.round(r * Math.abs(coefficient))
      : r;
  g =
    coefficient > 0
      ? g + Math.round((255 - g) * coefficient)
      : coefficient < 0
      ? g - Math.round(g * Math.abs(coefficient))
      : g;
  b =
    coefficient > 0
      ? b + Math.round((255 - b) * coefficient)
      : coefficient < 0
      ? b - Math.round(b * Math.abs(coefficient))
      : b;

  temp = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return temp;
};

export default brightColor;
