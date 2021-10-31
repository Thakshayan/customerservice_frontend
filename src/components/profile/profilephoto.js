import { useQuery } from '@apollo/client';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';



function PhotoCard({id,profile}){

    const [image,setImage] = useState("/assets/images/user/profile.jpg");

    return(
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 0px 30px'}}>
                    <div className="card-header">
                        <h5>Profile</h5>
                    </div>
                    <div>
                        {profile ? 
                            <img src={image} alt="" style={{display:'block',height:'200px',width:'250px',margin:'auto',paddingTop:'15px',justifyContent:'center'}}/> 
                        :
                            <img src="" alt="Image is loading"/>
                        }
                    </div>
                    <hr/>
                   <div style={{ margin:'15px',display:'flex'}}>
                        <Link to="/CSA" className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#5e8d25',borderColor:'#5e8d25'}}>
                           <i className="fas fa-chevron-circle-left"></i>
                           Back   
                        </Link>
                       <Link to={`/CSA/edit/basicInfo/${id}`} className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#038fcf'}}>
                           Edit
                           <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                        </Link>
                   </div>
                 </div>
            </div>
        </div>
    )
}

export default PhotoCard;