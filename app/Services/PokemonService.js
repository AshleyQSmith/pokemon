import store from "../store.js";
import wildPokemon from "../Models/WildPokemon.js"
import caughtPokemon from "../Models/CaughtPokemon.js"
import CaughtPokemon from "../Models/CaughtPokemon.js"
import WildPokemon from "../Models/WildPokemon.js"


let _pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 9000
})

let _sandboxApi = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/AQSmith/pokemon',
  timeout: 90000
})

class PokemonService {
  catchActivePokemon() {
    _sandboxApi.post('', store.State.activePokemon)
    .then(res => {
      this.getCaughtPokemon()})
      .catch(err => console.error(err))
  }

  releasePokemon(pokemonName){
    _sandboxApi.delete(pokemonName)
    .then(res => {
      this.getCaughtPokemon()})
      .catch(err => console.error(err))
  }

  getCaughtPokemon(){
    _sandboxApi.get()
    .then(res => {
      let caughtPokemon = res.data.data.map(pokemonRawData => new CaughtPokemon(pokemonRawData))
    store.commit("caughtPokemon", caughtPokemon)})
      .catch(err => console.error(err))
  }

getDetails(pokemonName){
  _pokemonApi.get('pokemon/' + pokemonName)
  .then(res => {
    let pokemon = new WildPokemon(res.data)
    console.log(pokemon)
    store.commit("activePokemon", pokemon)
  })
  .catch(err => console.error(err))
}

constructor(){
  this.getWildPokemon()
  this.getCaughtPokemon()
}

getWildPokemon() {
  _pokemonApi.get('pokemon?limit=25')
    .then(res => {
      store.commit('wildPokemon', res.data.results)
    })
}

}

const service = new PokemonService();
export default service;
