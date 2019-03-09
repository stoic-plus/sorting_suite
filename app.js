module.exports = {
  sort: function(unsorted) {
    let swap = null;
    unsorted.forEach((el, i) => {
      if (unsorted[i] > unsorted[i+1]) {
        swap = unsorted[i];
        unsorted[i] = unsorted[i+1];
        unsorted[i+1] = swap;
      }
      return unsorted;
    });
    return unsorted;
  }
}
