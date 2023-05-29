describe('e2e tests', () => {
  it('can visit site', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
  })

  it('can visit messages page', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Messages').click()
    cy.contains('Send!')
  })

  it('can send message', () => {
    cy.visit('http://localhost:8000/messages')
    cy.get('#message').type('this is a test message')
    cy.contains('Send!').click()
    cy.get('#message').clear()
    cy.contains('this is a test message')
  })
})
