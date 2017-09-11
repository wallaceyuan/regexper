const assert = require('assert')

describe('regex', function () {
    it('反向捕获',function(){
        const f = require('../lib/capture')
        assert.equal(f('2017-09-08'), '09/08/2017', '2017-09-08')
    })
    it('前瞻',function () {
        const f = require('../lib/prospect')
        assert.equal(f('a2*3'),'X2*3','a2*3')
    })
})



