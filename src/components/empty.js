import React from 'react';


const Empty = ({message}) => {
    return ( 
        <div  style={{borderStyle:'dashed',margin:20,borderWidth:2,padding:40,borderRadius:2,display:'flex'}}>
            <div className="col-xl-5" style={{alignItems:'center',justifyContent:'center',margin:'auto',textAlign:'center',fontSize:16}}>
                <img src="/assets/images/no-result-found.png" alt="Search" style={{width:100,height:100,marginRight:20}}/>  
                {message}
            </div>
        </div>
     );
}
 
export default Empty;


