const isChanon = (str) => {
  if (typeof str !== 'string') {
    return false;
  };

  return str.trim().toLowerCase() === 'chanon';
} 

module.exports = isChanon;
