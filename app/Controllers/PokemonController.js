import PokemonService from "../Services/PokemonService.js";
import store from "../store.js";

//Private
function _draw() {
  let wildPokemon = store.State.wildPokemon;
  let template = ''
  wildPokemon.forEach(pokemon => 
    {template += `<button class="btn btn-primary btn-block m-2 text-capitalize col-2" onclick="app.pokemonController.getDetails('${pokemon.name}')">${pokemon.name}</button>`})
    document.getElementById("wild-pokemon").innerHTML = template
}

function _drawDetails() {
  document.getElementById("active-pokemon").innerHTML = store.State.activePokemon.Template
}

function _drawCaughtPokemon() {
  let caughtPokemon = store.State.caughtPokemon
  let template = ''
  caughtPokemon.forEach(caughtPokemon => template += caughtPokemon.Template)
  document.getElementById("caught-pokemon").innerHTML = template
}

//Public
export default class PokemonController {
  constructor() {
    store.subscribe("wildPokemon", _draw);
    store.subscribe("activePokemon", _drawDetails)
    store.subscribe("caughtPokemon", _drawCaughtPokemon)
  }

  getDetails(pokemonName){
    PokemonService.getDetails(pokemonName)
  }

  catchActivePokemon(){
    PokemonService.catchActivePokemon()
  }

  releasePokemon(pokemonName){
    PokemonService.releasePokemon(pokemonName)
  }
}
