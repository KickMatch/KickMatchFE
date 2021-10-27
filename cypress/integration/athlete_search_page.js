
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

  it('Athlete Search page should contain a form with the inputs teams by name and location', () => {
    cy.get('.athlete-form-search').get('h3').contains('Search by')
      .get('.team-name-search').should('exist')
      .get('.input-team-select-container').should('exist')
      .get('.search-button-team').contains('Search Teams')
  });

  it('Athlete Search page should contain a carousel with all the teams available in the app', () => {
    cy.get('.no-search-founded').should('exist')
      .get('.matchCarousel').should('exist')
      .get('.TeamProfileContainer').should('exist')
  });

  it('Athlete Search page should contain a card to display the team data', () => {
    cy.get('.no-search-founded').should('exist')
      .get('.team-profile-search').should('exist')
      .get('.team-contact-info').should('exist')
      .get('.team-prof-logo').should('exist')
      .get('.team-prof-info').should('exist')
      .get('.team-prof-info-email').contains('denfutbol@gmail.com')
  });

});