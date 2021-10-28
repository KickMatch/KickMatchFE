describe('Login Page', () => {
  
  beforeEach(() => {

    cy.intercept('POST', 'https://frozen-waters-94259.herokuapp.com/graphql', req => {
      if (req.body.operationName === 'all_talent') {
        req.alias = 'allTalent';
        req.reply({
          body: {
            data: {
              allTalent: [
                {
                  id: '1',
                  name: 'William',
                  email: 'huh@gmail.com',
                  height: '63',
                  weight: 165,
                  age: 15,
                  primaryPosition: 'First Base',
                  secondaryPosition: 'Lineman',
                  dominantFoot: 'Neither',
                  zipcode: 80013,
                  goalsMadeLs: 0,
                  verticalJump: 1,
                  fortyDash: 50,
                  jugglingRecord: 30,
                  talents: 'Handstands',
                  videoUrl: 'www.futboltube/will',
                },
                {
                  id: '1',
                  name: 'Steph',
                  email: 'who@gmail.com',
                  height: '43',
                  weight: 120,
                  age: 18,
                  primaryPosition: 'Second Base',
                  secondaryPosition: 'Left Field',
                  dominantFoot: 'Both',
                  zipcode: 40000,
                  goalsMadeLs: 10,
                  verticalJump: 11,
                  fortyDash: 100,
                  jugglingRecord: 300,
                  talents: 'Handstands, Punching',
                  videoUrl: 'www.futboltube/steph',
                }
              ]
            }
          },
          headers: {
            'access-control-allow-origin': '*',
          }
        })
      }
    })
    
    cy.visit('https://kick-match-fe.herokuapp.com/')
    // cy.visit('http://localhost:3000/')
    cy.wait(4000)
  })

  it('Should have app url when displaying login page', () => {
    cy.url()
      .should('eq', 'https://kick-match-fe.herokuapp.com/')
      // .should('eq', 'http://localhost:3000/')

  });

  it('Should be able to render the page heading', () => {
    cy.get('.login-heading')
      .contains('Kick Match')
  });

  it('Should be able to render the login sub-headings', () => {
    cy.get('.login-container-heading')
      .contains('Athlete Login')
    cy.get('.login-container-heading')
      .contains('Team Login')
  });

  it('Should be able to render the default login buttons', () => {
    cy.get('#Jo')
      .contains('Jo')
    cy.get('.login-buttons')
      .contains('Denver FC')
    cy.get('.login-buttons')
      .contains('Boulder FC')
    cy.get('.login-buttons')
      .contains('Colorado Springs FC')
  });

  it('Should be able to render the new athlete and new team buttons', () => {
    cy.get('#new-athlete')
      .contains('New Athlete')
    cy.get('#new-team')
      .contains('New Team')
  });

  it('Should be able to click the register new athlete button and render the register new athlete page with heading', () => {
    cy.get('#new-athlete')
      .click()
      .wait(4000)
    cy.get('.registration-athlete-heading')
      .contains('Create a New Athlete Profile')
  });

  it('Should be able to click the register new team button and render the register new athlete page with heading', () => {
    cy.get('#new-team')
      .click()
    cy.wait(4000)
    cy.get('.registration-team-heading')
      .contains('Create a New Team Profile')
  });

  it('Should be able to click an athlete button and render an athlete page', () => {
    cy.get('#Jo')
      .contains('Jo')
      .click()
    cy.contains('Jo')
  });
})