import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import EditServiceInfo from "../components/serviceprovider/edit/serviceInfo";
import { GET_SERVICE } from "../GraphQL/Queries";

const ServiceInfo = () => {

    const {error,loading,data} = useQuery(GET_SERVICE)

    const [services,setServices] = useState([])

    useEffect(()=>{
        if(data){
            setServices(data.getServices)
        }    
    },[data])
    
    return ( 
        <EditServiceInfo
            services={services}
        />
     );
}
 
export default ServiceInfo;