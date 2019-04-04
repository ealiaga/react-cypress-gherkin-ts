import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('ingreso a la pagina principal', () => {
    cy.visit('/');
});
