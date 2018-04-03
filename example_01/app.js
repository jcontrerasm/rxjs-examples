
/* =================================
    Eventos 
   ================================= */

let btnAction = document.getElementById("btnAction");

// Creando el evento futuro
let observable = Rx.Observable.fromEvent(btnAction, "click");

// Ejecutando el evento
observable.subscribe( () => {
  console.log("Se realizó un evento por RxJS !")
});