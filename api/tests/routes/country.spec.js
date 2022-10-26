/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);


describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  // beforeEach(() => Country.sync({ force: true })
  //   .then(() => Country.create(country)));
  describe('GET /Country', () => {
    it('should get 200', async () => 
    agent.get('/Country').expect(200)
    
    );
  });
  describe("La respuesta debe ser un array con los paises",async () => { 
    it('Should get array', async () => {
       const response = await agent.get('/Country')
      expect(response.body).to.be.an('array');
    }
    );
  });

  describe ("Get /Country/:id, devuelve objeto con los datos del país pasado por params", async () => {
    it("Si el ID del país es correcto se espera una respuesta con status 200", async () => {
      await agent.get('/Country/ARG')
      .expect(200)
    })
    })

  describe ("Get /Country/:id, devuelve objeto con los datos del país pasado por params", async () => {
    it("Si el ID del país es correcto se espera una respuesta con los datos correctos", async () => {
      let response = await agent.get('/country/ARG')
      expect(response.body.name).equal("Argentina")
    })
    })
    describe ("Get /Country/:id", async () => {
      it("Si el ID del país es incorrecto se espera 404", async () => {
        await agent.get('/Country/AGssad').expect(404)
      })
      })


  

});
