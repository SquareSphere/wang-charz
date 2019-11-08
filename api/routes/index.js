const homebrews = require('./homebrews');
const wargear = require('./wargear');
const psychicPowers = require('./psychicPowers');
const talents = require('./talents');

const threats = require('./threats');

const users = require('./users');
const characters = require('./characters');

module.exports = app => {
  app.use('/homebrews', homebrews);
  app.use('/talents', talents);
  app.use('/wargear', wargear);
  app.use('/psychic-powers', psychicPowers);

  app.use('/threats', threats);

  app.use('/users', users);
  app.use('/characters', characters);
};
