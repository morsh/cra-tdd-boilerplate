describe('Demo App E2E', () => {
  it('should load the page', () => {
    cy.visit('http://localhost:3000/');
    cy.findByTestId('page-home').should('exist');
  });
});
