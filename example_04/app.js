
/* ========================================================
    Subscription
    - Agrupamiento de subscripciones
    - Desagrupamiento de subscripciones
   ======================================================== */

let observable1 = Rx.Observable.interval(3000);
let observable2 = Rx.Observable.interval(2000);

let subscription = observable1.subscribe( (x) => {
  console.log("Observable 1: " + x)
});

let childSubscription = observable2.subscribe( (x) => {
  console.log("Observable 2: " + x)
});

// Agrupando la subscripción
subscription.add(childSubscription);

setTimeout( () => {
  // Eliminando el agrupamiento
  subscription.remove(childSubscription);
  // Cancelando la ejecución
  subscription.unsubscribe();
}, 10000);