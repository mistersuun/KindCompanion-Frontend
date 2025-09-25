/// <reference types="cypress" />

describe('Accessibility Tests - Elderly-Friendly Features', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should have no accessibility violations on homepage', () => {
    cy.checkA11y();
  });

  it('should support keyboard navigation', () => {
    cy.get('body').tab();
    cy.focused().should('be.visible');

    // Test tab order through main navigation
    cy.tab();
    cy.focused().should('contain.text', 'Home').or('contain.text', 'Accueil');
  });

  it('should have proper focus indicators', () => {
    cy.get('a, button, input, select, textarea').each(($el) => {
      cy.wrap($el).focus();
      cy.wrap($el).should('have.css', 'outline-width', '3px');
      cy.wrap($el).should('have.css', 'outline-color', 'rgb(0, 95, 204)');
    });
  });

  it('should have adequate color contrast for elderly users', () => {
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: true },
        'color-contrast-enhanced': { enabled: true }
      }
    });
  });

  it('should have proper heading hierarchy', () => {
    cy.get('h1').should('have.length', 1);
    cy.get('h1, h2, h3, h4, h5, h6').each(($heading, index, $headings) => {
      if (index > 0) {
        const currentLevel = parseInt($heading.prop('tagName').charAt(1));
        const previousLevel = parseInt($headings.eq(index - 1).prop('tagName').charAt(1));
        expect(currentLevel).to.be.at.most(previousLevel + 1);
      }
    });
  });

  it('should have alt text for all images', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt');
      cy.wrap($img).invoke('attr', 'alt').should('not.be.empty');
    });
  });

  it('should have proper labels for form controls', () => {
    cy.get('input, select, textarea').each(($control) => {
      const id = $control.attr('id');
      if (id) {
        cy.get(`label[for="${id}"]`).should('exist');
      } else {
        cy.wrap($control).parent('label').should('exist');
      }
    });
  });

  it('should support screen readers with proper ARIA attributes', () => {
    cy.get('[aria-label]').should('exist');
    cy.get('[role]').each(($el) => {
      cy.wrap($el).invoke('attr', 'role').should('not.be.empty');
    });
  });

  it('should have large clickable areas (48px minimum)', () => {
    cy.get('button, a').each(($el) => {
      cy.wrap($el).then(($element) => {
        const height = $element.outerHeight();
        const width = $element.outerWidth();
        expect(height).to.be.at.least(48);
        expect(width).to.be.at.least(48);
      });
    });
  });

  it('should respect reduced motion preferences', () => {
    // Simulate prefers-reduced-motion: reduce
    cy.window().then((win) => {
      cy.stub(win, 'matchMedia').returns({
        matches: true,
        media: '(prefers-reduced-motion: reduce)',
      });
    });

    cy.get('*').each(($el) => {
      cy.wrap($el).should('have.css', 'animation-duration', '0.01ms');
      cy.wrap($el).should('have.css', 'transition-duration', '0.01ms');
    });
  });

  it('should provide skip navigation link', () => {
    cy.get('.skip-nav').should('exist');
    cy.get('.skip-nav').should('contain.text', 'Skip to main content');

    // Test skip link functionality
    cy.get('.skip-nav').focus();
    cy.get('.skip-nav').should('be.visible');
    cy.get('.skip-nav').click();
    cy.focused().should('have.attr', 'id', 'main-content');
  });

  it('should work with high contrast mode', () => {
    // Simulate high contrast mode
    cy.window().then((win) => {
      cy.stub(win, 'matchMedia').returns({
        matches: true,
        media: '(prefers-contrast: high)',
      });
    });

    cy.reload();
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: true }
      }
    });
  });
});

// Custom Cypress commands for accessibility testing
Cypress.Commands.add('tab', { prevSubject: 'optional' }, (subject) => {
  return cy.wrap(subject).trigger('keydown', { keyCode: 9 });
});

Cypress.Commands.add('checkA11yWithThreshold', (context, options, threshold = 0) => {
  cy.checkA11y(context, options, (violations) => {
    if (violations.length > threshold) {
      violations.forEach((violation) => {
        Cypress.log({
          name: 'a11y violation',
          message: violation.description,
          consoleProps: () => violation,
        });
      });
    }
    expect(violations.length).to.be.at.most(threshold);
  });
});