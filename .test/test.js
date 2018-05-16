
const chai = require('chai')
const expect = chai.expect

describe('Sample', () => {
  it('will pass', (done) => {
    expect(true).to.equal(true)
    done()
  })
  it('will fail', (done) => {
    expect(true).to.equal(false)
    done()
  })
})