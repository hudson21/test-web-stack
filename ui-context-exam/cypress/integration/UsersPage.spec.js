/// <reference types="cypress" />

import { USERS_MOCK_DATA } from '../../mock/index';

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/1');
  });

  it('Should find the Users List Header', () => {
    cy.get('h1').contains('Users list');
  });

  it('Should load users from the GraphQL Apollo Server', () => {
    cy.get('h2[data-test="sub-heading-card"]').each((item, index) => {
      cy.wrap(item).should('contain.text', USERS_MOCK_DATA[index].name);
    });
  });

  it('Should display matches according to the input types on search input', () => {
    cy.get('input[data-test="search-input"]').type('Sandra');

    cy.get('h2[data-test="sub-heading-card"]')
      .should('be.visible')
      .each((item) => {
        cy.wrap(item).should('contain.text', 'Sandra');
      });
  });

  it('Should update card name if user updates it', () => {
    cy.get("svg[data-test='update-action']").first().click();

    cy.get("input[data-test='edit-user-name']").should('be.visible').clear();

    cy.get("input[data-test='edit-user-name']")
      .should('be.visible')
      .type('Rafael Actualizado');

    cy.get("button[data-test='update-user-button']").click();

    cy.get('h2[data-test="sub-heading-card"]')
      .should('be.visible')
      .first()
      .within((item) => {
        cy.wrap(item).should('contain.text', 'Rafael Actualizado');
      });
  });
});
