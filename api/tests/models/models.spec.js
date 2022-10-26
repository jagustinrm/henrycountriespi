// import { Country  } from("../../src/models/Country"); 


// // // let newPokemon = {
// // //   name: "Angelino",
// // //   typeOne: "fire",
// // //   typeTwo: "water",
// // //   attack: 1,
// // //   defense: 2,
// // //   speed: 1,
// // //   hp: 45,
// // //   height: 10,
// // //   weight: 2,
// // //   imgUrl:
// // //     "https://www.pngkey.com/png/full/383-3830110_shiny-manaphy-egg-gs-pokemon-shiny-manaphy-egg.png",
// // // };

// describe("Testing del modelo Country", () => {
//   test("Nos trae un array de countries", async () => {
//     let findCountries = await Country.findAll();
//     expect(findCountries).toBeInstanceOf(Array);
//   });
 
// //   test("En un principio nos devuelve un valor null ya que no existe ningun pokemon en la db", async () => {
// //     let findPokemon = await Pokemons.findOne({ where: { name: newPokemon.name } });
// //     expect(findPokemon).toBeFalsy();
// //   });

// //   test("Crea un Pokemon correctamente si se pasan todos los datos", async () => {
// //     await Pokemons.create(newPokemon);
// //     let findPokemon = await Pokemons.findOne({ where: { name: newPokemon.name } });
// //     expect(findPokemon).toBeInstanceOf(Object);
// //   });
// // });

// // describe("Testing del modelo Types", () => {
// //   test("Nos devuelve un array con todos los typos", async () => {
// //     let findAllTypes = await Types.findAll();
// //     expect(findAllTypes).toBeInstanceOf(Array);
// //   });
// //   test("Nos devuelve valor null ya que no existen tipos en un principio", async () => {
// //     let findType = await Types.findOne({ where: { name: "velkor" } });
// //     expect(findType).toBeFalsy();
// //   });

// //   test("Nos devuelve un objeto con los datos del Typo segun el nombre", async () => {
// //     await Types.create({ name: "velkor" });
// //     let findType = await Types.findOne({ where: { name: "velkor" } });
// //     expect(findType).toBeInstanceOf(Object);
// //   });
//  });















const { Country, Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });

    });
  });
});
describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: false }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Surf' });
      });

    });
  });
});