export default class WildPokemon {
  constructor(data){
    this.name = data.name || ''
    this.img = data.sprites ? data.sprites.front_default || '' : data.img || ''
    this.weight = data.weight || ''
  }
  get Template() {
    return /*html*/ `
    <div class="col-4">
    <img src="${this.img}" alt="">
    <h6>Weight: ${this.weight}</h6>
    <button class="btn btn-block btn-outline-danger" onclick="app.pokemonController.catchActivePokemon()">Catch</button>
    </div>`
  }

}