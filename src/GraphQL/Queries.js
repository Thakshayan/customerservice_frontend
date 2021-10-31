import {gql} from '@apollo/client';



const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;





const GET_WORKERS=gql`
  query Query(
    $offset: Int!, 
    $page: Int!) {

    getMyWorkers(
      offset: $offset, 
      page: $page) {

      _id
      username
      name
      email
      contact_no
      left_date
    }

    getCountWorkers {
      Count
    }
  }
`

const GET_WORKER=gql`
query Query($workerId: ID!) {
  UniqueSearchWorker(worker: $workerId) {
    _id
    username
    name
    email
    contact_no
    left_date
  }
}
`

const GET_SEARCH_WORKER = gql`
query Query($workerId: String!) {
  getWorker(username: $workerId) {
    _id
    username
    name
    email
    contact_no
    left_date
  }
}
`

// const CHECK_WORKER = gql`
//   query Query($workerId: ID!) {
//     UniqueSearchModerator(moderator: $workerId) {
//       _id
//       username
//     }
//   }
// `

const GET_ASSIGNWORKER = gql`
  query Query($id: ID!) {
    UniqueSearchAppointment(appointment: $id) {
      worker {
        _id
        username
        name
        contact_no
        rating
      }
    }
  }
`

const GET_MODERATORS = gql`
  query Query(
    $offSet: Int!,
     $page: Int!) {

    getMyModerators(
      offset: $offSet,
       page: $page) {

      _id
      username
      name
      email
      contact_no
      left_date
    }

    getCountModerators {
      Count
    }
  }
`

const GET_MODERATOR = gql`
query Query($workerId: ID!) {
  UniqueSearchModerator(moderator: $workerId) {
    _id
    username
    name
    email
    contact_no
    left_date
  }
}
`

const GET_SEARCH_MODERATOR = gql`
query Query($workerId: String!) {
  getModerator(username: $workerId) {
    _id
    username
    name
    email
    contact_no
    left_date
  }
}
`

const SP_DASHBOARD = gql`
query Query($offset: Int!, $page: Int!) {
  getMyMessages(offset: $offset, page: $page) {
    _id
    by
    message
    read
    received_date
  }
  workStats {
    _id
    Count
  }
  getMyNotification(offset: $offset, page: $page) {
    _id
    message
    date
    state
  }
  bookingFeed {
    _id
    Count
  }
  ratingStats {
    Count
    _id
  }
}
`

const GET_FINISHEDWORK = gql`
query Query($workId: String!) {
  searchFinishAppointment(id: $workId) {
        _id
        starting_date
        appointment_id
        state
        booking {
          description
          by {
            username
          }
        }
        duration
  }
}
`
const GET_FINISHEDWORKS = gql`
  query Query(
    $offset: Int!, 
    $page: Int!) {

    getMyFinishedWorks(
      offset: $offset, 
      page: $page) {
        _id
        starting_date
        appointment_id
        state
        booking {
          description
          by {
            username
          }
        }
        duration
    }
    getCountAppointments {
      Count
      _id
    }
  }
` 

const GET_ONGOINGWORKS= gql`
query Query($offset: Int!, $page: Int!) {
  getMyOngoingWorks(offset: $offset, page: $page) {
    _id
    starting_date
    appointment_id
    booking {
      description
      by {
        username
      }
    }
    duration
  }
  getCountAppointments {
    Count
    _id
  }
}
`

const GET_ONGOINGWORK = gql`
query Query($workId: String!) {
  searchOpenAppointment(id: $workId) {
    _id
    duration
    starting_date
    appointment_id
    booking {
      workStationAddress
      description
      by {
        username
      }
    }
  }
}
`

const GET_NEWBOOKINGS = gql`
query Query($offset: Int!, $page: Int!) {
  getMyBooking(offset: $offset, page: $page) {
    by {
      username
    }
    date
    description
    workStationDistrict
    _id
  }
  getCountBooking {
    Count
    _id
  }
}
`

const GET_SEARCH_BOOKING = gql`
query Query($id: String!) {
  searchBooking(username: $id) {
    _id
    workStationAddress
    state
    workStationDistrict
    description
    date
    by {
      username
    }
  }
}
`

const WORK_PROFILE = gql`
query Query($id: ID!) {
  UniqueSearchAppointment(appointment: $id) {
    booking {
      by {
        username
        name
        contact_no
        email
        no_of_vote
        rating
      }
      state
      workStationDistrict
      workStationAddress
      description
      date
    }
    appointment_id
    starting_date
    state
    paid
  }
}
`

// const CHECK_WORK = gql``

const GET_SPPROFILE = gql`
query Query($offset: Int!, $page: Int!){
  getMySP {
    username
    name
    address
    contact_no
    email
    no_of_vote
    rating
    service
    bank_acc_no
    owner {
      owner_name
      owner_NIC
      contact_no
      profile
    }
    membership {
      membership_name
      membership_period
      membership_value
      description
    }
    workingRange
    joined_at
    state
    profile
  }
  ratingStats {
    Count
    _id
  }
  getMyNotification(offset: $offset, page: $page) {
    _id
    message
    date
    state
  }
}
`

const GET_SPSERVICE = gql`
query Query($offset: Int!, $page: Int!){
  getMySP {
    
    service
    workingRange

  }

}
`
const GET_SERVICE = gql`
  query Query {
    getServices {
      _id
      service_name
      description
      icon
    }
  }
`

const GET_SPNOTIFICATION = gql`
query Query($offset: Int!, $page: Int!) {
  getMyNotification(offset: $offset, page: $page) {
      _id
      message
      date
      state
    }
    getCountNotification {
      Count
    }
  }
`

const GET_MESSAGES = gql`
query Query($offset: Int!, $page: Int!) {

  getMyMessages(offset: $offset, page: $page) {
    _id
    by
    to
    message
    read
    received_date
  }

  getCountMessages {
  Count
  }
}

`

const GET_REVIEW = gql`
  query Query($offset: Int!, $page: Int!) {
    getMyReviews(offset: $offset, page: $page) {
      _id
      content
      rating
      by {
        username
      }
      createdAt
    }
    getCountReviews {
      Count
      _id
    }
  }
`

const GET_SEARCH_REVIEW = gql`
  query Query($customerId: String!) {
    getCustomerReview(username: $customerId) {
      _id
      by {
        username
      }
      createdAt
      content
      rating
    }
  }
`

















































const GET_ROLE = gql`
  query Query {
    getMyRole
  }
`

const GET_SPME = gql`
  query Query {
    SP_me {
      username
      name
    }
  }
`

const GET_ME = gql`
query Query {
  moderator_me {
    username
    name
  }
}
`










































// const GET_RATING = gql``

// const CHECK_ID = gql` `





// const GET_SP_MESSAGE  = gql``





// const GET_MODERATOR_PROFILE = gql``



// const GET_WORKIMAGE = gql``

export {
    
    IS_LOGGED_IN,

    GET_MODERATOR,
    GET_MODERATORS,
    GET_SEARCH_MODERATOR,

    GET_WORKERS,
    GET_WORKER,
    GET_SEARCH_WORKER,
    // CHECK_WORKER,
    GET_ASSIGNWORKER,
    
    SP_DASHBOARD,

    GET_FINISHEDWORK,
    GET_FINISHEDWORKS,

    GET_ONGOINGWORK,
    GET_ONGOINGWORKS,

    GET_NEWBOOKINGS,
    GET_SEARCH_BOOKING,

    WORK_PROFILE,

    GET_SPPROFILE,
    GET_SPNOTIFICATION,
    GET_SPSERVICE,

    GET_REVIEW,
    GET_SEARCH_REVIEW,

    GET_SERVICE,












    GET_ROLE,

    GET_SPME,
     
  
    GET_ME,

    // GET_RATING,
    // CHECK_ID,
    GET_MESSAGES,
    // GET_SP_NOTIFICATION,
    // GET_SP_MESSAGE,
    // GET_NOTIFICATIONS,
    // GET_BOOKING,
    // GET_SP_HOME,
    // GET_SP_MESSAGES,
    // GET_MODERATOR_PROFILE,
   
    // GET_WORKIMAGE
}