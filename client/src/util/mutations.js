import { gql } from "@apollo/client";

export const SIGNIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signUp(
    $name: String!
    $email: String!
    $password: String!
    $description: String!
    $profilePic: String!
  ) {
    signUp(
      name: $name
      email: $email
      password: $password
      description: $description
      profilePic: $profilePic
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPLOAD = gql`
  mutation uploadDoc(
    $title: String!
    $author: ID!
    $description: String!
    $price: Int!
    $preview: String!
    $location: String!
  ) {
    uploadDoc(
      title: $title
      author: $author
      description: $description
      price: $price
      preview: $preview
      location: $location
    ) {
      title
      description
      author
      price
      preview
      location
    }
  }
`;
