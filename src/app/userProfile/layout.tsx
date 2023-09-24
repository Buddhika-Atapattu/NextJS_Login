"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, {useState} from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logOut = async (event: any) => {
    
    event.preventDefault();
    try {
      const respose = await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      router.push("/login");
    } catch (error: any) {
      console.log("Error occur " + error.message);
      toast.error(error.message);
    }
  }

  const getUser = async () =>{
      const res  = await axios.get("/api/users/me");
      console.log(res.data.data._id);
      setData(res.data.data._id)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" href="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Contact</Link>
            </li>
          </ul>

        </div>
        <h1 className="text-light mx-3">{data === "nothing" ? "Nothing" : <Link href={`/userProfile/${data}`}>{data}</Link>}</h1>
        <button onClick={getUser} type="button" title="Button Logout" className="ms-auto me-3 btn btn-success">Get Data</button>
        <button onClick={logOut} type="button" title="Button Logout" className="ms-auto btn btn-danger">Logout</button>
      </nav>
      <section>
        <div className="container">
          {children}
        </div>
      </section>
    </>

  )
}