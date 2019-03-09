const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
  it('sorts two numbers', function(){
    assert.deepEqual(app.sort([3, 2]), [2, 3]);
  });
  it('sorts an array of odd length', function(){
    assert.deepEqual(app.sort([3, 1, 2]), [1, 2, 3]);
  });
})
