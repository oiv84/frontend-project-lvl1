const getRandomIntegerFromRange = (range) => {
  let [min, max] = range;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomIntegerFromRange;
