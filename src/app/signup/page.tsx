"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";


export default function Signup() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [btnDisabled, setBtnDisabled] = React.useState(false);
    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
           setBtnDisabled(false)
        }
        else{
           setBtnDisabled(true)
        }
   },[user]);

   const [loading, setLoading] = React.useState(false);

    const signUp = async (event: any) => {
        event.preventDefault();
        try {
            setLoading(true);
            const responseUserInsert = await axios.post("/api/users/signup", user);
            console.log("Singup success " + responseUserInsert.data);
            router.push("/login");
        } catch (error: any) {
            console.log("Error occur" + error);
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    


    return (
        <>
            <div className="row">
                <div className="col-7 mx-auto my-5">
                    <h1 className="text-center display-3">{loading ? "Process.." : "Sign Up "}</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" value={user.username} onChange={(event) => setUser({ ...user, username: event.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} />
                            <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={user.password} onChange={(event) => setUser({ ...user, password: event.target.value })} />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={signUp} disabled={btnDisabled}>{btnDisabled ? "Fill the form" : "Submit"}</button>

                    </form>
                    <Link href="/login">Login</Link>
                </div>

            </div>
        </>
    );
}