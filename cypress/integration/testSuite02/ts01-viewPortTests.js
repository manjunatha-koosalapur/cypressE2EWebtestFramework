/// <reference types="cypress" />
// --* reference *--//
// https://docs.cypress.io/api/commands/viewport


describe('view ports: Control the size & orientation of the APP screen', function() {
    before( () =>{
        console.log('running my tests')
    })

    beforeEach( ()=>{
        cy.visit('https://pxr-legal.com/')
    })

    it('test01: run tests in macbook-16', ()=> {
        cy.viewport('macbook-16')
        cy.screenshot()
        cy.wait(2000)
    })

    it('test02: run tests in ipad-mini', ()=> {
        cy.viewport('ipad-mini')
        cy.screenshot()
        cy.wait(2000)
    })

    it('test03: run tests in iphone-8', ()=> {
        cy.viewport('iphone-8')
        cy.wait(2000)
    })

    it('test04: run tests in 1024px x 768px', ()=> {
        cy.viewport(1024,768)
        cy.wait(2000)
    })

    it('test05: run tests in samsung-s10', ()=> {
        cy.viewport('samsung-note9')
        cy.wait(2000)

    })


})