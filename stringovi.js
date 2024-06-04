/*

U JS string je primitivan tip podatka koji se koristi za predstavljanje tekstualnih vrednosti. String se sastoji od niza karaktera i uvek je okruzen jednostrukim (' ') ili dvostrukim (" ") navodnicima

Bitne karakteristike

1. Nepromenljivost (Immutability): Stringovi su nepromenljivi, sto znaci da se ne mogu menjati nako sto su kreirani. Dakle svaka operacija koja izgleda kao da menja string zapravo kreira novi string

2. Indeksiranje: Svakom karakteru u stringu se moze pristupiti pomocu indeksa. Indeksi od 0 za prvi karakter i povecavaju se za 1 za svaki sledeci karakter.

3. Duzina: Svojstvo length, koje se koristi za dobijanje duzine stirnga, odnosno broja karakterau stringu


*/

let str1 = "Zdravo, svete!";
let str2 = "Javaskripta je zabavan jezik!";
let str3 = `Stringove mozemo da pravimo i sa back tick`;

console.log(str1[0]);
console.log(str1[8]);
console.log(str1[str1.length - 1]);

console.log(str1[22]); // kada pokusamo da pristupimo elementu preko indeksa van okvira niza, vraca undefined

/*

Stringovi u JS imaju brojne ugradjene metode za manipulaciju i rad sa njima kao sto su toLowerCase(), toUpperCase(), substring(), split() i mnoge druge. Preko ovakvih metoda mozemo da izvodimo razlicite operacije na stringovima ,poput promene velciine slova, izdvajanja delova, podele stringa na podstringove itd itd 

*/

console.log(str3.toUpperCase());
console.log(str3.substring(0, 6));
console.log(str3.split(" "));
