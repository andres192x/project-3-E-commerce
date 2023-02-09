const { Shirt } = require('../models');

const resolvers = {
  Query: {
    findAllShirts: async () => {
      return Shirt.find();
    },

    findOneShirt: async (parent, { shirtId }) => {
      return Shirt.findOne({ _id: shirtId });
    },
  },


  // Mutation: {
  //   addShirt: async (parent, { itemName, category}) => {
  //     return Shirt.create({ itemName, category });
  //   },

  //   removeShirt: async (parent, { id }) => {
  //     return Shirt.findOneAndDelete({ _id: id });
  //   },
  // },
};

module.exports = resolvers;
