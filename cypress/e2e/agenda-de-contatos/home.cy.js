/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it("Deve incluir um contato na lista", () => {
        cy.get('input[type="text"]').type('Leonardo Soares Teles')
        cy.get('input[type="email"]').type('leonardo.teles1704@gmail.com')
        cy.get('input[type="tel"]').type('81995679116')
        cy.get('.adicionar').click()
    })

    it("Deve editar um contato", () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Gian Souza')
        cy.get('.alterar').click()
    })

    it("Deve remover um contato da lista", () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
    })
})