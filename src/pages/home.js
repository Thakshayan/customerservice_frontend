import Content from '../components/home';

import {useQuery, gql} from '@apollo/client';
import {VIEW_MODERATORS} from "../GraphQL/Queries";
import { useEffect } from "react";
import {useState} from "react";

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';


function Home() {

    const {error,loading, data} = useQuery(VIEW_MODERATORS);
    const [datas,setData] = useState();

    useEffect(()=>{
        setData(datas)
        console.log(data,error,loading);
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
        {/*<!-- [ Main Content ] start -->*/}
        <Content/>
        {/*<!-- [ Main Content ] end --> */}
        </div>
    );
  }
  
  export default Home;
  