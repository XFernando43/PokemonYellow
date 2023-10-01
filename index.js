// Versión síncrona:
// Crear un nuevo Game y llamar al método start

// let game = new Game()
// game.start();


// Versión asíncrona:
// Iniciar un contador de 10 segundos antes de empezar el juego
// Inciar un intervalo para mostras los segundos restantes en la consola
// Recuerda 'cancelar' el intervalo cuando llegue a 0 segundos


function Contador(tiempo) {
    console.clear();
    console.log(`El juego empezará en ... ${tiempo}`);
    if (tiempo > 0) {
      setTimeout(() => {
        Contador(tiempo - 1); // Resta 1 al tiempo y llama a la función nuevamente
      }, 1000); // Espera 1 segundo (1000 ms) antes de ejecutar de nuevo
    }else{
        let game = new Game()
        game.start();
    }
  }
  
  Contador(10);