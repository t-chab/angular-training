const {
    Observable
} = Rx;

document.addEventListener('DOMContentLoaded', () => {
    const range1 = document.querySelector('#range-1');
    const range1Value = document.querySelector('#range-1-value');
    const range2 = document.querySelector('#range-2');
    const range2Value = document.querySelector('#range-2-value');
    const sum = document.querySelector('#sum');
    const stop = document.querySelector('#stop');

// pour acceder a une valeur depuis un element HTML: fromEvent
// param 1: l'element HTML
// param 2: le type d'event (pour un range: 'input')

// doit recupere les valeurs de l'input range 1 et au passage
// afficher dans la vue sur range1Value sa valeur
// aide: pour mettre à jour la vue: range1Value.innerHTML = 'some text!'
    const range1$ = Observable.fromEvent(range1, 'input').map(x => x.target.value).do(x => range1Value.innerHTML = x);

// doit recupere les valeurs de l'input range 2 et au passage
// afficher dans la vue sur range2Value sa valeur
// aide: pour mettre à jour la vue: range2Value.innerHTML = 'some text!'
    const range2$ = Observable.fromEvent(range2, 'input').map(y => y.target.value).do(y => range2Value.innerHTML = y);

// doit récupérer la somme des 2 range *une fois que les 2 sont disponibles*
// puis mettre la vue à jour à chaque fois que l'un ou l'autre change
    const sum$ = Observable.combineLatest(range1$, range2$)
        .map(arr => arr.map(x => parseInt(x)))
        .map(([x, y]) => x + y)
        .do(x => sum.innerHTML = x)
        .subscribe();

    const stop$ = Observable.fromEvent(stop, 'click')
        .skip(2).do(x => sum$.unsubscribe())
        .subscribe();
});