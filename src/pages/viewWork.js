import ViewWorks from "../components/work/view/viewWork";

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';


const ViewWork = () => {
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
            <ViewWorks/>
        </div>
        
     );
}
 
export default ViewWork;