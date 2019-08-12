// for (i=1; i <= 10; i++) {
//     while (i % 2 == 0){alert (i); break;}
// }

/*
let count = 0;

while (count < 3) {
    alert('Number = ' + count);
    count++;
}*/

// let inputNumberUser = prompt('Введите число выше 100', '');
// let inputTrue = true;
// while (inputTrue) {
//     if (Number(inputNumberUser) > 100) {
//         inputTrue = false;
//         alert(`Вы ввели ${inputNumberUser}`);
//     } else {
//         alert('В ведите другое значение');
//         inputNumberUser = prompt('Введите число выше 100', '');
//     }
// }

// let n = 10;
//
// nextPrime:
//     for (i = 2; i <= n; i++) {
//         for (j = 2; j < i; j++){
//             if (i % j == 0) {
//                 continue nextPrime;
//             }
//         }
//         console.log(i);
//     }

// let browser = prompt('Какой браузкр вы используете', '');
//
//     browser = browser.toUpperCase();
//
// if (browser === 'EDGE') alert("You've got the Edge!");
// else if (browser === 'CHROME' || browser === 'FIREFOX' || browser === 'SAFARI') alert( 'Okay we support these browsers too' );
// else alert( 'We hope that this page looks ok!' );

// function min() {
//     let a = prompt('Number a', 0);
//     let b = prompt('Number b', 0);
//     if (a < b) return a;
//     else return b;
// }
//
// alert('Меньшее число ' + min());

function pow(){
    let x = prompt('Number x', 0);
    let b = prompt('Extent', 0);
    let result = x;
    for (let i = 2; i <= b; i++) {
        result *= x;
    }
    return alert(result);
}

pow();