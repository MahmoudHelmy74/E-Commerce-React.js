import Header from "../../../components/Header";
import Form from "../../../components/form";

function Signup() {
    
    return (
        <>
            <Header />
            <div className="parent">
               <Form signup= {true} button= 'Register' navigate=''/>
            </div>
        </>
    );
}
export default Signup;
