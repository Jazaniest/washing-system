import React from "react";
import Navbar from "../components/Navbar";
import HeroDashboard from "../components/HeroDashboard";
import Footer from "../components/Footer";

const Dashboard = () => {
    return(
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroDashboard />
            <Footer />
        </div>
    )
}

export default Dashboard;