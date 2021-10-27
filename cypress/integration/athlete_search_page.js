
describe('Athlete Search Page', () => {
  
  beforeEach(() => {
    cy.visit('https://kick-match-fe.herokuapp.com/athlete/1/search')
    })

  it('Should have app url path /id: /search when displaying search page', () => {
    cy.url()
      .should('eq', 'https://kick-match-fe.herokuapp.com/athlete/1/search')
  });
});