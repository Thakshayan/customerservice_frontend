import ViewWorker from "../components/employee/view/viewWorker";

import {useQuery, gql} from '@apollo/client';

import { useEffect } from "react";

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';




import {VIEW_MODERATORS} from "../GraphQL/Queries"  


const ViewEmployee = ({type}) => {

    const {error,loading, data} = useQuery(VIEW_MODERATORS);

    useEffect(()=>{
        
        console.log(data);
    },[data]);


    return ( 
        <div>
            {/* [ Pre-loader ] start */}
            <Preloader/>
            { /* [ Pre-loader ] End 
            [ navigation menu ] start */}
            <Navbar/>
            {/* </div> [ navigation menu ] end 
            [ Header ] start */}
            <Header/>
            {/*<!-- [ Header ] end --> */}
            <ViewWorker type={type}/>
        </div>
        
     );
}
 
export default ViewEmployee;