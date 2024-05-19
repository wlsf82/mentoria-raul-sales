describe('EngageSphere', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the default greeting when no name is provided', () => {
    cy.contains('p', 'Hi there').should('be.visible')
  })

  it('shows a customized greeting when name is provided', () => {
    cy.get('input[type="text"][placeholder="Enter your name"]').type('Raul')

    cy.contains('p', 'Hi Raul').should('be.visible')
  })
})
