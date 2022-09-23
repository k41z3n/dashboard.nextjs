describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('localhost:3000')
    cy.get('h1')
    .should('have.text', "Hello")
  })
})