import { BrowserRouter as Router, Link } from "react-router-dom";

const BreadCrumb = ({type,reason}) => {
    return ( 
        <div className="page-header">
            <div className="page-block">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="page-header-title">
                            <h5 className="m-b-10">{type}</h5>
                        </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/"><i className="feather icon-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="/">{type}</a></li>
                                <li className="breadcrumb-item"><a href="#0">{reason} {type}</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BreadCrumb;