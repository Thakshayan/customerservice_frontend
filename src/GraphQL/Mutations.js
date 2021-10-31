import { gql } from '@apollo/client';




const SIGN_INSP = gql`
  mutation SignINSPMutation(
    $workerId: String!, 
    $password: String!) {

    signINSP(
      username: $workerId, 
      password: $password
      )
  }
`

const SIGNIN_MODERATOR= gql`
  mutation Mutation(
    $workerId: String!, 
    $password: String!) {
    signINModerator(
      username: $workerId, 
      password: $password)
  }
`

const ADD_MODERATOR = gql`
  mutation SignINSPMutation(
    $id: String!, 
    $password: String!, 
    $name: String!, 
    $nic: String!, 
    $email: String!, 
    $phone: String!, 
    $address: String!
    ) {
    addModerator(
      username: $id, 
      password: $password, 
      name: $name, 
      nic: $nic, 
      email: $email, 
      contact_no: $phone, 
      address: $address) {
      _id
    }
  }

`

const ADD_WORKER = gql`
  mutation Mutation(
    $id: String!, 
    $password: String!, 
    $name: String!, 
    $nic: String!, 
    $email: String!, 
    $phone: String!, 
    $address: String!
    ) {
    addWorker(
      username: $id, 
      password: $password, 
      name: $name, 
      nic: $nic, 
      email: $email, 
      contact_no: $phone, 
      address: $address) {
        _id 
    }
  }
`

const REJECT_BOOKING = gql`
  mutation CancelBookingMutation($ID: ID!) {
    cancelBooking(id: $ID)
  }
`

const UPDATE_READ = gql`
  mutation ReadMessageMutation(
    $readMessageId: ID) {
    readMessage(id: $readMessageId)
  }
`

const SEND_MESSAGE = gql`
  mutation SendMessageMutation(
    $to: String!,
    $message: String!) {

    sendMessage(
      to: $to, 
      message: $message) {
      _id
    }
  }
` 


const REMOVE_WORKER  = gql`
  mutation Mutation($workerId: ID!) {
    removeWorker(worker: $workerId)
  }
`

const REMOVE_MODERATOR = gql`
  mutation Mutation($workerId: ID!) {
    removeModerator(moderator: $workerId)
  }
`

const ADD_WORK = gql`
  mutation AppointmentMutation(
    $bookingID: ID!, 
    $workId: String!, 
    $date: Date!, 
    $estimation: String!, 
    $workers: [ID]) {

    appointment(
      booking: $bookingID, 
      appointment_id: $workId, 
      starting_date: $date, 
      duration: $estimation, 
      worker: $workers) {
      _id
    }
    confirmBooking(id: $bookingID)
  }
`






const ADD_SERVICE = gql`
  mutation Mutation($serviceName: String!, $icon: String!) {
    addService(service_name: $serviceName, icon: $icon) {
      service_name
      description
      icon
    }
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





// const UPLOAD_WORK_IMAGE = gql``


export {
    SIGN_INSP,


    ADD_MODERATOR,
    ADD_WORKER,

    REMOVE_MODERATOR,
    REMOVE_WORKER,

    REJECT_BOOKING,

    ADD_WORK,

    UPDATE_READ,
    SEND_MESSAGE,


    


    EDIT_BASIC,

    

    

    // UPLOAD_IMAGE,
    // UPLOAD_WORK_IMAGE,
    // UPDATE_PASSWORD,
    // ASSIGN_WORKER,

    
    
}