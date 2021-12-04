import { BrowserRouter as Router,Link } from "react-router-dom";
import {useHistory} from "react-router-dom";

const Success = () => {

    const styles = {
        successContainer:{
            width:'100vw',
            height:'100vh',
            backgroundColor:'#20c997',
            position:'relative'
        },
        successWrapper:{
            top:'40%',
            position:'absolute',
            left:'50wh',
            alignSelf:'center',
            color:'white'
        },
        successElement:{
            color:'white',
            textAlign:'center',
            width:'100vw'
        },
        successButtonContainer:{
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'30px'
        },
        successButton:{
            color:'white',
            textAlign:'center',
            backgroundColor:'#1de9b6',
            width:'100px',
            margin:'auto',
            padding:'5px 15px',
            borderWidth:0
        }
    }

    const history = useHistory();

    return ( 

        <div style={styles.successContainer}>

            <div style={styles.successWrapper}>
                <h1 style={styles.successElement}> 
                    Success 
                    <i className="far fa-thumbs-up" style={{paddingLeft:10}}></i>
                </h1> 
                <h6 style={styles.successElement}> 
                    Request is sucessfully submitted
                </h6>
                <div style={styles.successButtonContainer}>
                    <button onClick={() => history.goBack()}  style={styles.successButton}> 
                        Back
                    </button>
                </div>
            </div>
            

        </div>
     );
}
 
export default Success;