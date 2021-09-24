import { gql } from '@apollo/client';


const SIGNIN_USER = gql`
  mutation SignINSPMutation($signInspUsername: String!, $signInspPassword: String!) {
    signINSP(username: $signInspUsername, password: $signInspPassword)
  }
`;

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $signInspUsername: String!, $signInspPassword: String!) {
    signUp(email: $email, username: $signInspUsername, password: $signInspPassword)
  }
`;

export {
    SIGNIN_USER,
    SIGNUP_USER
}