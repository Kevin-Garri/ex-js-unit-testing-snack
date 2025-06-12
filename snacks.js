function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(titolo) {
  return titolo.toLowerCase().replaceAll(" ", "-");
}

function average(numeri) {
  return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
}

function isPalindrome(parola) {
  const parolaInversa = parola.split('').reverse().join('');
  return parola === parolaInversa;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
}