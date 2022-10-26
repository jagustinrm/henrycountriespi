import {CreateActivity} from "../components/Activity";




  describe("Formulario de Creación de Actividad", () => {


    it("Debe renderizar un formulario", () => {
      expect(CreateActivity.find("form").length).toBe(1);
    });

    // it('Debe renderizar un label para el nombre con el texto "Name: "', () => {
    //   expect(createCharacter.find("label").at(0).text()).toEqual("Name: ");
    // });

    // it('Debe renderizar un input de tipo text con la propiedad "name" igual a "name"', () => {
    //   expect(createCharacter.find('input[name="name"]').length).toBe(1);
    // });

    // it('Debe renderizar un label para la raza con el texto "Race:', () => {
    //   expect(createCharacter.find("label").at(1).text()).toBe("Race: ");
    // });

    // it('Debe renderizar un input de tipo text con la propiedad "name" igual a "race"', () => {
    //   expect(createCharacter.find('input[name="race"]').length).toBe(1);
    // });
    // it('Debe renderizar un label con el texto "Faction:', () => {
    //   expect(createCharacter.find("label").at(2).text()).toBe("Faction: ");
    // });
    // it('Debe renderizar un input de tipo text con la propiedad name igual a "faction"', () => {
    //   expect(createCharacter.find('input[name="faction"]').length).toBe(1);
    // });

    // it('Debe renderizar in label para el rol del personaje con el texto "Role: "', () => {
    //   expect(createCharacter.find("label").at(3).text()).toEqual("Role: ");
    // });
    // it('Debe renderizar un input de tipo text con la propiedad "name" igual a "role', () => {
    //   expect(createCharacter.find('input[name="role"]').length).toBe(1);
    // });

    // it('Debe renderizar un label para asignar la nave del personaje con el texto "Ship: "', () => {
    //   expect(createCharacter.find('label').at(4).text()).toEqual('Ship: ');
    // });

    // it('Debe renderizar un input de tipo text cona la propiedad "name" igual a "ship"', () => {
    //   expect(createCharacter.find('input[name="ship"]').length).toBe(1);
    // });

    // it('Debería renderizar un input de button submit y con texto "Create Character"', () => {
    //   expect(createCharacter.find('button[type="submit"]').length).toBe(1);
    //   expect(createCharacter.find('button[type="submit"]').text()).toBe(
    //     "Create Character"
    //   );
    // });
  });
