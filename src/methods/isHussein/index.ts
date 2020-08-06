/**
 * Determine whether you are spelling 'Chanon' correctly
 */
const isHussein = (str: string) => {
    if (typeof str !== "string") {
      return false;
    }
    return str.trim().toLowerCase() === "hussein";
  };

export default isHussein;