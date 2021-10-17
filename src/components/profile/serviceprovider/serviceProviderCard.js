import { Link } from "react-router-dom";

const ProviderCard = ({title,content}) => {
    return ( 
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>{title}</h5>
                    </div>

                    
                    <div className="" style={{paddingTop:"25px"}}>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Services:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                First Service 
                                
                                <hr/>
                                First Service 
                                <hr/>
                                First Service 
                                <hr/>
                                <div style={{paddingTop:"20px",float:"right"}}>
                                    <Link to="serviceInfo" className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                        Edit 
                                        <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Districts:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                <div>
                                2 <hr/>
                                A,B,C,D <hr/>
                                </div>
                                <div style={{paddingTop:"20px",float:"right"}}>
                                    <Link to="/CSA/serviceInfo/" className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                        Edit 
                                        <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                   
                 </div>
            </div>
        </div>
     );
}
 
export default ProviderCard;