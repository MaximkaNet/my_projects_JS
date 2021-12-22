const findHypotenuse = (a, b) => {
  const result = Math.sqrt(a ** 2 + b ** 2);
  return result.toFixed(2);
}

const MathUtils = {
  findHypotenuse
}
export default MathUtils;