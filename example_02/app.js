
/* =================================
    Operators:
    .scan( callback(prev, now, index) , [seed])
    .range( start, count )
    .throttleTime( time )
   ================================= */


/* ---------------- Example 1 ---------------- */

let example1 = ( () => {

  let btnAction = document.getElementById("btnAction");
    
  // Creando el evento futuro
  let observable = Rx.Observable.fromEvent(btnAction, "click");
    
  observable
    // Agregando la funcion pura scan()
    .scan( count => count + 1, 0)

    // Ejecutando el observable
    .subscribe( count => {
      console.log(`El contador esta en: ${count}`)
    });

});


/* ---------------- Example 2 ---------------- */

let example2 = ( () => {

  // Creando el observable
  let observable = Rx.Observable;

  observable
    // Agregando los rangos
    .range(1,4)
    // Ejecutando el observable
    .subscribe( number => console.log( number ) );

});


/* ---------------- Example 3 ---------------- */

let example3 = ( () => {

  let observable = Rx.Observable;

  observable
    .range(0,3)
    .scan( (x, y, indice) => {
      return x + y
    })
    .subscribe( (result) => {
      console.log(result)
    });

});


/* ---------------- Example 4 ---------------- */

let example4 = ( () => {

  let btnAction = document.getElementById("btnAction");
  let observable = Rx.Observable.fromEvent(btnAction, "click");
  
  observable
    .throttleTime(3000)
    .scan( count => count + 1, 0)
    .subscribe( count => {
      console.log(`El contador esta en: ${count}`)
    });
  
});
