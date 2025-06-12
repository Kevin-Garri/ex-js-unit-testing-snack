const { getInitials, createSlug, average } = require("./snacks.js");


/*Snack 1
Creare un test che verifichi la seguente descrizione:
"La funzione getInitials restituisce le iniziali di un nome completo."*/
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
  expect(getInitials("Mario Rossi")).toBe("M.R.");
  expect(getInitials("luigi bianchi")).toBe("L.B.");
  expect(getInitials("Maria  Verdi")).toBe("M.V.");
});
/*Snack 2
Creare un test che verifichi la seguente descrizione:
"La funzione createSlug restituisce una stringa in lowercase."*/

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
  expect(createSlug("Titolo CON Maiuscole")).toBe("titolo con maiuscole");
});


/* Snack 3
Creare un test che verifichi la seguente descrizione:
"La funzione average calcola la media aritmetica di un array di numeri."*/
test('La funzsione "average" calcola la media aritmetica di un array di numeri', () => {
  expect(average([5, 15])).toBe(10)
  expect(average([10, 20, 30, 40, 50])).toBe(30)
});

/*Snack 4
Creare un test che verifichi la seguente descrizione:
"La funzione createSlug sostituisce gli spazi con -."
Esempi:
createSlug("Questo è un test") → "questo-e-un-test"*/

/*Snack 5
Creare un test che verifichi la seguente descrizione:
"La funzione isPalindrome verifica se una stringa è un palindromo."
Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.*/

/*Snack 6
Creare un test che verifichi la seguente descrizione:
"La funzione createSlug lancia un errore se il titolo è vuoto o non valido."*/

/*Snack 7
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
Creare un test che verifichi le seguenti descrizioni:
"La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).*/