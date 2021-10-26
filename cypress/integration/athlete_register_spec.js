describe('Athlete Register Page', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    })

  it('Should have app url when displaying login page', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/')
  });

  
})