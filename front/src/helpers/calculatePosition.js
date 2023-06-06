export function calculatePosition(i) {
  const row = Math.floor(i / 5) * 2 + 2;
  const col = (i < 5 ? i : 9 - i) + 1;
  return { row, col };
}
