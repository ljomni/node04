const dotenv = require('dotenv');
dotenv.config();

const name = process.env.MY_NAME || 'Name';
const city = process.env.MY_CITY || 'City';
const language = process.env.MY_LANGUAGE || 'Language';

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);

