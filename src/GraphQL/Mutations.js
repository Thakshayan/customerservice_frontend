import { gql } from '@apollo/client';


// const SIGNIN_USER = gql`
//   mutation SignINSPMutation(
//     $signInspUsername: String!, 
//     $signInspPassword: String!) {
//     signINSP(
//       username: "seyan12", 
//       password: "seyan12")
//   }
// `;

// const SIGNUP_USER = gql`
//   mutation signUp(
//     $email: String!, 
//     $signInspUsername: String!, 
//     $signInspPassword: String!) {
//     signUp(
//       email: $email, 
//       username: $signInspUsername, 
//       password: $signInspPassword)
//   }
// `;

const ADD_EMPLOYEE= gql`
  mutation Mutation(
      $id: String!, 
      $type: String!, 
      $password: String!, 
      $address: String!, 
      $name: String!, 
      $email: String!, 
      $phone: Int!, 
      $nic: String!) {
      addWorker(
          workerId: $id, 
          type: $type, 
          password: $password, 
          address: $address, 
          name: $name, 
          email: $email, 
          phone: $phone, 
          nic: $nic)
    }
`

const REMOVE_EMPLOYEE = gql`
mutation Mutation($workerId: String!) {

  removeWorker(
    workerId: $workerId) 
}
`

const ADD_WORK = gql`
  mutation Mutation(
    $jobTitle: String!, 
    $workId: String!, 
    $workers: [String!]!, 
    $phone: Int!, 
    $address: String!, 
    $description: String!, 
    $estimation: Int!) {

    addWork(
      jobTitle: $jobTitle, 
      workId: $workId, 
      worker: $workers, 
      phone: $phone, 
      Address: $address, 
      description: $description, 
      estimation: $estimation, 
      status: "confirmed")
  }
`

const SIGNIN_MODERATOR = gql`
  mutation Mutation(
    $workerId: String!, 
    $password: String) {

    signINModerator(
      workerId: $workerId, 
      password: $password)
  }
`

const EDIT_BASIC = gql`
  mutation Mutation(
    $workerId: String!, 
    $name: String!, 
    $address: String!, 
    $nic: String!, 
    $email: String!) {

    editBasic(
      workerId: $workerId, 
      name: $name, 
      address: $address, 
      nic: $nic, 
      email: $email)
  }

`

// const UPLOAD_IMAGE = gql``

// const UPDATE_PASSWORD = gql``

// const ASSIGN_WORKER = gql``

// const SEND_MESSAGE = gql`` 

// const UPDATE_READ = gql``

// const UPLOAD_WORK_IMAGE = gql``


export {
    ADD_EMPLOYEE,
    REMOVE_EMPLOYEE,
    EDIT_BASIC,

    ADD_WORK,

    SIGNIN_MODERATOR,

    // UPLOAD_IMAGE,
    // UPLOAD_WORK_IMAGE,
    // UPDATE_PASSWORD,
    // ASSIGN_WORKER,

    // SEND_MESSAGE,
    // UPDATE_READ,
}