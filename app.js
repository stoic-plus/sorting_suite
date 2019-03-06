module.exports = {
  randomIndex: function(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  },
  initialSort: function(array, pivot) {
    const lessThan = [];
    const greaterThan = [];
    array.forEach((el) => {
      if (el < array[pivot]) {
        lessThan.push(el);
      } else if (el > array[pivot]) {
        greaterThan.push(el);
      }
    });
    return [...lessThan, array[pivot], ...greaterThan];
  }
}
