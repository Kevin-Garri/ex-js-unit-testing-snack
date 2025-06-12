function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(titolo) {
  if (!titolo) {
    throw new Error('non valido')
  }
  return titolo.toLowerCase().replaceAll(" ", "-");
}

function average(numeri) {
  return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
}

function isPalindrome(parola) {
  const parolaInversa = parola.split('').reverse().join('');
  return parola === parolaInversa;
}

function findPostById(posts, id) {
  if (isNaN(id)) {
    throw new Error(`"${id}" non è un id`);
  }
  posts.forEach(p => {
    if (
      p.id === undefined ||
      p.title === undefined ||
      p.slug === undefined
    ) {
      throw new Error('array non è corretto')
    }
  })
  return posts.find(p => p.id === id) || null;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
}