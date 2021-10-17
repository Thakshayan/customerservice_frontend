//components
import Content from '../components/home';


import { useEffect, useState } from 'react/cjs/react.development';
import { useQuery } from '@apollo/client';



function Home() {

    const [content,setContent] = useState([]);

    // const {error,loading,data} = useQuery(GET_SP_HOME);

    // useState(()=>{
    //     if(data){
    //         setContent(data)
    //     }
    // },[data])

    var refresh = window.localStorage.getItem('refresh');
    if (refresh===null){
        window.location.reload();
        window.localStorage.setItem('refresh', "1");
    }

    return (
        <div>
        {/*<!-- [ Main Content ] start -->*/}
         <Content content={content}/> 
        {/*<!-- [ Main Content ] end --> */}
        </div>
    );
  }
  
  export default Home;
  