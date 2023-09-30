class Player{
    constructor(name,specie){
        this.name = name;
        this.specie = specie;
        this.pokemon = null;
    }
    selectMove() {

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
    
    }
  }