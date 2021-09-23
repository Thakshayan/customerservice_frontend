import EditReviewDetail from "../components/rating/edit/editReviewDetail";

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';


function EditReview() {
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
                <EditReviewDetail type="Rating"/>
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditReview;
  