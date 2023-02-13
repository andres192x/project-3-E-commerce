const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Shirt {
    _id: ID
    itemName: String
    size: [String]
    inStock: Boolean
    category: String
    imgurl: String
  }

  type Query {
    findAllShirts: [Shirt]!
    findOneShirt(shirtId: ID!): Shirt
  }
`;

module.exports = typeDefs;
