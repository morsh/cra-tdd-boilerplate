describe('Demo App E2E', () => {
  it('should load home page', () => {
    cy.visit('http://localhost:3000/');
    cy.findByTestId('page-home').should('exist');
  });

  it('should show `Loading...` before i18n resources were loaded', () => {
    cy.intercept('/translations/messages.en.json', async (req) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      req.continue();
    });

    cy.visit('http://localhost:3000/', {});
    cy.findByText('Loading...').should('exist');
  });
});
