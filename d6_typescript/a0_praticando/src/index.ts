type RGBConvert = (R: number, G: number, B: number) => string;

const clamp = (value: number): number => {
  return Math.max(0, Math.min(255, Math.round(value)));
};

const rgb: RGBConvert = (R, G, B) => {
  const r = clamp(R).toString(16).padStart(2, "0");
  const g = clamp(G).toString(16).padStart(2, "0");
  const b = clamp(B).toString(16).padStart(2, "0");
  return (r + g + b).toUpperCase();
};

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));      
console.log(rgb(148, 0, 211));  