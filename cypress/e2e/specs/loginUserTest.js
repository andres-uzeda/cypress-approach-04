import * as loginPage from '../modules/loginPage'

describe('Login sauce test page', () => {
    let url
    let username
    let password
    it("Create AR campaign with childs", () => {
        cy.fixture('/defines/'+ Cypress.config().environment).then((data)=>{
            username = data.user
            password = data.password
            url = data.url
            loginPage.login(username, password, url)
        })
    })
})