export const isMobile = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

export function isAlpha(c: string) {
  return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
}
