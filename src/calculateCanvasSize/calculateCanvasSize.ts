export default function calculateCanvasSize(length: string, width: string) {
  if (isNaN(Number(length)) || isNaN(Number(width))) {
    throw new Error("Invalid input: Length and width must be numbers");
  }
  return parseInt(length) * parseInt(width);
}
