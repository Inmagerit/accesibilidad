describe('Responsive Design Tests for Components', () => {
    context('Primary Component Tests', () => {
        it('should look good on mobile', () => {
            cy.viewport('iphone-6');
            cy.mount('/src/components/PrimaryComponent.jsx');
            cy.get('*').should('exist');
            
            cy.get('button').each((button) => {
                cy.wrap(button).should('be.visible').click();
            });
        });

        it('should look good on tablet', () => {
            cy.viewport('ipad-2');
            cy.mount('/src/components/PrimaryComponent.jsx');
            cy.get('*').should('exist');
            
            cy.get('button').each((button) => {
                cy.wrap(button).should('be.visible').click();
            });
            // Add more tests specific to the component on tablet
        });

        it('should look good on desktop', () => {
            cy.viewport(1366, 768); 
            cy.mount('/src/components/PrimaryComponent.jsx');
            cy.get('*').should('exist');
            
            cy.get('button').each((button) => {
                cy.wrap(button).should('be.visible').click();
            });
            // Add more tests specific to the component on desktop
        });
    });

    context('Secondary Component Tests', () => {
        it('should look good on mobile', () => {
            cy.viewport('iphone-6');
            cy.mount('/src/components/SecondaryComponent.jsx');
            cy.get('*').should('exist');
            
            cy.get('button').each((button) => {
                cy.wrap(button).should('be.visible').click();
            });
        });

        it('should look good on tablet', () => {
            cy.viewport('ipad-2');
            cy.mount('/src/components/SecondaryComponent.jsx');
            cy.get('*').should('exist');
            
            cy.get('button').each((button) => {
                cy.wrap(button).should('be.visible').click();
            });
            // Add more tests specific to the component on tablet
        });

        it('should look good on desktop', () => {
            cy.viewport(1366, 768); 
            cy.mount('/src/components/SecondaryComponent.jsx');
            cy.get('*').should('exist');
            
            cy.get('button').each((button) => {
                cy.wrap(button).should('be.visible').click();
            });
            // Add more tests specific to the component on desktop
        });
    });
});
