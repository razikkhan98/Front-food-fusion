import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/home";
import UserLogin from "../../Common/UserLogin/userlogin";
import Menu from "../../Pages/Menu/menu";
const RouteRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<UserLogin />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>


                </Routes>
            </Router>
        </>
    );
};
export default RouteRoutes;