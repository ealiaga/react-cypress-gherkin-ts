/// <reference types="Cypress" />

import {
  Given
} from 'cypress-cucumber-preprocessor/steps';

Given('ingreso a la pagina principal', () => {
  cy.visit('https://www.google.cl');
});