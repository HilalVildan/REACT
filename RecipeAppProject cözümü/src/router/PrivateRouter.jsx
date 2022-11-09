import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRouter = () => {
  return (
  JSON.parse(localStorage.getItem("kullanici")) === "hilal" &&
  JSON.parse(localStorage.getItem("kullanicipass"))=== "12345" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  ));
};
// kullanıcı hilal girdiyse rota ne diyorsa onu yap (Outlet), hilal değilse Login de kal (<Navigate to="/" />)
export default PrivateRouter;
