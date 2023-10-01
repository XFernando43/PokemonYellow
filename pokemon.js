class Pokemon {
    constructor(species, name, level,individualValue,exp) {
      this.especies = species;
      this.name = name;
      this.level = level;
      this.individualValue = individualValue;
      this.currentMove = null;
      this._stats = null;
      this.statEffort = 0;
      this.exp = exp;
      this.currentHp;
    }
    get stats() {
        for(let poke of Pokemons){
          if(poke.species.toLocaleLowerCase() === this.especies.toLocaleLowerCase()){
            this._stats = poke.baseStats;
            break;
          }
        }

        // calcular las estadisticas actuales del Pokémon
        this._stats.hp = Math.floor((2 * this._stats.hp + this.individualValue + this.statEffort) * this.level / 100 + this.level + 10);
        this._stats.attack = Math.floor((2 * this._stats.attack + this.individualValue + this.statEffort) * this.level / 100 + 5)
        this._stats.defense = Math.floor((2 * this._stats.defense + this.individualValue + this.statEffort) * this.level / 100 + 5)
        this._stats.specialAttack = Math.floor((2 * this._stats.specialAttack + this.individualValue + this.statEffort) * this.level / 100 + 5)
        this._stats.specialDefense = Math.floor((2 * this._stats.specialDefense + this.individualValue + this.statEffort) * this.level / 100 + 5)
        this._stats.speed = Math.floor((2 * this._stats.speed + this.individualValue + this.statEffort) * this.level / 100 + 5)
        return this._stats;
    }
    
    get type(){
        for(let pokemon of Pokemons){
            if(this.especies === pokemon.species){
                return pokemon.type;
            }
        }
    }

    expForLevel(n) {
    // obtener la función de crecimiento del pokedex
    // retornar el resultado de llamar a la función pasando `n`
        return Math.floor(6 / 5 * n * n * n - 15 * n * n + 100 * n - 140);
    }

    prepareForBattle() { //got it
        // asignar al atributo currentHp la estadistica HP del Pokemon
        // resetear el atributo currentMove a null
        let statEffort = 0;
        for(let effor of Pokemons){
            if(this.name === effor.name){
                statEffort = effor.effortPoints.amount;
            }
        }
        this.currentHp = Math.floor((2 * this.stats.hp + this.individualValue + statEffort) * this.level / 100 + this.level + 10);
        
    }

    receiveDamage(damage) { // got it
        // reducir currentHp en la cantidad de damage. No debe quedar menor a 0.
        if(this.currentHp > 0 ){
            this.currentHp -= damage;
        }
        if(damage > this.currentHp){
            
            this.currentHp = 0;
        }
    }

    setCurrentMove(attack) { // got it
        // buscar el move (string) en el pokedex y asignarlo al atributo currentMove
        for (let move of Moves){
            if(attack === move.name){
              this.currentMove = move;
            }
        }
    }

    isFainted() { //got it
        // retornar si currentHp es 0 o no
        if(this.currentHp === 0){
            return true;
        }
    }

    moveHits() { // got it
        let r = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if(this.currentMove.accuracy > r){
            return true;
        }else{
            return false;
        }
    }

    isCritical() { // got it
        let r = Math.floor(Math.random() * (16 - 1 + 1) + 1);
        if(r===1){
            return true;
        }
    }

    calculateBaseDamage(target) {
        let Move_hits = this.moveHits();
        let isCritic = this.isCritical();
        let ownAttack_isSpecial = false;
        let target_isSpecial = false;
        let daño;

        for(let specialMove of SpecialMoveTypes){
            if(this.currentMove.type === specialMove){
                ownAttack_isSpecial = true;
            }
            if(target.pokemon.currentMove.type === specialMove){
                target_isSpecial = true;
            }
        }

        // Si acertara o no
        if(Move_hits === false){
            daño = 0;
            return daño;
        }

        // ataque especial o no?
        if(ownAttack_isSpecial){
            if(target_isSpecial){
                daño = Math.floor(Math.floor(Math.floor(2 * this.level / 5.0 + 2) * this._stats.specialAttack * this.currentMove.power / target.pokemon._stats.specialDefense) / 50) + 2;
                
            }else{
                daño = Math.floor(Math.floor(Math.floor(2 * this.level / 5.0 + 2) * this._stats.specialAttack * this.currentMove.power / target.pokemon._stats.defense) / 50) + 2;
            }
        }else{
            if(target_isSpecial){
                daño = Math.floor(Math.floor(Math.floor(2 * this.level / 5.0 + 2) * this._stats.attack * this.currentMove.power / target.pokemon._stats.specialDefense) / 50) + 2;
            }else{
                daño = Math.floor(Math.floor(Math.floor(2 * this.level / 5.0 + 2) * this._stats.attack * this.currentMove.power / target.pokemon._stats.defense) / 50) + 2;
            }
        }

        // calcular multiplicador de efectividad
        let dañoXEfectividad = this.calculateEffectiveness(target);
        daño = daño * dañoXEfectividad;

        if(isCritic){
            console.log("Daño Critico");
            daño = daño*1.5;
        }

        return daño;
    }

    calculateEffectiveness(target) { // got it
        let effective=1;
        let myTypes; 
        let opponentTypes = target.pokemon.type; 

        for(let tipos of Pokemons){
            if(this.especies === tipos.species){
                myTypes = tipos.type;
            }
        }  

        for (let myType of myTypes) {
            for (let opponentType of opponentTypes) {
                // Verificar si el tipo de mi Pokémon está en TypeMultiplier
                if (myType in TypeMultiplier) {
                    // Obtener el multiplicador de efectividad para el tipo de mi Pokémon
                    let effectiveness = TypeMultiplier[myType][opponentType];
                    if(typeof(effectiveness)!== "number"){
                        effective=1;
                    }else{
                        effective *= effectiveness; // Multiplicar el multiplicador de efectividad al efectivo total
                    }
                }
            }
        }
       
       return effective; 

    }

    processVictory(target) { // got it
        let experienceTaked = Math.floor(this.exp * this.level / 7);
        let effordPointsTaked;
        for(let pokemon of Pokemons){
            if(target.pokemon.especies === pokemon.species){
                effordPointsTaked = pokemon.effortPoints.amount;
            }
        }
        this.exp+= experienceTaked;
        this.statEffort += effordPointsTaked;
        
        //subir de nivel o no?
        let experienceRequired = Math.floor(this.exp * this.level / 7);
        if(experienceRequired < this.exp){
            this.level += 1;
        }
        // calcular la experiencia ganada e incrementarla a tus experiencePoints
        // incrementar los effortValues en la estadística correspondiente con la información de effortPoints del oponente
        // anunciar "[nombre] gained [cantidad] experience points"
        // verificar si los nuevos experiencePoints te llevan a subir de nivel
        // si se sube de nivel
        // incrementar nivel y Anunciar "[nombre] reached level [nivel]!"
    }

    attack(target) { // got it
        
        let pega = this.moveHits();
        let daño = this.calculateBaseDamage(target);
        if(pega === true){
            console.log(`${this.name} used ${this.currentMove.name}`);
            target.pokemon.receiveDamage(daño);
            console.log(`and it hit it with ${daño} damage`);
        }else{
            console.log("No se pudo Acertar el ataque");
        }
    }

    

}