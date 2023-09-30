class Battle{
  constructor(player1,bot){
    this.player1=player1;
    this.bot = bot;
  }
  start() {
    window.alert('Battle is starting');
    
    // Anunciar "The battle is about to start!"
    // preparar la batalla con prepareBattle()
    // Usar un bucle para todos los turnos
    // Ambos jugadores seleccionan un movimiento
    // Si al seleccionar un movimiento, retorna 'true' terminar la batalla y anunciar "[nombre] run away!"
    // Calcular quien atacara primero
    // El primero ataca al segundo
    // Si el segundo aun no se desmaya...
    // El segundo ataca al primero
    // El bucle continua hasta que alguno se desmaye
    // Al terminar el bucle, identificar al ganador y al perdedor
    // Anunciar "[perdedor] FAINTED!"
    // Anunciar "[ganador] WINS!"
    // Se procesa la victoria
  }

  prepareBattle() {
    // llamar a prepareForBattle de los pokemones de ambos jugadores
    // anunciar "[judgador]sent out [POKEMON]!" para ambos jugadores
    console.log("\n");
    console.log("BATALLA COMEINZA PA PA PAPAPAPAPA PAPAPAPAPA");
    console.log(this.player1);
    console.log(this.bot);
    const datos = [
        { player: this.player1.name, Pokemon:this.player1.specie,level:this.player1.pokemon.level, hp:this.player1.pokemon.stats.hp},
        { player: this.bot.name,     Pokemon:this.bot.specie,level:this.bot.pokemon.level, hp:this.bot.pokemon.stats.hp}
     ];
     console.table(datos);

  }
  
  getFirstPokemon() {
    // verificar si un pokemon empieza por tener movimiento con mayor prioridad con firstByPriority
    // verificar si un pokemon empieza por tener  mayor velocidad con firstBySpeed
    // si no, elegir uno de manera aleatorio
    let atacks_player;
    let atacks_bot;
    let i = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    for (let pokemon of Pokemons){
      if(this.player1.specie === pokemon.species){
        atacks_player = pokemon.moves;
      }
      if(this.bot.specie === pokemon.species){
        atacks_bot = pokemon.moves;
      }
    }
    const choise_atackPlayer = prompt(`Choose a move \n${atacks_player[0]}\n${atacks_player[1]}`);
    const atack_bot = atacks_bot[i];
    const result_firstAtack = this.firstByPriority(choise_atackPlayer,atack_bot);
    if(result_firstAtack === 1){
      window.alert("Jugador ataca primero");
      window.alert("Ataqye de jugador 1 es debastador");
    }
    else if(result_firstAtack === 0){
      window.alert("bot ataca primero");
    }else{
      result_firstAtack = this.firstBySpeed(this.player1,this.bot);
    }
  }
  
  firstByPriority(choise_atackPlayer, choise_atackBot) {
    let pri_player;
    let pri_bot;
    for(let move of Moves){
      if(choise_atackPlayer === move.name){
        pri_player = move.priority;
      }
      if(choise_atackBot === move.name){
        pri_bot = move.priority;
      }
    }
    
    if(pri_player > pri_bot){
      return 1;
    }
    else if(pri_player < pri_bot){
      return 0;
    }else{
      return null;
    }

    // verificar si un pokemon empieza por tener movimiento con mayor prioridad con firstByPriority
    // verificar si un pokemon empieza por tener  mayor velocidad con firstBySpeed
    // si no, elegir uno de manera aleatorio
  }

  firstBySpeed(player, bot) {
    window.alert("Pasamos a ronda por velocidad");  
    let poke_player;
    let poke_bot;
    let i = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    for(let pokemon of Pokemons){
      if(player.specie === pokemon.species){
        poke_player = pokemon;
      }
      if(bot.specie === pokemon.species){
        poke_bot = pokemon;
      }
    }

    console.log(poke_player.baseStats.speed);
    console.log(poke_bot.baseStats.speed);

    if(poke_player.baseStats.speed > poke_bot.baseStats.speed){
      return 1;
    }
    else if(poke_player.baseStats.speed < poke_bot.baseStats.speed){
      return 0;
    }else{
      return i;
    }


  }

  printBattleStatus() {
    // usar conole.table para mostrar el status de la batalla (player, pokemon, level, currentHp)
  }
  
}