class Battle{
  constructor(player,bot){
    this.player=player;
    this.bot = bot;
  }
  start() {
    window.alert('Battle is starting');
    console.log("The battle is about to start!");
    this.prepareBattle();
    this.printBattleStatus();
    this.player.pokemon.prepareForBattle();
    this.bot.pokemon.prepareForBattle();
    
    console.log("The battle Start");
    while(true){
      this.getFirstPokemon();
      if(this.player.pokemon.isFainted()){
        window.alert("bot win");
        this.bot.pokemon.processVictory(this.player);
        break;
      }else if(this.bot.pokemon.isFainted()){
        window.alert("jugador 1 win");
        this.player.pokemon.processVictory(this.bot);
        break;
      }
    } 
  }

  prepareBattle() { //funciona
    
    console.log(`${this.player.name} sent out ${this.player.specie} !`)
    console.log(`${this.bot.name} sent out ${this.bot.specie} !`)
    this.player.pokemon.prepareForBattle();
    this.bot.pokemon.prepareForBattle(); 
  }
  
  getFirstPokemon() { //mantenimiento aca atacamos
    let turno = this.firstByPriority();
    if(turno === true){
      this.player.pokemon.attack(this.bot);
      this.bot.pokemon.attack(this.player);
    }else{
      this.player.pokemon.attack(this.bot);
      this.bot.pokemon.attack(this.player);
    }
    this.printBattleStatus();
  }
  
  firstByPriority() { //funciona
    let pri_pokemon1 = this.player.selectMove();
    let pri_pokemon2 = this.bot.selectMove();
    this.player.pokemon.setCurrentMove(pri_pokemon1);
    this.bot.pokemon.setCurrentMove(pri_pokemon2);
    if(pri_pokemon1.accuracy > pri_pokemon2.accuracy){
      window.alert("Player ataca primero");
      return true;      
    }else if(pri_pokemon1.accuracy < pri_pokemon2.accuracy){
      window.alert("Bot ataca primero");      
      return false;
    }else{
      this.firstBySpeed(pri_pokemon1,pri_pokemon2);
    }
  }

  firstBySpeed(pri_pokemon1, pri_pokemon2) { //funciona
    window.alert("Pasamos a ronda por velocidad");  
    let vel_player = this.player.pokemon.speed;
    let vel_bot = this.bot.pokemon.speed;
    let i = Math.floor(Math.random() * (1 - 0 + 1)) + 0;


    if(vel_player > vel_bot){
      window.alert("Player ataca primero");
      return true;
    }
    else if(vel_player < vel_bot){
      window.alert("Bot ataca primero"); 
      return false;
    }else{
      if(i%2===0){
        this.player.pokemon.setCurrentMove(pri_pokemon1);
        return true;
      }else{
        this.bot.pokemon.setCurrentMove(pri_pokemon2);
        return false;
        
      }
    }
  }

  printBattleStatus() { //funciona
    const datos = [
      { player: this.player.name, Pokemon:this.player.specie,level:this.player.pokemon.level, hp:this.player.pokemon.currentHp},
      { player: this.bot.name,     Pokemon:this.bot.specie,level:this.bot.pokemon.level, hp:this.bot.pokemon.currentHp}
   ];
    console.table(datos);
  }
  
}