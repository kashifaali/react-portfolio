import React from "react";
import aboutImage from "../../assets/about.png";
import "./about.css";

const About = () => {
    return (
        <div className="about-container">
            {/* Left Side */}
            <div className="about-left">
                <h1 className="about-heading">ABOUT ME</h1>
                <p className="about-description">
                    I help business owners and busy web developers to design & develop
                    creative websites that fit their vision and attract visitors to stay
                    forever. Technologies and tools that I use to create such awesome
                    websites:
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
                <img
                    src={aboutImage}
                    alt="About"
                    className="about-image"
                />
            </div>
        </div>
    );
};

export default About;
