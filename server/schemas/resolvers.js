const { Shirt } = require('../models');
const { Cart } = require('../models');
const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    findAllShirts: async () => {
      return Shirt.find();
    },

    findOneShirt: async (parent, { shirtId }) => {
      return Shirt.findOne({ _id: shirtId });
    },

    findAllCart: async () => {
      return Cart.find();
    }
  },

  Mutation: {
    // addCart: async (parent, { itemName, price, imgurl }) => {
    //   return Cart.create({ itemName, price, imgurl })
    // },
    addCart: async (parent, { itemName, price, imgurl }, context) => {
      if (context.user) {
        const cart = await Cart.create(
          {
          itemName,
          price,
          imgurl,
          userName: context.user.name
          });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { cart: cart._id } }
        );

        return cart;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    // addSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },


    //   addShirt: async (parent, { itemName, category}) => {
    //     return Shirt.create({ itemName, category });
    //   },

    //   removeShirt: async (parent, { id }) => {
    //     return Shirt.findOneAndDelete({ _id: id });
    //   },
  }
};
module.exports = resolvers;