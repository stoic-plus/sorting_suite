const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
  it('sorts two numbers', function(){
    assert.deepEqual(app.sort([3, 2]), [2, 3]);
  });
  it('sorts an array of odd length', function(){
    assert.deepEqual(app.sort([3, 1, 2]), [1, 2, 3]);
  });
  it('sorts a longer array', function(){
    assert.deepEqual(app.sort([ 5, 4, 3, 2, 1 ]), [ 1, 2, 3, 4, 5 ]);
  });
  it('sorts other arrays', function(){
    assert.deepEqual(app.sort([ 5, 1, 4, 2, 8 ]), [ 1, 2, 4, 5, 8 ]);
    assert.deepEqual(app.sort([ 12, 3, 7, 8, 2 ]), [ 2, 3, 7, 8, 12 ]);
  });
})
