import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";


export default function () {

  return (
    <>
    <MainHeader />
    <Outlet />
    </>
  )
}
