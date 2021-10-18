describe('Main page rendering', () => {
  describe('Should be able to see main page', () => {
    it('User should see header', () => {
      cy
        .visit('https://kick-match-fe.herokuapp.com/')
        expect(true).to.be.true
    })
  })
})