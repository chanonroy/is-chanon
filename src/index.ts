const isChanon = (str: string) => {
  if (typeof str !== "string") {
    return false;
  }
  return str.trim().toLowerCase() === "chanon";
};

export default isChanon;
