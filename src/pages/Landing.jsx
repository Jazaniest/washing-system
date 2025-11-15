import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Landing = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    
    return(
        <div className="min-h-screen bg-white">
            <Navbar 
                showLoginModal={showLoginModal} 
                setShowLoginModal={setShowLoginModal}
                showRegisterModal={showRegisterModal}
                setShowRegisterModal={setShowRegisterModal}
            />
            <Hero setShowLoginModal={setShowLoginModal} />
            <Footer />
        </div>
    )
}

export default Landing;