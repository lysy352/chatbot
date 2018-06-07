const path = require('path');
const fs = require('fs');

function readSentencesFromFile() {
  return fs.readFileSync(path.join(__dirname, '../../private/en-pl.tmx'), 'utf-8')
    .split('\n')
    .filter(l => l.indexOf('xml:lang="pl"') >= 0)
    .map(l => l.match(/.*<seg>(.*)<\/seg>.*/)[1])
    .map(l => l.replace(/^\s*-\s*/, ''));
}

class ResponseManager {
  constructor() {
    this.sentences = readSentencesFromFile();
  }

  getRandomResponse() {
    return this.sentences[Math.floor(Math.random() * this.sentences.length)];
  }
}

module.exports = new ResponseManager();
