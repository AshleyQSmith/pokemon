export default class CaughtPokemon {
    constructor(data) {
        this.id = data._id || ''
        this.name = data.name || ''
        this.img = data.sprites ? data.sprites.front_default || '' : data.img || ''
        this.weight = data.weight || ''
        this.user = data.user
    }

    get Template() {
        return /*html*/`
        <div class="col-4">
        <img src="${this.img}" alt=""/>
        <h4>${this.name}</h4>
        <h6>Weight: ${this.weight}</h6>
        <button class="btn btn-outline-danger" onclick="app.pokemonController.releasePokemon('${this.id}')">Set Free</button>
        </div>`
    }
}