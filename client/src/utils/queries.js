import { gql } from "@apollo/client";

export const GET_ME = gql`
  query GET_ME {
    me {
      _id
      email
      savedBooks {
        _id
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
`;
