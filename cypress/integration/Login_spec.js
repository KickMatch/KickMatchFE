describe('Login Page', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    })

  it('Should have app url when displaying login page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
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

  // it('Should be able to render the default login buttons', () => {
  //   cy.get('.login-buttons')
  //     .contains('Jo')
  //   cy.get('.login-buttons')
  //     .contains('Dee')
  //   cy.get('.login-buttons')
  //     .contains('King')
  //   cy.get('.login-buttons')
  //     .contains('Denver FC')
  //   cy.get('.login-buttons')
  //     .contains('Boulder FC')
  //   cy.get('.login-buttons')
  //     .contains('Colorado Springs FC')
  // });

  // it('Should be able to render the new athelete and new team buttons', () => {
  //   cy.get('.new-athlete')
  //     .contains('New Athlete')
  //   cy.get('.new-team')
  //     .contains('New Team')
  // });

  // it('Should be able to click the register new athlete button and render the register new athlete page with heading', () => {
  //   cy.get('.new-athlete')
  //     .click()
  //   cy.get('.registration-athlete-heading')
  //     .contains('Create a New Athlete Profile')
  // });

  // it('Should be able to click the register new team button and render the register new athlete page with heading', () => {
  //   cy.get('.new-team')
  //     .click()
  //   cy.get('.registration-team-heading')
  //     .contains('Create a New Team Profile')
  // });

  // it('Should be able to click an athlete button and render an athlete page', () => {
  //   cy.get('#Jo')
  //     .contains('Jo')
  //     .click()
  //   cy.intercept('POST', 'https://frozen-waters-94259.herokuapp.com/graphql', req => {
  //     if (req.body.operationName === 'talent') {
  //       req.alias = 'talentQuery';
  //       req.reply({
  //         body: {
  //           data: {
  //             talent: {
  //               age: 15,
  //               dominantFoot: "Neither",
  //               email: "huh@gmail.com",
  //               fortyDash: 50,
  //               goalsMadeLs: 0,
  //               height: "6'3",
  //               id: "1",
  //               jugglingRecord: 30,
  //               name: "William",
  //               primaryPosition: "First Base",
  //               secondaryPosition: "Lineman",
  //               talents: "Handstands",
  //               verticalJump: 1,
  //               videoUrl: "www.futboltube/jo",
  //               weight: 165,
  //               zipcode: 80013,
  //             }
  //           }
  //         },
  //         headers: {
  //           'access-control-allow-origin': '*',
  //         }
  //       })
  //     }
  //   });

  //   cy.contains('Jo')
  //     .contains('Jo')
  //     .contains('Jo')
  //     .contains('Jo')
  // });
})