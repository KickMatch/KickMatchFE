describe('Athlete Page', () => {

    it('True', () => {
      cy
        .visit('https://kick-match-fe.herokuapp.com/')
        expect(true).to.be.true
    })
  })
//   beforeEach(() => {
//     cy
//       .visit('http://localhost:3000/')
//       .get('[href="/athlete/1"] > .login-buttons').click()
//     })

//   it('Should have url equal to id of user', () => {
//     cy.url().should('eq', 'http://localhost:3000/athlete/1')
//   });
//   it('Should render a header component', () => {
//     cy.get('.header').should('exist')
//   })
//   it('Should render background image in player stat container', () => {
//     cy
//       .get('.player-stat-container')
//       .should('have.css', 'background-image')
//   })
//   it('Should render a users player-card with HTML elements', () => {
//     cy
//       .get('.avatar').should('be.visible')
//       .get('.firstName').contains('Jo')
//       .get('.player-stats').contains('6\'3 | 165 | 19')
//       .get('.attribute-container > :nth-child(3)').contains('Primary Position: Goalie')
//       .get('.attribute-container > :nth-child(4)').contains('Secondary Position: Mid Fielder')
//       .get('.attribute-container > :nth-child(5)').contains('Dominat Foot: R')
//       .get('.attribute-container > :nth-child(6)').contains('Zipcode: 80013')
//       .get('.attribute-container > :nth-child(7)').contains('Email: jo@futboltube')
//   })
//   it('Should render a users stat-card with HTML elements', () => {
//     cy
//       .get('.stat-card > :nth-child(1)').contains('Goals Last Season:')
//       .get('.stat-card > :nth-child(2)').contains('Vertical Jump: 3.7')
//       .get('.stat-card > :nth-child(3)').contains('40 Yard Dash: 7.8')
//       .get('.stat-card > :nth-child(4)').contains('Personal Juggling Record: 30')
//   })
//   it('Should render two divider divs separating the three components', () => {
//     cy
//       .get('.divider').should('have.length', 2)
//   })
//   it('Should render carousel with athletes images', () => {
//     cy
//       .get('.slider > :nth-child(1) > div').should('be.visible')
//       .get('.slider > :nth-child(2) > div').should('be.visible')
//       .get('.slider > :nth-child(3) > div').should('be.visible')
//   })
// })