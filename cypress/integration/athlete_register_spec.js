describe('Athlete Register Page', () => {
  
  beforeEach(() => {
    // cy.visit('https://kick-match-fe.herokuapp.com/')
    cy.visit('http://localhost:3000/')
      .get('#new-athlete')
      .click()
    })

  it('Should have athlete registration url when displaying athlete registration page', () => {
    cy.url()
      .should('eq', 'https://kick-match-fe.herokuapp.com/registration-athlete')
      // .should('eq', 'http://localhost:3000/registration-athlete')
  });

  it('Should be able to render the page heading', () => {
    cy.get('.registration-athlete-heading')
      .contains('Create a New Athlete Profile')
  });

  it('Should be able to render the registration form labels', () => {
    cy.get('label')
      .contains('Full Name')
    cy.get('label')
      .contains('Email')
    cy.get('label')
      .contains('Height')
    cy.get('label')
      .contains('Weight')
    cy.get('label')
      .contains('Age')
    cy.get('label')
      .contains('Primary Position')
    cy.get('label')
      .contains('Secondary Position')
    cy.get('label')
      .contains('Dominant Foot')
    cy.get('label')
      .contains('Zip Code')
    cy.get('label')
      .contains('Goals Made Last Season')
    cy.get('label')
      .contains('Vertical Jump')
    cy.get('label')
      .contains('40 Yard Dash')
    cy.get('label')
      .contains('Personal Juggling Record')
    cy.get('label')
      .contains('Talents')
    cy.get('label')
      .contains('Awards')
  });

  it('Should be able to add text to the registration inputs', () => {
    cy.get('input[name=name]')
      .type('Dachshund')
    cy.get('input[name=email]')
      .type('huh@gmail.com')
    cy.get('input[name=height]')
      .type('6\'3')
    cy.get('input[name=weight]')
      .type('165')
    cy.get('select[name=age]')
      .select('15')
    cy.get('select[name=primaryPosition]')
      .select('Goalie')
    cy.get('select[name=secondaryPosition]')
      .select('Fullback')
    cy.get('select[name=dominantFoot]')
      .select('Right')
    cy.get('input[name=zipcode]')
      .type('80013')
    cy.get('input[name=goalsMadeLs]')
      .type('0')
    cy.get('input[name=verticalJump]')
      .type('1')
    cy.get('input[name=fortyDash]')
      .type('50')
    cy.get('input[name=jugglingRecord]')
      .type('30')
    cy.get('input[name=Defensive]')
      .check()
    cy.get('input[name=awards]')
      .type('Being tall')
    cy.get('.register-button')
      .click()
      .wait(10000)
    cy.intercept('POST', 'https://frozen-waters-94259.herokuapp.com/graphql', req => {
      if (req.body.operationName === 'talent') {
        req.alias = 'talentQuery';
        req.reply({
          body: {
            data: {
              talent: {
                id: '1',
                name: 'Dachshund',
                email: 'huh@gmail.com',
                height: '6\'3',
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
                awards: 'Being tall',
                videoUrl: 'www.futboltube/will',
              }
            }
          },
          headers: {
            'access-control-allow-origin': '*',
          }
        })
      }
    });
    cy.get('.register-button')
      .click()
    cy.reload()
    cy.get('#Dachshund')
      .contains('Dachshund')
  });

})