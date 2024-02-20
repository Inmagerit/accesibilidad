describe('template spec', () => {
  it('Checks all elements are loaded on Primary Component', () => {
    cy.mount('/src/components/PrimaryComponent.jsx');
    cy.get('link').should('exist');
  });

  it('Checks all elements are loaded on Secondary Component', () => {
    cy.mount('/src/components/SecondaryComponent.jsx');
    cy.get('link').should('exist');
  });
});

  
  
  
  