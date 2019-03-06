module.exports = {
  randomIndex: function(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  },
  initialSort: function(array, pivot) {
    const less = [];
    const more = [];
    array.forEach((el) => {
      if (el < array[pivot]) {
        less.push(el);
      } else if (el > array[pivot]) {
        more.push(el);
      }
    });
    return {less, more,}
  }
}
