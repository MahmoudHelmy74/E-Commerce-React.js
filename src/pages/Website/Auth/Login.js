import { useState } from "react";
import axios from "axios";
import Header from "../../../components/Header";

function Login() {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [accept, setaccept] = useState(false);
    //const [flag, setflag] = useState(true);
   
    async function submit(e) {
        e.preventDefault();
        let flag = true;
        setaccept(true);
        if (pass.length < 8) {
            flag = false;
        } else flag = true;
        try {
            if (flag) {
                //send data
                let res = await axios.post("http://localhost:8000/users", {
                    email: email,
                    password: pass,
                });
                if (res.status === 201) {
                    window.localStorage.setItem("email", email);
                    window.location.pathname = "/";
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
  
    const formStyle = { width:'400px', boxShadow: '0px 2px 8px rgba(0, 0, 0, .1)'};
    return (
        <>
            <Header />
            <div className="parent">
                <form style= {formStyle} onSubmit={submit}>
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
                    {pass.length < 8 && accept && (
                        <p className="error"> password must be more than 8 char</p>
                    )}
                    <div style={{ textAlign: "center" }}>
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
