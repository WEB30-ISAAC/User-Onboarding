import { v4 as uuid } from 'uuid'


const first_name = uuid().slice(0, 5)
const last_name = uuid().slice(0, 5)
const preexistingUser = 'Janet'
const email = `${first_name}${last_name}@reqres.in`
const password = 'password'
const tos = 'tos'

describe('form', () => {
    it('can navigate to the site', () => {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })

    it('has a user from the get go', () => {
        cy.contains(preexistingUser)
            .then(element => {
                debugger
            })
    })

    it('can submit a user (Info)', () => {
        cy.get('[data-cy_firstname_input="firstname_input"]')
            .type(first_name)
            .should('have.value', first_name)

        cy.get('[data-cy_lastname_input="lastname_input"]')
            .type(last_name)
            .should('have.value', last_name)

        cy.get('input[name="email"]')
            .type(email)
            .should('have.value', email)

        cy.get('input[name="password"]')
            .type(password)
            .should('have.value', password)

        cy.get(`input[name="${tos}"]`)
            .check()
            .should('have.checked')

        cy.contains('submit')
            .click()

        
        cy.get('.user-container')
        .contains(first_name)
        .next().contains(last_name)
        .next().contains(email)
    })
})

