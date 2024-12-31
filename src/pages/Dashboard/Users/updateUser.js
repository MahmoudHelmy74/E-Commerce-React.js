import { useEffect, useState } from "react";
import Form from "../../../components/form";

function UpdateUser() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");

    const id = window.location.pathname.split('/').slice(-1)[0];

    useEffect(() =>{
        fetch(`http://localhost:8000/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setemail(data.email);
            setname(data.username);
        })
    }, [])
    
                

    return (
        <div style={{flex:"1"}}>
            <h1 style={{paddingLeft:'20px'}}> update user</h1>
            <Form update= {true} name= {name} email= {email} button= 'Update' btnStyle= {true}/>
        </div>
    );
}

export default UpdateUser;
