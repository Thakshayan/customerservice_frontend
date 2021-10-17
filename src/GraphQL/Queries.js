import {gql} from '@apollo/client';



const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

// const GET_WORKERS = gql`
// query Query {
//   showWorkers {
//     id
//     username
//     name
//     email
//     contact_no
//   }
// }
// `

const GET_WORKERS = gql`
query Query($page: Int, $offSet: Int, $type:String){

  getWorkers(
    page: $page, 
    offSet: $offSet, 
    type: $type) {
      id
      type
      workerId
      name
      email
      phone
      left_date
  }
  getWorkerCount(type:$type)
}
  

`; 



{/*

query Query {
  getMyWorkers {
    id
    username
    name
    email
    contact_no
  }
}



*/}




const GET_ME = gql`
  query Query {
    getMe{
      type
      workerId
      name
    }
  }
`



const GET_WORKER = gql`
  query Query($id:String) {
    getWorker(workerId:$id){
      id
      type
      workerId
      name
      email
      phone
      left_date
    }
  }
`

const WORKER_PERSONAL = gql`
query Query($id: String) {
  getWorker(workerId: $id) {
    id
    name
    address
    email
    nic
  }
}
`

const WORKER_PROFESSIONAL=gql`
query Query($id: String!) {
  getWorker(workerId: $id) {
    id
    SpID
    left_date
    phone
    rating
    workerId
  }
}
`

const GET_LEFTDATE = gql`
query Query($workerId: String){
  getWorker(workerId: $workerId) {
    left_date
  }
}
`

const GET_WORKS = gql`
query Query(

  $offSet: Int, 
  $page: Int, 
  $status: String) {

  getWorks (
    offSet: $offSet, 
    page: $page, 
    status: $status){
      jobTitle
      workId
      description
      date
  }

  getWorkCount(status: $status)
}
`

const GET_WORK = gql`
query Query($workId: String) {
  getWork(workId: $workId) {
    jobTitle
    workId
    date
    description
  }
}
`

const WORK_PROFILE = gql`
query Query($id: String) {
  getWork(workId: $id) {
    jobTitle
    workId
    phone
    date
    Address
    description
    estimation
    status
    finishDate
    customerId

  }
  
}
`

const GET_BOOKINGS = gql`
query Query(
  $offSet: Int, 
  $page: Int) {
    
  getBooking(
    offSet: $offSet, 
    page: $page) {
      by
      to
      workStation
      description
  }
}
`

// const GET_RATING = gql``

// const CHECK_ID = gql` `

// const GET_MESSAGES = gql``

// const GET_SP_NOTIFICATION = gql``

// const GET_SP_MESSAGE  = gql``

// const GET_BOOKING = gql``

// const GET_SP_HOME = gql``

// const GET_PROFILE = gql``

// const GET_SERVICEPROVIDER = gql``

// const GET_WORKIMAGE = gql``

export {
    
    IS_LOGGED_IN,

    GET_WORKERS,
    GET_WORKER,
    GET_LEFTDATE,
    WORKER_PERSONAL,
    WORKER_PROFESSIONAL,

    GET_BOOKINGS,

    GET_WORKS,
    GET_WORK,
    WORK_PROFILE,

    GET_ME,

    // GET_RATING,
    // CHECK_ID,
    // GET_MESSAGES
    // GET_SP_NOTIFICATION,
    // GET_SP_MESSAGE,
    // GET_NOTIFICATIONS,
    // GET_BOOKING,
    // GET_SP_HOME,
    // GET_SP_MESSAGES,
    // GET_PROFILE,
    // GET_SERVICEPROVIDER,
    // GET_WORKIMAGE
}