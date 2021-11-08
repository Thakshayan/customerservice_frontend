import React from "react";
import { GET_ROLE } from "../../GraphQL/Queries";
import { Route, Redirect } from 'react-router-dom';
import { useQuery ,gql} from "@apollo/client";

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
    
  }
`

const WorkerRoute = ({ component: Component, ...rest }) => {
    const { loading, error, data } = useQuery(IS_LOGGED_IN);
    const type = localStorage.getItem('role')
    // if the data is loading, display a loading message
    if (loading) return <p>Loading...</p>;
    // if there is an error fetching the data, display an error message
   if (error) return <p>Error!</p>;
    //console.log(data)
    return (
      <Route
        {...rest}
        render={props =>
          
          data.isLoggedIn === true && type == "Worker" ? (
            
            <Component {...props} />
          ) : (
           <Redirect
              to={{
                pathname: '/signInWorker',
                state: { from: props.location }
              }}
            /> 
          )
        }
      />
    );
  };

  export default WorkerRoute;
  