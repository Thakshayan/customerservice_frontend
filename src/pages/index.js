
//components
import Header from "../components/header";
import NavBar from '../components/navbar';
import NavBarWorker from '../components/navbarWorker';
import Preloader from '../components/preloader';

// Pages
import Home from './home';
import AddEmployee from "./addEmployee";
import AddModerator from "./addModerator";
import ViewEmployee from "./viewEmployee";
import ViewModerator from "./viewModerator";
import Profile from "./profile";
import AssignWorker from "./assignWorker";
import ViewWork from "./viewWork";
import ViewFinishWork from "./viewFinishedWork";
import Work from "./work";
import RemoveEmployee from "./removeEmployee";
import EditBasicInfo from "./editEmployeeBasicInfo";
import EditWorkerInfo from "./editEmployeeWorkerInfo";
import EditReview from "./editRating";
import AddWork from "./addWork";
import WorkRequest from "./workRequest";
import ProviderProfile from "./providerProfile";
import SignUp from "./singnup";
import ServiceInfo from "./serviceInfo";
import SignIn from "./signin";
import Message from "./messages";
import ViewReview from "./viewRating";
import RemoveModerator from "./removeModerator";
import SPNotification from "./notificationSP";
import Notification from "./notification";

// import SPMessages from "./spMessages";

// import React and our routing dependencies
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import AddWorkImage from "./addWorkImage";
import ModeratorProfile from "./moderatorProfile";
import SuccessPage from "./success";






const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

// define our routes
const Pages = () => {
  return (
    <Router>

        
        <Route path="/signin" component={SignIn}/> 
        <Route path="/signup" component={SignUp}/>
        <Route path="/success" component={SuccessPage}/> 
        
      
        <Route path="/CSA"render={({ match:{url}}) => (
        <>
        {/* [ Pre-loader ] start */}
        <Preloader/>
        { /* [ Pre-loader ] End 

          [ navigation menu ] start */}
        <NavBar/>
        {/* </div> [ navigation menu ] end 

        [ Header ] start */}
        <Header/>
        {/*<!-- [ Header ] end --> */}
       
        <PrivateRoute exact path={`${url}/`} component={Home}/>
        <PrivateRoute exact path={`${url}/addModerator`} component={AddModerator}/>
        <PrivateRoute exact path={`${url}/addWorker`} component={AddEmployee}/>
        <PrivateRoute exact path={`${url}/viewWorker`} component={ViewEmployee}/>
        <PrivateRoute exact path={`${url}/viewModerator`} component={ViewModerator}/>
        <PrivateRoute exact path={`${url}/removeWorker`} component={RemoveEmployee}/>
        <PrivateRoute exact path={`${url}/removeModerator`} component={RemoveModerator}/>
        <PrivateRoute exact path={`${url}/edit/basicInfo/:id`} component={EditBasicInfo}/>
        <PrivateRoute exact path={`${url}/edit/workerInfo/:id`} component={EditWorkerInfo}/>
       

        <PrivateRoute exact path={`${url}/profile/:id`} component={Profile}/>
        <PrivateRoute exact path={`${url}/moderatorProfile/:id`} component={ModeratorProfile}/>
        

        <PrivateRoute exact path={`${url}/assignWorker`} component={AssignWorker}/>
        <PrivateRoute exact path={`${url}/addWork/:id`} component={AddWork}/>
        <PrivateRoute exact path={`${url}/viewRequest`} component={WorkRequest}/>
        <PrivateRoute exact path={`${url}/assignWorker/:id`} component={AssignWorker}/>
        <PrivateRoute exact path={`${url}/viewWork`} component={ViewWork}/>
        <PrivateRoute exact path={`${url}/viewFinishedWork`} component={ViewFinishWork}/>      
        <PrivateRoute exact path={`${url}/work/:id`} component={Work}/>
        <PrivateRoute exact path={`${url}/work/images/:id`} component={AddWorkImage}/>


        <PrivateRoute exact path={`${url}/messages`} component={Message}/>
        {/* <PrivateRoute exact path={`${url}/messages`} component={SPMessages}/> */}

        <PrivateRoute exact path={`${url}/notifications`} component={SPNotification}/>
        <PrivateRoute exact path={`${url}/notifications/:id`} component={Notification}/>

        
        <PrivateRoute exact path={`${url}/editRating`} component={EditReview}/>
        <PrivateRoute exact path={`${url}/viewRating`} component={ViewReview}/>
        <PrivateRoute exact path={`${url}/viewRating/:id`} component={ViewReview}/>
        
        <PrivateRoute exact path={`${url}/serviceInfo`} component={ServiceInfo}/>
        <PrivateRoute exact path={`${url}/profile`} component={ProviderProfile}/>
       
        
        </>
        )}
        />
  
    



    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...{console.log(data.isLoggedIn)}</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;

  return (
    <Route
      {...rest}
      render={props =>
        
        data.isLoggedIn === true ? (
          
          <Component {...props} />
        ) : (
         <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          /> 
        )
      }
    />
  );
};

export default Pages;
