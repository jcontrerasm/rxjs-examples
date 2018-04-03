
/* ========================================================
    Observer
    - Agrupamiento de observers
    - Valores sincronicos
    - Valores asincronicos
    - Estados de una subscripción
    - Cancelar subscripción
   ======================================================== */

//Función
let message = () => {
  return "Hello";
};

// Arreglo
let numbers = [1,2,3,4,5];

// Objeto
let person = {
  name    : "Juan",
  las_name: "Contreras",
  age     : 25
};

// Creando el observable
let observable = Rx.Observable.create( (observer) => {

  try {
    // Valores sincronicos
    observer.next(50);
    observer.next(message());
    observer.next(numbers);
    setTimeout(() => {
      // Valor asincronico
      observer.next(person);
      observer.complete();
    }, 5000);

  }catch(error) {

    observer.error(error);

  }

});

// Ejecutando el observable
let subscription = observable.subscribe({
  next    : (next) => console.log(next),
  error   : (error) => console.log("Error en la ejecución"),
  complete: () => console.log("Se completo la suscripción")
});

// Cancelando la ejecución
subscription.unsubscribe();