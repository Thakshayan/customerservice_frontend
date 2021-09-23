import SpProfile from "../components/profile/serviceprovider/profile";

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';


const ProviderProfile = () => {
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
            <SpProfile/>
        </div>
        
     );
}
 
export default ProviderProfile;