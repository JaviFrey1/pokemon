const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);

describe('Routes', function () {
    describe('/types', function () {
        it('GET devuelve un array con tipos', function () {
            return supertest
                .get('/types')
                .expect(200)
                .expect('Content-Type', /json/)
        });
    });
    describe('/pokemons', function () {
        it('GET devuelve un array con pokemons', function () {
            return supertest
                .get('/pokemons')
                .expect(200)
                .expect('Content-Type', /json/)
        });
    });
})