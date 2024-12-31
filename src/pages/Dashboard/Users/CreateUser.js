import Form from "../../../components/form";

function Createuser() { 
    return (
        <div style={{ flex: "1" }} >
            <Form create= {true} button='create' btnStyle= {true} navigate= 'dashboard/users'/>
        </div>
    );
}

export default Createuser;
