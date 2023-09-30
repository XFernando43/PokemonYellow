class Battle{
  constructor(player1,bot){
    this.player1=player1;
    this.bot = bot;
    this.hpPlayer = this.player1.pokemon.stats.hp;
    this.hpBot = this.bot.pokemon.stats.hp;
  }
  start() {
    window.alert('Battle is starting');
    this.prepareBattle();
    this.printBattleStatus(this.hpPlayer,this.hpBot);
    while(this.hpPlayer > 0 || this.hpBot > 0){
      this.getFirstPokemon();
      if(this.hpPlayer <= 0){
        window.alert("bot win");
        break;
      }else if(this.hpBot <= 0){
        window.alert("jugador 1 win");
        break;
      }
    } 
  }

  prepareBattle() { //funciona
    console.log("\n");
    console.log("BATALLA COMEINZA PA PA PAPAPAPAPA PAPAPAPAPA");
    console.log(`${this.player1.name} sent out ${this.player1.specie} !`)
    console.log(`${this.bot.name} sent out ${this.bot.specie} !`)
    
  }
  
  getFirstPokemon() { //funciona
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
    let result_firstAtack = this.firstByPriority(choise_atackPlayer,atack_bot);
    if(result_firstAtack === 1){
      window.alert("Jugador ataca primero");
      this.attackToPokemon(result_firstAtack,choise_atackPlayer,this.player1.pokemon);
    }
    else if(result_firstAtack === 0){
      window.alert("bot ataca primero");
      this.attackToPokemon(result_firstAtack,atack_bot,this.bot.pokemon);
    }else{
      result_firstAtack = this.firstBySpeed(this.player1,this.bot);
      if(result_firstAtack === 1){
        this.attackToPokemon(result_firstAtack,choise_atackPlayer,this.player1.pokemon);
        this.attackToPokemon(0,atack_bot,this.bot.pokemon);
        this.printBattleStatus(this.hpPlayer,this.hpBot);
      }else{
        this.attackToPokemon(1,choise_atackPlayer,this.player1.pokemon);
        this.attackToPokemon(result_firstAtack,atack_bot,this.bot.pokemon);
        this.printBattleStatus(this.hpPlayer,this.hpBot);
      }
    }


  }

  attackToPokemon(turn,attack,pokemon){ 
    window.alert("Alguien ha atacado");
    let attackEspecifics;
    let daño;
    for (let a of Moves){
      if(attack === a.name){
        attackEspecifics = a;
      }
    }
    if(attackEspecifics.type === 'normal'){
      daño = Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5.0 + 2) * this.player1.pokemon.stats.attack * attackEspecifics.power / this.player1.pokemon.stats.defense) / 50) + 2
    }else{
      daño = Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5.0 + 2) * this.player1.pokemon.stats.specialAttack * attackEspecifics.power / this.player1.pokemon.stats.specialDefense) / 50) + 2
    }

    if(turn === 1){
      this.hpBot-=daño;
    }else{
      this.hpPlayer-=daño;
    }

  }
  
  firstByPriority(choise_atackPlayer, choise_atackBot) { //funciona
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

  }

  firstBySpeed(player, bot) { //funciona
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
    if(poke_player.baseStats.speed > poke_bot.baseStats.speed){
      return 1;
    }
    else if(poke_player.baseStats.speed < poke_bot.baseStats.speed){
      return 0;
    }else{
      return i;
    }
  }

  printBattleStatus(hpPlayer, hpBot) { //funciona
    const datos = [
      { player: this.player1.name, Pokemon:this.player1.specie,level:this.player1.pokemon.level, hp:hpPlayer},
      { player: this.bot.name,     Pokemon:this.bot.specie,level:this.bot.pokemon.level, hp:hpBot}
   ];
    console.table(datos);
  }
  
}