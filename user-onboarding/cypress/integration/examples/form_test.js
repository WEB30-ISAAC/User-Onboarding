
// const first_name = id.slice(0, 5)
// const last_name = id.slice(0, 5)
// const email = `${first_name}${last_name}@reqres.in`

// it('works!', () => {
//     expect(5).to.eq(5)
//     expect(15).to.eq(15)
// })

describe('form', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000 ')
    })

    it('has a Janet from the get go', () => {
        cy.contains('Janet')
    })

    it('can submit a user (happy path)', () => {
        cy.get('input[name="first_name"]')
            .type('Isaac')
            .should('have.value', 'Isaac')
    })

    it('can submit a user (happy path)', () => {
        cy.get('input[name="last_name"]')
            .type('Stott')
            .should('have.value', 'Stott')
    })
})

