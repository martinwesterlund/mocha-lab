const assert = require('assert'),
{average} = require('../average')

describe('average.js', function(){
    it('returns a value of 2', function(){
        assert.strictEqual(average([1,2,3]), 2)
    })
    it('returns a value of 2.5', function(){
        assert.strictEqual(average([1,2,3,4]), 2.5)
    })
    it('returns a value of 16', function(){
        assert.strictEqual(average([10,24,12,18]), 16)
    })
})