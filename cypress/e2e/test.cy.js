describe('e2e tests', () => {
  it('can visit site', () => {
    cy.visit('/')
    cy.contains('Welcome')
  })

  it('can visit messages page', () => {
    cy.visit('/')
    cy.contains('Messages').click()
    cy.contains('Send!')
  })

  it('can send message', () => {
    cy.visit('/messages')
    cy.get('#message').type('this is a test message')
    cy.contains('Send!').click()
    cy.get('#message').clear()
    cy.contains('this is a test message')
  })
})
