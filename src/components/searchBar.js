// import { useQuery } from "@apollo/client";
// import { useState } from "react";
// import { useEffect } from "react/cjs/react.development";
// import { GET_WORKER } from "../GraphQL/Queries";

// const SearchBar = ({placeholder,setCardContent,setId,id,CONST}) => {

//     const [Id,setID] = useState(id);
//     const fetchContent = useQuery(GET_WORKER,{
//         variables:{ id:Id }
//     });

//     useEffect(()=>{
//         if(Id){
//             if(fetchContent.data){
//                 setCardContent(fetchContent.data.getWorker)
//             }
//         }   
//     },[fetchContent])

//     const handleSubmit = (event)=>{
//         event.preventDefault()
//         setId(Id)
//         if(Id){
//             fetchContent.refetch({
//             id:Id
//             }).then(data=> {

//                 if(fetchContent.data){
//                     setCardContent(fetchContent.data.getWorker)
//                 }
//                 setId(Id)
//             })
//         }
//     }


    

//     // useEffect(()=>{
        
//     //     if(error){

//     //     }
//     //     if(data){
//     //         console.log(data);
//     //     }

//     // },[data])

//     // const handleSubmit = (e) =>{
//     //     e.preventDefault();

       
//     //     if (id){
//     //         fetchContent(id)
//     //         setID(id)
//     //     }else{
//     //         setCardContent([]);
//     //     }
         
//     // }

//     return ( 
//         <div>
//             <div className="row justify-content-center">
//                 <form className="d-flex justify-content-center" onSubmit={handleSubmit} style={{width:'100%'}}>
//                     <div className="col-6 col-sm-6 col-xl-8 search-input" >
//                         <input type="text" value={Id||''} className="form-control mb-4" aria-label="search bar" onChange={ e => setID(e.target.value) } placeholder={placeholder} style={{background:"white"}}/>  
//                     </div>
//                     <div className="search-button">
//                         <button type="submit" className="btn btn-md btn-primary" aria-label="search button">
//                             Search &nbsp;
//                             <i className="fa fa-search"> </i>
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//      );
// }
 
// export default SearchBar;



import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";


const SearchBar = ({placeholder,setId,id}) => {

    const [Id,setID] = useState(id);


    const handleSubmit = (event)=>{
        event.preventDefault()
        setId(Id)
        if(Id){
            setId(Id)
            // fetchContent.refetch({
            // id:Id
            // }).then(data=> {

            //     if(fetchContent.data){
            //         setCardContent(fetchContent.data.getWorker)
            //     }
                
            // })
        }
    }



    return ( 
        <div>
            <div className="row justify-content-center">
                <form className="d-flex justify-content-center" onSubmit={handleSubmit} style={{width:'100%'}}>
                    <div className="col-6 col-sm-6 col-xl-8 search-input" >
                        <input type="text" value={Id||''} className="form-control mb-4" aria-label="search bar" onChange={ e => setID(e.target.value) } placeholder={placeholder} style={{background:"white"}}/>  
                    </div>
                    <div className="search-button">
                        <button type="submit" className="btn btn-md btn-primary" aria-label="search button">
                            Search &nbsp;
                            <i className="fa fa-search"> </i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SearchBar;