import {Routes, Route } from 'react-router-dom';
import Footer from "../components/Footer.jsx";
import React from "react";
import Navbar from "../components/Navbar.jsx"
import Timeline from "../components/Timeline.jsx";
import Contact from "../components/Contact.jsx";
const Home = () => {


    return(
            <div className="min-h-screen font-inter">
                <Navbar />
                    <Routes>
                        <Route path="" element={<Timeline />}/>
                        <Route path="contact" element={<Contact />}/>
                    </Routes>
                <Footer />
            </div>
    )
}


export default Home