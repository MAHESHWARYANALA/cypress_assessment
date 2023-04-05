// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

Cypress.Commands.add('login', (email, password) => {
    cy.get("#email").clear()
    cy.get("#password").clear()
    cy.get("#email").type(email)
    cy.get("#password").type(password)
    cy.get("[type='submit']").click()
})


Cypress.Commands.add('verifyEmployee', (employeeObj) => {
    cy.get('.grid').should('contain.text', employeeObj.firstName + " " +employeeObj.lastName)
})

Cypress.Commands.add('addEmployeeOld', (firstName, lastName, email, phoneNumber, jobTitle) => {
    cy.get("button[type='submit']").should('be.disabled')
    cy.get(".text-2xl.font-bold").contains("Add new employee")
    cy.get("#firstName").type(firstName)
    cy.get("#lastName").type(lastName)
    cy.get("#email").type(email)
    cy.get("#phoneNumber").type(phoneNumber)
    cy.get("#jobTitle").type(jobTitle)
    cy.get(".sc-bYSBpT.eXvOUE").click()         //Date Selector
    cy.get(".DayPicker-Day.DayPicker-Day--today").click() //Select today's date
    cy.get("button[type='submit']").should('be.enabled')  //submit button enables once all the mandattory fields filled. 
    cy.get("button[type='submit']").click()
    //verify the Add employee success.
    cy.get(".sc-bGbJRg.gNJhQl").contains("Success! New employee added")

    //let expTitle = "Bright - Login";                    //explict Assertion for title of Login webpace
    //cy.get(".sc-bGbJRg.gNJhQl").then( (x) => {
    //    let actTitle=x.text()
    //    expect(actTitle).to.equal(expTitle)
    //}
    //)



})

Cypress.Commands.add('addEmployee', (obj) => {
    cy.get("button[type='submit']").should('be.disabled')
    cy.get(".text-2xl.font-bold").contains("Add new employee")
    cy.get("#firstName").type(obj.firstName)
    cy.get("#lastName").type(obj.lastName)
    cy.get("#email").type(obj.email)
    cy.get("#phoneNumber").type(obj.phoneNumber)
    cy.get("#jobTitle").type(obj.jobTitle)
    cy.get(".sc-bYSBpT.eXvOUE").click()         //Date Selector
    cy.get(".DayPicker-Day.DayPicker-Day--today").click() //Select today's date
    cy.get("button[type='submit']").should('be.enabled')  //submit button enables once all the mandattory fields filled. 
    cy.get("button[type='submit']").click()
    //verify the Add employee success.
    cy.get(".sc-bGbJRg.gNJhQl").contains("Success! New employee added")

    //let expTitle = "Bright - Login";                    //explict Assertion for title of Login webpace
    //cy.get(".sc-bGbJRg.gNJhQl").then( (x) => {
    //    let actTitle=x.text()
    //    expect(actTitle).to.equal(expTitle)
    //}
    //)



})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })