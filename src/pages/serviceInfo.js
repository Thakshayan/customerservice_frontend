import EditServiceInfo from "../components/serviceprovider/edit/serviceInfo";

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';


const ServiceInfo = () => {
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
            <EditServiceInfo/>
        </div>
       
     );
}
 
export default ServiceInfo;