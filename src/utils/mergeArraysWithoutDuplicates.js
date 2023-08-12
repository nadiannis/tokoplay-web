const mergeArraysWithoutDuplicates = (arrayA, arrayB) => {
  return [
    ...new Map([
      ...arrayA.map((item) => [item._id, item]),
      ...arrayB.map((item) => [item._id, item]),
    ]).values(),
  ];
};

export default mergeArraysWithoutDuplicates;
