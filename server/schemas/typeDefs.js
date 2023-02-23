const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Shirt {
    _id: ID
    itemName: String
    size: [String]
    inStock: Boolean
    price: String
    imgurl: String
    category: String
  }

  type Cart {
    _id: ID
    itemName: String
    price: String
    imgurl: String
    userName: String
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
    userCart: [String]
  }

  type Auth {
    token: ID!
    user: User
  }
   
  type Query {
    findAllShirts: [Shirt]!
    findOneShirt(shirtId: ID!): Shirt
    findUserCart(userName: String!): [Cart]
    findShirt(category: String):[Shirt]
  }

  type Mutation {
    addCart(itemName:String, price:String, imgurl:String, userName:String, userID: String, qty: Int): Cart
    addUser(name: String!, email: String! , password: String!): Auth
    login(email:String!, password:String!): Auth
    removeCart(_id: ID!): Cart
  }

`;
module.exports = typeDefs;