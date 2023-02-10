const db = require('../config/connection');
const { Shirt } = require('../models');
const shirtSeeds = require('./shirtSeeds.json');

db.once('open', async () => {
  try {
    await Shirt.deleteMany({});
    await Shirt.create(shirtSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
