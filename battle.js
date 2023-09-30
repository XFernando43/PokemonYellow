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
      }
    
      firstByPriority() {
        // retornar el pokemon con movimiento de mayor prioridad. Si igualan, retornar null
      }
    
      firstBySpeed() {
        // retornar el pokemon de mayor velocidad. Si igualan, retornar null
      }
    
      printBattleStatus() {
        // usar conole.table para mostrar el status de la batalla (player, pokemon, level, currentHp)
      }
}