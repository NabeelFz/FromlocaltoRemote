
/// <reference types="cypress" />
describe('Get Local Repositories API Test', () => {
    it('should fetch the list of local repositories successfully', () => {
        cy.request({     
            method: 'GET',              
            url: 'http://localhost:8080/api/repositories/local',
            headers: {
                'Content-Type': 'application/json'

            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            // Additional assertions can be added here based on the expected structure of the response
        })
    })
})
