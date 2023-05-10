/// <reference types="cypress" />

//login on symphony
export function login(username, password, url){
    cy.session([username,password], ()=>{
        cy.visit(url)
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
    }, {
        cacheAcrossSpecs: true
    })
}