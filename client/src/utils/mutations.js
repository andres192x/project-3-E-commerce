import { gql } from '@apollo/client';

export const ADD_CART = gql`
mutation AddCart($itemName: String, $price: String, $imgurl: String, $userName: String, $qty: Int, $userID: String) {
  addCart(itemName: $itemName, price: $price, imgurl: $imgurl, userName: $userName, qty: $qty, userID: $userID) {
    imgurl
    itemName
    price
    userName
  }
}
`;

// export const ADD_CART = gql`
// mutation AddCart($itemName: String, $price: String, $imgurl: String, $userName: String, $userID: ID) {
//   addCart(itemName: $itemName, price: $price, imgurl: $imgurl, userName: $userName, userID: $userID) {
//     imgurl
//     itemName
//     price
//     userName
//   }
// }
// `;

export const NEW_LOGIN = gql`
mutation NewLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        password
      }
    }
  }
`

export const ADD_USER = gql`
mutation Mutation($name: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password) {
    token
    user {
      email
      password
      userCart
      name
    }
  }
}
`

export const DELETE_ITEM = gql`
mutation Mutation($_id: ID!) {
  removeCart(_id: $_id) {
    _id
    itemName
    userName
  }
}
`