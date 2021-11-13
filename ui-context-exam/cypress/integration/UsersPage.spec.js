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
      console.log(item);
      cy.wrap(item).should('contain.text', USERS_MOCK_DATA[index].name);
    });
  });
});
