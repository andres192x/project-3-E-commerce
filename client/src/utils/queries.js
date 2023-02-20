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
query Query {
  findAllCart {
    imgurl
    itemName
    price
  }
}
`;