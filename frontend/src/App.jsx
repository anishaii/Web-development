import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PlantCare from "./pages/plantCare";
import MoneyPlant from "./pages/Detail/MoneyPlant";
import NeonPlant  from "./pages/Detail/NeonPlant";
import Orchid from "./pages/Detail/Orchid";
import SpiderPlant from "./pages/Detail/SpiderPlant";
import Palm from "./pages/Detail/Palm";
import Pineapple from "./pages/Detail/Pineapple";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <ProtectedRoute requireAuth={false}>
            <Login />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signup"
        element={
            <ProtectedRoute requireAuth={false}>
               <Signup />

            </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute requireAuth={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="plantcare" element={< PlantCare/>}/>
      <Route path="moneyplant" element={< MoneyPlant/>}/>
      <Route path="neonplant" element ={< NeonPlant/>}/>
      <Route path="orchid" element ={< Orchid/>}/>
      <Route path="spiderplant" element ={ <SpiderPlant/>}/>
      <Route path="palm" element ={<Palm/>}/>
      <Route path="pineapple" element ={<Pineapple/>}/>

   

    </Routes>

  );
};

export default App;
