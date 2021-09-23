import ProfileContent from '../components/profile/employee/profile';

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';


function Profile() {
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
        <ProfileContent/>
        {/*<!-- [ Main Content ] end --> */}
        </div>
    );
  }
  
  export default Profile;
  