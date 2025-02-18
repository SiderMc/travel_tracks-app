export const starCalculation = rating => {
  const roundedRating = Math.round(rating);
  return Array.from({ length: 5 }, (_, index) =>
    index < roundedRating ? 'star' : 'empty'
  );
};

export default starCalculation;
