const assert = require('assert')

describe('regex', function () {
    it('反向捕获',function(){
        const f = require('../lib/capture')
        assert.equal(f('2017-09-08'), '08/09/2017', '2017-09-08')
    })
})



