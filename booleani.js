/*

Koriscenje Boolean() funkcije

Ona se korsit za eksplictnu konverziju drugih tipova podataka u Boolean vrednost


*/

let value1 = Boolean(true);
let value2 = Boolean(false);
let value3 = Boolean(0); // 0 falsy verednost // false
let value4 = Boolean(1); // ovo ce da vrati true
let value5 = Boolean(""); // false
let value6 = Boolean("zdravo"); // true
let value7 = Boolean(null); // je falsy vrdnost dakle vraca false
let value8 = Boolean(undefined); // je falsy vrdnost dakle vraca false

/*
Boolean() funckija vraca true za vrednosti koje se smatraju truthy (istinite) i false za vrednosti koje se smatraju falsy (neistinte). Generalno, ove vrednosti se smatraju falsy: false, 0, '', null, undefined. NaN

Ostale vrednosti se smatraju truthy

*/
