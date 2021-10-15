describe('Main page rendering', () => {
  describe('Should be able to see main page', () => {
    it('User should see header', () => {
      cy
        .visit('https://kick-match-fe.herokuapp.com/')
        .get('h1').contains('FUTBOLLLLLLL!')
    })
  })
})