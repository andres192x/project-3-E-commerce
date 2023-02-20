import { gql } from '@apollo/client';

export const ADD_CART = gql`
mutation AddCart($itemName: String, $price: String, $imgurl: String) {
    addCart(itemName: $itemName, price: $price, imgurl: $imgurl) {
      imgurl
      itemName
      price
      userName
    }
  }
`;

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