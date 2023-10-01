class Game{
  constructor(){
    this.player = null;
  }
  AssignPlayer(name,pokemon){
    const newPlayer = new Player(name,pokemon);
    this.player = newPlayer;
  }
  AssignPokemon(player,especies,name,lvl){
    let exp;
    for(let pokemon of Pokemons){
      if(especies === pokemon.species){exp = pokemon.baseExp;}
    }
    let pokemonAux = new Pokemon(especies,name,lvl,Math.floor(Math.random() * (31 - 1 + 1)) + 1,exp);
    player.assignPokemon(pokemonAux);
  }
  start(){
    const [name, pokemon, pokemonName] = Game.welcome();   
    this.AssignPlayer(name,pokemon);
    this.AssignPokemon(this.player,pokemon,pokemonName,7);
    this.menu(); 
  }
  train() {
    console.log("AH ENTRENAR")
    console.log(`ash ketchun del pueblo sandia challenges Random Person for training`);
    let r = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    let botLevel = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
    let pokemonAux;
    for(let i = 0; i<Pokemons.length; i++){
      if(parseInt(i) === parseInt(r)){
        pokemonAux = Pokemons[i];
      }
    }
    let bot;
    bot = new Bot('Random Person',pokemonAux.species);
    this.AssignPokemon(bot,pokemonAux.species,pokemonAux.species,botLevel);
    console.log(`${bot.name} has a ${bot.pokemon.name} level ${bot.pokemon.level}`);

    let battle = new Battle(this.player,bot);
    battle.start();
    this.menu();

  }
  
  challengeLeader() {
    // mismo mecanismo que train() pero el Bot se llama Brock y usa un Onix nivel 10
    console.log("Desafiar al Leader de negocios el brokas");
    let bot = new Bot('Brook','Onix');
    this.AssignPokemon(bot,'Onix','Onix',10);

    console.log("Jugador -->",this.player);
    console.log("bot -->",bot);
    console.log(`${bot.name} has a ${bot.pokemon.name} level ${bot.pokemon.level}`);
    let battle = new Battle(this.player,bot);
    battle.start();
    this.menu();
  }
  
  showStats() {
    let tipos = '';
    for(let i=0; i<this.player.pokemon.type.length; i++){
      tipos += this.player.pokemon.type[i];
      if (i < this.player.pokemon.type.length - 1) {
        tipos += ', ';
      }
    }

    const data = {
      species: this.player.specie,
      level: this.player.pokemon.level,
      type: tipos,
      experiencePoints: this.player.pokemon.exp,
      stats: {
        hp: this.player.pokemon.stats.hp,
        attack: this.player.pokemon.stats.attack,
        defense: this.player.pokemon.stats.defense,
        specialAttack: this.player.pokemon.stats.specialAttack,
        specialDefense: this.player.pokemon.stats.specialDefense,
        speed: this.player.pokemon.stats.speed,
      },
    };
    
    const tableData = [];
    
    for (const key in data) {
      if (typeof data[key] === 'object') {
        for (const subKey in data[key]) {
          tableData.push({ indice: `${key}.${subKey}`, valor: data[key][subKey] });
        }
      } else {
        tableData.push({ indice: key, valor: data[key] });
      }
    }
    
    console.table(tableData);
    
  }

  static welcome() {
    alert(`Welcome to Pokemon Yellow\nHello there! Welcome to the world of POKEMON! My name is OAK! People call me the POKEMON PROF!\nThis world is inhabited by creatures called POKEMON! For some people, POKEMON are pets. Others use them for fights.\nMyself... I study POKEMON as a profession.`);
    const name = prompt("First, what is your name?", "Ash");
    alert(`Right! So your name is ${name.toUpperCase()}!\nYour very own POKEMON legend is about to unfold! A world of dreams and adventures with POKEMON awaits! Let's go!\nHere, ${name.toUpperCase()}! There are 3 POKEMON here!\n When I was young, I was a serious POKEMON trainer. In my old age, I have only 3 left, but you can have one!`);
    const options = ["Bulbasaur", "Charmander", "Squirtle"];
    let pokemon;
    while (true) {
      pokemon = prompt(
        `Choose your pokemon:\n${options.join("\n")}`,
        options[0]
      );
      if (options.includes(pokemon)) break;
        alert("Invalid option");
    }
  
    alert(`You selected ${pokemon.toUpperCase()}. Great choice!`);
  
    const pokemonName = prompt("You can name your pokemon:", pokemon) || pokemon;
    alert(`${name.toUpperCase()}, raise your young ${pokemonName.toUpperCase()} by making it fight!\nWhen you feel ready you can challenge BROCK, the PEWTER's GYM LEADER`);
    return [name, pokemon, pokemonName];
  }
  
  static menu() {
    let respuesta;
    const option = prompt(`what do you want to do next?\nTrain\nStats\nLeader`);
  
  }

  menu() {
    let respuesta;
    const option = prompt(`what do you want to do next? \nTrain\nStats\nLeader`,"Train");
    
    if(option === 'Train'){
      respuesta = window.confirm("Do you want to fight?");
      if(respuesta){
        this.train();
      }
    }

    if(option === 'Stats'){
      this.showStats();
      this.menu();
    }

    if(option === 'Leader'){
      this.challengeLeader();
    }

    if(!option){
      Game.goodbye();
    }
  }

  static goodbye() {
    console.log("%cThanks for playing Pokemon Yellow", "font-weight: bold");
    console.log("This game was created with love by: Team 08");
  }

}