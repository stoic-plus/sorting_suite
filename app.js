module.exports = {
  sort: function(unsorted) {
    let swapped;
    do {
      swapped = false;
      let swap = null;
      unsorted.forEach((el, i) => {
        if (unsorted[i + 1] < unsorted[i]) {
          swap = unsorted[i];
          unsorted[i] = unsorted[i + 1];
          unsorted[i + 1] = swap;
          swapped = true;
        }
      });
    } while (swapped);
    return unsorted;
  }
}
