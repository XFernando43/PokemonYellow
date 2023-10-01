class Player{
    constructor(name,specie){
        this.name = name;
        this.specie = specie;
        this.pokemon = null;
    }
    selectMove() {
        let atacks_player;
        for (let pokemon of Pokemons){
            if(this.specie === pokemon.species){atacks_player = pokemon.moves;}
        }
        const atack_choised = prompt(`Choose a move \n${atacks_player[0]}\n${atacks_player[1]}`,atacks_player[0]);
        return atack_choised;
    }
    assignPokemon(pokemonSelected){
        this.pokemon = pokemonSelected;
    }
}


class Bot extends Player {
    constructor(name, specie) {
        super(name, specie);
        this.pokemon = null;
    }
    selectMove() {
        let atackBot;
        let i = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        for (let pokemon of Pokemons){
            if(this.specie === pokemon.species){ atackBot = pokemon.moves;}
        }
        return atackBot[i];
    }
  }