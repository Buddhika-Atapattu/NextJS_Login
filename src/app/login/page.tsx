"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import { toast } from "react-hot-toast";

export default function LoginRouter() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = React.useState(false);
    const [btnDisabled, setBtnDisabled] = React.useState(false);
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setBtnDisabled(false)
        }
        else {
            setBtnDisabled(true)
        }
    }, [user]);


    const login = async (event: any) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login",user);
            console.log("Login successsful " + response);
            toast.success("Login successsful");
            router.push("/userProfile/");
        } catch (error: any) {
            console.log("Error occur " + error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-7 mx-auto my-5">
                            <h1 className="text-center display-3">{loading ? "Loading..." : "Login"}</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={user.password} onChange={(event) => setUser({ ...user, password: event.target.value })} />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={login} disabled={btnDisabled}>{btnDisabled? "Fill the form" : "Login"}</button>
                            </form>
                            <Link href="/signup">Singup</Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}