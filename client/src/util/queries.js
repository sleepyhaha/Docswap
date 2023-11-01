import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Me {
    me {
      _id
      name
      email
      description
      uploadedDocs {
        _id
        title
        description
        price
        location
      }
      purchasedDocs {
        _id
        title
        description
        price
        location
      }
    }
  }
`;
