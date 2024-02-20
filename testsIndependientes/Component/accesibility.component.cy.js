import 'cypress-axe';
describe('End-to-End Tests with Accessibility', () => {
    
  
    it('should navigate to the page and pass accessibility tests', () => {
    
      cy.mount('/src/components/PrimaryComponent.jsx'); 
  
    
      cy.injectAxe();
      cy.checkA11y();
      
      
    });
    it('should navigate to the page and pass accessibility tests', () => {
    
      cy.mount('/src/components/SecondaryComponent.jsx'); 
  
    
      cy.injectAxe();
      cy.checkA11y();
    })})