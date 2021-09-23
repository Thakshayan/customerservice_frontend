// import React and our routing dependencies
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';




// Pages
import Home from '../components/home';
import AddEmployee from "./addEmployee";
import ViewEmployee from "./viewEmployee";
import Profile from "./profile";
import AssignWorker from "./assignWorker";
import ViewWork from "./viewWork";
//import Work from "./pages/work";
import RemoveEmployee from "./removeEmployee";
import EditBasicInfo from "./editEmployeeBasicInfo";
import EditWorkerInfo from "./editEmployeeWorkerInfo";
import EditReview from "./editRating";
//import AddWork from ".addWork";
import WorkRequest from "./workRequest";
import ProviderProfile from "./providerProfile";
import SignUp from "./singnup";
import ServiceInfo from "./serviceInfo";
import SignIn from "./signin";



const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

// define our routes
const Pages = () => {
  return (
    <Router>

        <Route exact path="/signup" component={SignUp}/> 
        <Route exact path="/signin" component={SignIn}/> 


        <PrivateRoute exact path='/' component={Home}/>
      
        <PrivateRoute exact path='/addModerator'>
          <AddEmployee type="Moderator"/>
        </PrivateRoute>
        <PrivateRoute exact path='/addWorker'>
          <AddEmployee type="Worker"/>
        </PrivateRoute>
        <PrivateRoute exact path='/viewWorker'>
          <ViewEmployee type="Worker"/>
        </PrivateRoute>
        <PrivateRoute exact path='/viewModerator'>
          <ViewEmployee type="Moderator"/>
        </PrivateRoute>
        <PrivateRoute exact path='/profile/:id' component={Profile}/>
         
        <PrivateRoute exact path='/profile' component={ProviderProfile}/>
        
        <PrivateRoute exact path='/assignWorker' component={AssignWorker}/>
        
        <PrivateRoute exact path='/viewWork'>
          <ViewWork/>
        </PrivateRoute>
        <PrivateRoute exact path='/viewFinishedWork'>
          <ViewWork/>
        </PrivateRoute>
        
        {/* <PrivateRoute exact path='/work' component={Work}/>
         */}
        <PrivateRoute exact path='/removeWorker'>
          <RemoveEmployee type="Worker"/>
        </PrivateRoute>
        <PrivateRoute exact path='/removeModerator'>
          <RemoveEmployee type="Moderator" />
        </PrivateRoute>
        <PrivateRoute exact path='/edit/basicInfo/:id'>
          <EditBasicInfo type="Worker" />
        </PrivateRoute>
        <PrivateRoute exact path='/edit/workerInfo/:id'>
          <EditWorkerInfo type="Worker" />
        </PrivateRoute>
        <PrivateRoute exact path='/editRating'>
          <EditReview />
        </PrivateRoute>
        {/* <PrivateRoute exact path='/addWork'>
          <AddWork/>
        </PrivateRoute> */}
        <PrivateRoute exact path='/viewRequest'>
          <WorkRequest/>
        </PrivateRoute>
        <PrivateRoute exact path='/serviceInfo'>
          <ServiceInfo/>
        </PrivateRoute>



    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
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