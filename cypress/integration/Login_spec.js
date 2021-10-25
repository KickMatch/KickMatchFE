describe('Login Page', () => {
  
  beforeEach(() => {
    cy.intercept('', {
      fixture: 'athlete_data.json'
    })

    cy.intercept('', {
      fixture: 'team_data.json'
    })

    cy.visit('http://localhost:3000')
  })

  it('Should have app url when displaying login page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should be able to render the page heading', () => {
    cy.get('h1')
      .contains('Kick Match')
  });

})