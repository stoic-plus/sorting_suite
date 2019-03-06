const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
  describe('randomIndex()', function(){
    it('should return random index < array length', function(){
      randomIndex = app.randomIndex(5);
      assert.isAbove(randomIndex, -1);
      assert.isBelow(randomIndex, 5);
    });
  });
  describe('initialSort()', function(){
    it('should sort an array given array and pivot index', function(){
      const original = [9, 8, 5, 6];
      const { less, more } = app.initialSort(original, 3);
      assert.deepEqual(less, [5]);
      assert.deepEqual(more, [9, 8]);
    });
  });
})
