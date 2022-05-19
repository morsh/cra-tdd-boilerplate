describe('Demo App E2E', () => {
  it('should load the page', () => {
    cy.visit('http://localhost:3000/');
    cy.findAllByText(/Hello World 1/i).should('have.length', 1);
  });
});
