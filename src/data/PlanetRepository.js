export default class UserRepository {
  constructor() {
    this.planets = [];
  }

  getPlanetById(id) {
    return this.planets.find((planet) => planet.id == id);
  }

  addPlanet(planet) {
    this.planets.push(planet);
  }

  removePlanets(id) {
    this.planets = this.planets.filter((planet) => planet.id);
  }

  update(id, name, dados) {
    const planet = this.getPlanetById(id);

    if (planet) {
      planet.name = name;
      planet.dados = dados;
    }
    return;
  }
}
