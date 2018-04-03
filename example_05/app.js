
/* ========================================================
    Subject
    - Unicast
    - Multicast
    - Convertir un unicast a multicast
   ======================================================== */

// Observable Unicast

let unicast = ( () => {

  let observable = Rx.Observable.from([1,2,3]);

  observable.subscribe({ 
    next: (x) => console.log("Observer A: " + x) 
  });

  observable.subscribe({ 
    next: (x) => console.log("Observer B: " + x) 
  });

  observable.subscribe({ 
    next: (x) => console.log("Observer C: " + x) 
  });

});

// Observable Multicast

let multicast = ( () => {

  let subject = new Rx.Subject();
    
  subject.subscribe({
    next: (x) => console.log("Observer A: " + x)
  });
    
  subject.subscribe({
    next: (x) => console.log("Observer B: " + x)
  });

  subject.subscribe({
    next: (x) => console.log("Observer C: " + x)
  });

  let observable = Rx.Observable.from([1,2,3]);

  observable.subscribe(subject);

});