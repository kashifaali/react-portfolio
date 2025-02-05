import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import aboutImage from "../../assets/about.png";
import "./about.css";

const About = () => {
    const navigate = useNavigate();

    const handleDownload = () => {
        const resumeUrl = "/resume.pdf"; // Change this to your actual resume path
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Kashif_Ali_Resume.pdf"; // Set the downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div 
            className="about-container"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "tween", duration: 0.6 }}
        >
            {/* Close Button */}
            <button className="close-btn" onClick={() => navigate("/")}>
                <FaTimes />
            </button>

            {/* Left Side */}
            <div className="about-left">
                <h1 className="about-heading">ABOUT ME</h1>
                <p className="about-description">
                    I help business owners and busy web developers to design & develop
                </p>
                <div className="about-tags">
                    {[
                        "#javascript", "#react.js", "#redux", "#node.js", "#express.js",
                        "#mongoDB", "#mongoose", "#cloudinary", "#ejs", "#html", "#css",
                        "#sass", "#bootstrap", "#tailwind", "#git", "#github", "#aws",
                        "#terminal", "#adobeXD", "#figma"
                    ].map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="mern-heading">MERN STACK</h2>
                <div className="mern-logos">
                    {[
                        { src: "/mongodb.svg", name: "MongoDB", text: "M", color: "#4CAF50" },
                        { src: "/express.svg", name: "Express.js", text: "E", color: "#FFFFFF" },
                        { src: "/react.png", name: "React.js", text: "R", color: "#61DBFB" },
                        { src: "/nodejs.svg", name: "Node.js", text: "N", color: "#6CC24A" },
                    ].map((logo, index) => (
                        <div key={index} className="logo-container">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="mern-logo"
                                title={logo.name}
                            />
                            <span
                                className="logo-text"
                                style={{ color: logo.color }}
                            >
                                {logo.text}
                            </span>
                            <span
                                className="logo-tooltip"
                                style={{ backgroundColor: logo.color }}
                            >
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side */}
            <div className="about-right">
                <div className="image">
                <img
                    src={aboutImage}
                    alt="About"
                    className="about-image"
                />
                </div>
                

                {/* Resume Download Button */}
                <div className="resumebutton">
                <button className="resume-more" onClick={handleDownload}>
                    Download Resume
                    <span className="resumearrow">
                        <img src="/arrow.svg" alt="arrow" />
                    </span>
                </button>
                </div>
                
            </div>
        </motion.div>
    );
};

export default About;
