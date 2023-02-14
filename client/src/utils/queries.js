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