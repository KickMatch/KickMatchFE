
describe('Athlete Search Page', () => {
  
  beforeEach(() => {
    cy.visit('https://kick-match-fe.herokuapp.com/athlete/1/search')
    })

  it('Should have app url path /id: /search when displaying search page', () => {
    cy.url()
      .should('eq', 'https://kick-match-fe.herokuapp.com/athlete/1/search')
  });

  it('Athlete Search page should contain a header and a form section to find teams and create matches', () => {
    cy.get('.header').should('exist')
    cy.get('.athlete-search').should('exist')
  });

  it('Athlete Search page should contain a header with the logo and a nav bar, showing that the search button is selected', () => {
    cy.get('.header').get('.header-logo')
    cy.get('.header').get('.header-active > .header-text').contains('Search')
  });

  it('Athlete Search page should contain a header with the logo and a nav bar, showing that the search button is selected', () => {
    cy.get('.header').get('.header-logo')
    cy.get('.header').get('.header-active > .header-text').contains('Search')
  });

  it('Athlete Search page should contain a form with the inputs and team cards with available teams to show', () => {
    cy.get('.athlete-search')
      .get('.athlete-form-search').should('exist')
      .get('.no-search-founded').should('exist')
  });

});