import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { user } from "../pages/Website/context/context";

function Form(props) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [passR, setpassR] = useState("");
    const [accept, setaccept] = useState(false);
    const id = window.location.pathname.split('/').slice(-1)[0];
    useEffect(() => {
        setname(props.name);
        setemail(props.email); 
    }, [props.name, props.email])

    async function submit(e) {
        e.preventDefault();
        let flag = true;
        setaccept(true)
        if (name === '' || pass.length < 8 || passR !== pass) {
            flag = false;
        } else (flag = true);
        if (flag) {

        try {
            //send data
            let res;
            if (props.signup || props.create) {
                res = await axios.post('http://localhost:8000/users', {
                    username: name,
                    email: email,
                    password: pass,
                });
                if (res.status === 201) {
                    props.signup && window.localStorage.setItem("email", email);
                    window.location.pathname = `/${props.navigate}`
                }
            }
            if (props.update) {
                res = await axios.patch(`http://localhost:8000/users/${id}`, {
                    username: name,
                    email: email,
                    password: pass,
                });
            }
            if (res.status === 200) {
                window.location.pathname = '/dashboard/users'
            }
        } catch (err) {
            console.log(err)
        }
    }
    }

    const formStyle = { width: '400px', boxShadow: '0px 2px 8px rgba(0, 0, 0, .1)' };
    const buttonStyle = { width: '100%'}
    return (
        <>
            <form style={props.signup && formStyle} onSubmit={submit}>
                <label htmlFor="name"> Name : </label>
                <input
                    type="text"
                    id="name"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                {name === '' && accept && <p className="error">user name is required</p>}
                <label htmlFor="email"> Email : </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                />
                <label htmlFor="pass"> Password : </label>
                <input
                    type="password"
                    id="pass"
                    placeholder="password "
                    value={pass}
                    onChange={(e) => setpass(e.target.value)}
                />
                {pass.length < 8 && accept && <p className="error"> password must be more than 8 char</p>}
                <label htmlFor="repeat"> Repeat Password : </label>
                <input
                    type="password"
                    id="repeat"
                    placeholder="repeat password "
                    value={passR}
                    onChange={(e) => setpassR(e.target.value)}
                />
                {passR !== pass && accept && <p className="error"> password does not match</p>}
                <div style={{ textAlign: "center" }}>
                    <button type="submit" style={props.btnStyle&&buttonStyle} >{props.button}</button>
                </div>
            </form>
        </>
    );
}
export default Form;
