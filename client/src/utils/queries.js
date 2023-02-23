import { gql } from '@apollo/client';

export const QUERY_SHIRTS = gql`
query FindAllShirts {
    findAllShirts {
      _id
      itemName
      price
      inStock
      imgurl
    }}
`;

export const QUERY_ONESHIRT=gql`
query FindOneShirt($shirtId: ID!) {
  findOneShirt(shirtId: $shirtId) {
    imgurl
    itemName
    price
  }
}
`;

export const QUERY_CART = gql`
query Query($userName: String!) {
  findUserCart(userName: $userName) {
    _id
    imgurl
    itemName
    price
    userName
  }
}
`;

export const QUERY_SHIRTCATEGORY=gql`
query Query($category: String) {
  findShirt(category: $category) {
    category
    imgurl
    inStock
    itemName
    price
  }
}
`