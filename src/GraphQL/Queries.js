import {gql} from '@apollo/client';

const VIEW_MODERATORS = gql`
    query {
        Moderators {
            workerId
            phone
            name
            email
          }
    }
`;

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;


export {
    VIEW_MODERATORS,
    IS_LOGGED_IN
}