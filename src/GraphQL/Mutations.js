import { gql } from '@apollo/client';


const SIGNIN_USER = gql`
mutation SignINSPMutation($signInspUsername: String!, $signInspPassword: String!) {
    signINSP(username: $signInspUsername, password: $signInspPassword)
  }
`;

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export {
    SIGNIN_USER,
    SIGNUP_USER
}