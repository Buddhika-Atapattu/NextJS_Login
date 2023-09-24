import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap"
import LoginRouter from "./login/page";

export default function Home() {
  return (
    <>
      <LoginRouter />
    </>
  )
}
