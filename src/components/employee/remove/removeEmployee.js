import BreadCrumb from "../../breadcrumb";
import ChangeCard from "../../form/changeCard";
import FinishCard from "../../finishCard";
import { useState,useEffect } from "react";

import { GET_WORKER } from "../../../GraphQL/Queries";
import { useQuery } from "@apollo/client";


const RemoveEmployeeCard = ({type}) => {

    const [id,setID] = useState('');


    

    return ( 
    <div className="pcoded-main-container main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/*<!-- [ breadcrumb ] start -->*/}
                    <BreadCrumb type={type} reason="Remove" />
                    {/*<!-- [ breadcrumb ] end -->*/}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/*<!-- [ Main Content ] start -->*/}

                                                       
                            {/*<!-- [ Remove card ] start -->*/}
                            <ChangeCard
                                title = {`Remove ${type}`}
                                setID = {setID}
                                childComponent ={
                                     
                                    <FinishCard
                                        title= {`Remove ${type}`}

                                        workerId = {id}
                                    />
                                }
                            />
                            {/*<!-- [ Remove card ] end -->*/}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    
}
 
export default RemoveEmployeeCard;