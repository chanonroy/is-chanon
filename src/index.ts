/**
 * Determine whether you are spelling 'Chanon' correctly
 */
const isChanon = (str: string) => {
  if (typeof str !== "string") {
    return false;
  }
  return str.trim().toLowerCase() === "chanon";
};

export default isChanon;
