class Game{
    constructor(){
      this.player = null;
    }
    AssignPlayer(name,pokemon,pokemonName){
      const newPlayer = new Player(name,pokemon,pokemonName);
      this.player = newPlayer;
    }
    AssignPokemon(player,especies,name,lvl){
      let pokemonAux = new Pokemon(especies,name,lvl);
      player.assignPokemon(pokemonAux);
    }
    start(){
      const [name, pokemon, pokemonName] = Game.welcome();   
      this.AssignPlayer(name,pokemon,3);
      this.AssignPokemon(this.player,pokemon,pokemonName,3);
      console.log(this.player);
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
      bot = new Bot('Random Person',pokemonAux.species,0);
      this.AssignPokemon(bot,pokemonAux.species,pokemonAux.species,botLevel);

      console.log("Jugador -->",this.player);
      console.log("bot -->",bot);
    
      let battle = new Battle(this.player,bot);
      // battle.prepareBattle();
      // battle.getFirstPokemon();
      battle.start();
      this.menu();
        
        // let bot = new Bot('Ramdon Person',);
        // Crear un Bot llamado "Random Person", con un Pokemon aleatorio de nivel entre 1 y 5
        // Anunciar "[nombre] challenges [oponente] for training"
        // Anunciar "[oponente] has a [pokemon] level [nivel]"
        // Usar confirm() para preguntar al usuario si quiere pelear "Do you want to fight?"
        // Si, sí quiere pelear
        // Crear una Batalla entre el player y el oponente
        // empezar la batalla con su start
    }
    challengeLeader() {
        // mismo mecanismo que train() pero el Bot se llama Brock y usa un Onix nivel 10
    }
    showStats() {
        // usar console.table para presentar las estadisticas de tu pokemon:
        /*
          - species
          - level
          - type
          - experiencePoints
          stats:
          - hp
          - attack
          - defense
          - specialAttack
          - specialDefense
          - speed
        */
    }
    static welcome() {
        alert(`Welcome to Pokemon Yellow
    
    Hello there! Welcome to the world of POKEMON! My name is OAK! People call me the POKEMON PROF!
    
    This world is inhabited by creatures called POKEMON! For some people, POKEMON are pets. Others use them for fights.
    
    Myself... I study POKEMON as a profession.`);
    
        const name = prompt("First, what is your name?", "Ash");
    
        alert(`Right! So your name is ${name.toUpperCase()}!
    
    Your very own POKEMON legend is about to unfold! A world of dreams and adventures with POKEMON awaits! Let's go!
    
    Here, ${name.toUpperCase()}! There are 3 POKEMON here!
    
    When I was young, I was a serious POKEMON trainer. In my old age, I have only 3 left, but you can have one!`);
    
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
    
        const pokemonName =
          prompt("You can name your pokemon:", pokemon) || pokemon;
    
        alert(`${name.toUpperCase()}, raise your young ${pokemonName.toUpperCase()} by making it fight!
    
    When you feel ready you can challenge BROCK, the PEWTER's GYM LEADER`);
    
        return [name, pokemon, pokemonName];
      }
    
      static menu() {
        let respuesta;
        const option = prompt(`what do you want to do next?
    Train
    Stats
    Leader 
        `);
        if(option.toLocaleLowerCase() === 'Train'.toLocaleLowerCase()){
          respuesta = window.confirm("Do you want to fight?");
          if(respuesta){
            this.train(); 
          }
        }
      }

      menu() {
        let respuesta;
        const option = prompt(`what do you want to do next?
  Train
  Stats
  Leader 
        `);
        if(option.toLocaleLowerCase() === 'Train'.toLocaleLowerCase()){
          respuesta = window.confirm("Do you want to fight?");
          if(respuesta){
            this.train();
          }
        }
      }
    
      static goodbye() {
        console.log("%cThanks for playing Pokemon Yellow", "font-weight: bold");
        console.log("This game was created with love by: ...");
      }

}