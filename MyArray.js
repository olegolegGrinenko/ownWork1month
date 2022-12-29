const languages = ['ua', 'fr', 'pl', 'en'];

const deleteFirst = languages.shift();
console.log(deleteFirst);
const addFirst = languages.unshift('ua');
console.log(languages);