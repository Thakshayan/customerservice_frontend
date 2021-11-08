
//components
import Header from "../components/header";
import NavBar from '../components/navbar';
import NavBarWorker from '../components/navbarWorker';
import Preloader from '../components/preloader';

// Pages
import SignIn from "./signin";
import SignInWorker from "./signInWorker";
import SignUp from "./singnup";

import Home from './serviceProvider/home';
import AddEmployee from "./serviceProvider/addEmployee";
import AddModerator from "./serviceProvider/addModerator";
import ViewEmployee from "./serviceProvider/viewEmployee";
import ViewModerator from "./serviceProvider/viewModerator";
import Profile from "./serviceProvider/profile";
import AssignWorker from "./serviceProvider/assignWorker";
import ViewWork from "./serviceProvider/viewWork";
import ViewFinishWork from "./serviceProvider/viewFinishedWork";
import Work from "./serviceProvider/work";
import RemoveEmployee from "./serviceProvider/removeEmployee";
import EditLogo from "./serviceProvider/editLogo";
import EditWorkerInfo from "./serviceProvider/editEmployeeWorkerInfo";
import AddWork from "./serviceProvider/addWork";
import WorkRequest from "./serviceProvider/workRequest";
import ProviderProfile from "./serviceProvider/providerProfile";
import ServiceInfo from "./serviceProvider/serviceInfo";
import Message from "./serviceProvider/messages";
import ViewReview from "./serviceProvider/viewRating";
import RemoveModerator from "./serviceProvider/removeModerator";
import SPNotification from "./serviceProvider/notificationSP";
import Notification from "./serviceProvider/notification";

// import SPMessages from "./spMessages";


// import React and our routing dependencies
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import AddWorkImage from "./serviceProvider/addWorkImage";
import ModeratorProfile from "./serviceProvider/moderatorProfile";
import SuccessPage from "./success";


import WorkerHome from "./worker/home";
import WorkerMessage from "./worker/messages";
import WorkerNotification from "./worker/notification";
import WorkerViewWork from"./worker/viewWork"; 
import WorkerViewFinishWork from "./worker/viewWork"; 
import WorkerWork from "./worker/work";
import WorkerProfile from "./worker/profile";
import WorkerWorkImage from "./worker/addWorkImage";
import WorkerEditBasicInfo from "./worker/editEmployeeBasicInfo";
import WorkerEditPassword from "./worker/editEmployeeWorkerInfo"
import { GET_ROLE } from "../GraphQL/Queries";


import ProviderRoute from "../components/utils/providerRoute";
import WorkerRoute from "../components/utils/workerRoute";

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  
  }
`


// define our routes
const Pages = () => {
  return (
    <Router>

        
        <Route path="/signin" component={SignIn}/> 
        <Route path="/signup" component={SignUp}/>
        <Route path="/success" component={SuccessPage}/> 
        <Route path="/signInWorker" component={SignInWorker}/> 


        <WorkerRoute exact path="/Worker" component={WorkerHome}/> 
        <WorkerRoute exact path="/Worker/messages" component={WorkerMessage}/> 
        <WorkerRoute exact path="/Worker/notifications" component={WorkerNotification}/> 
        <WorkerRoute exact path="/Worker/viewWork" component={WorkerViewWork}/> 
        <WorkerRoute exact path="/Worker/viewFinishWork" component={WorkerViewFinishWork}/> 
        <WorkerRoute exact path="/Worker/work/:id" component={WorkerWork}/> 
        <WorkerRoute exact path="/Worker/profile" component={WorkerProfile}/> 
        <WorkerRoute exact path="/Worker/work/images" component={WorkerWorkImage}/> 
        <WorkerRoute exact path="/Worker/edit/basicInfo" component={WorkerEditBasicInfo}/> 
        <WorkerRoute exact path="/Worker/edit/password" component={WorkerEditPassword}/> 


        {/* <ProviderRoute exact path="/CSA" component={WorkerPages}/>   */}
        <ProviderRoute exact path="/CSA" component={Home}/>
        <ProviderRoute exact path="/CSA/addModerator" component={AddModerator}/>
        <ProviderRoute exact path="/CSA/addWorker" component={AddEmployee}/>
        <ProviderRoute exact path="/CSA/viewWorker" component={ViewEmployee}/>
        <ProviderRoute exact path="/CSA/viewModerator" component={ViewModerator}/>
        <ProviderRoute exact path="/CSA/removeWorker" component={RemoveEmployee}/>
        <ProviderRoute exact path="/CSA/removeModerator" component={RemoveModerator}/>
        <ProviderRoute exact path="/CSA/edit/basicInfo/" component={EditLogo}/>
        <ProviderRoute exact path="/CSA/edit/password" component={EditWorkerInfo}/>

        <ProviderRoute exact path="/CSA/profile/:id" component={Profile}/>
        <ProviderRoute exact path="/CSA/moderatorProfile/:id" component={ModeratorProfile}/>
        
        <ProviderRoute exact path="/CSA/assignWorker" component={AssignWorker}/>
        <ProviderRoute exact path="/CSA/addWork/:id" component={AddWork}/>
        <ProviderRoute exact path="/CSA/viewRequest" component={WorkRequest}/>
        <ProviderRoute exact path="/CSA/assignWorker/:id" component={AssignWorker}/>
        <ProviderRoute exact path="/CSA/viewWork" component={ViewWork}/>
        <ProviderRoute exact path="/CSA/viewFinishedWork" component={ViewFinishWork}/>      
        <ProviderRoute exact path="/CSA/work/:id" component={Work}/>
        <ProviderRoute exact path="/CSA/work/images/:id" component={AddWorkImage}/>

        <ProviderRoute exact path="/CSA/messages" component={Message}/>
        <ProviderRoute exact path="/CSA/messages/:id" component={Message}/>
        {/* <Route exact path="/CSA/messages" component={SPMessages}/> */}

        <ProviderRoute exact path="/CSA/notifications" component={SPNotification}/>
        <ProviderRoute exact path="/CSA/notifications/:id" component={Notification}/>

        <ProviderRoute exact path="/CSA/viewRating" component={ViewReview}/>
        <ProviderRoute exact path="/CSA/viewRating/:id" component={ViewReview}/>
        
        <ProviderRoute exact path="/CSA/serviceInfo" component={ServiceInfo}/>
        <ProviderRoute exact path="/CSA/profile" component={ProviderProfile}/>
       
        
  
        



    </Router>
  );
};

// const ProviderRoute = ({ component: Component, ...rest }) => {
//   const { loading, error, data } = useQuery(IS_LOGGED_IN);
//   // if the data is loading, display a loading message
//   if (loading) return <p>Loading...</p>;
//   // if there is an error fetching the data, display an error message
//   if (error) return <p>Error!</p>;
 
//   return (
//     <Route
//       {...rest}
//       render={props =>
        
//         data.isLoggedIn === true ? (
          
//           <Component {...props} />
//         ) : (
//          <Redirect
//             to={{
//               pathname: '/signin',
//               state: { from: props.location }
//             }}
//           /> 
//         )
//       }
//     />
//   );
// };

// const WorkerRoute = ({ component: Component, ...rest }) => {
//   const { loading, error, data } = useQuery(GET_ROLE);
//   // if the data is loading, display a loading message
//   if (loading) return <p>Loading...</p>;
//   // if there is an error fetching the data, display an error message
//   if (error) return <p>Error!</p>;
//   console.log(data.getMyRole)
//   return (
//     <Route
//       {...rest}
//       render={props =>
        
//         data.getMyRole === "Worker" ? (
          
//           <Component {...props} />
//         ) : (
//          <Redirect
//             to={{
//               pathname: '/signin',
//               state: { from: props.location }
//             }}
//           /> 
//         )
//       }
//     />
//   );
// };




export default Pages;
