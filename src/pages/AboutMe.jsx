
import React from "react";
import Typical from "react-typical";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCloudinary } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutMe.css";

const AboutMe = () => {
const testimonials = [
{ text: "Sanjay is an exceptional developer with great problem-solving skills!", author: "Naveen" },
{ text: "His work on full-stack projects is outstanding!", author: "Vinay" },
{ text: "A highly skilled and passionate developer!", author: "Charan" }
];

const sliderSettings = {  
    dots: true,  
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    autoplay: true,  
    autoplaySpeed: 3000  
};  

return (  
    <section className="about-container">  
        <h2 className="about-title">

<Typical 
    steps={["Full Stack Web Developer", 2000, "App Developer (Future Goal)", 2000]} 
    loop={Infinity} 
    wrapper="span"
/>
</h2>

<p className="about-text">  
            I am a passionate <strong>Full Stack Web Developer</strong> skilled in modern web technologies.   
            I enjoy building high-performance applications and exploring innovative solutions.  
        </p>  

        <h3 className="section-heading">Tech Stack</h3>  
        <div className="tech-stack">  
            <div className="tech-card"><FaReact size={50} color="#61DBFB" /><p>React.js</p></div>  
            <div className="tech-card"><FaNodeJs size={50} color="#3C873A" /><p>Node.js</p></div>  
            <div className="tech-card"><SiMongodb size={50} color="#4DB33D" /><p>MongoDB</p></div>  
            <div className="tech-card"><SiExpress size={50} color="black" /><p>Express.js</p></div>  
            <div className="tech-card"><SiCloudinary size={50} color="#F38020" /><p>Cloudinary</p></div>  
        </div>  

        <h3 className="section-heading">My Journey</h3>  
        <div className="journey-timeline">  
            <div className="timeline-step"><strong>2023</strong> - Started Full Stack Development</div>  
            <div className="timeline-step"><strong>2024</strong> - Built Multiple Projects & Portfolio</div>  
            <div className="timeline-step"><strong>2025</strong> - Expanding to App Development</div>  
        </div>  

        <h3 className="section-heading">Fun Facts</h3>  
        <ul className="fun-facts">  
            <li>✅ I love building new projects every week.</li>  
            <li>✅ I enjoy solving complex coding challenges.</li>  
            <li>✅ I'm currently learning React Native for app development.</li>  
        </ul>  

        <h3 className="section-heading">What Others Say</h3>  
        <Slider {...sliderSettings} className="testimonial-slider">  
            {testimonials.map((testimonial, index) => (  
                <div key={index} className="testimonial-card">  
                    <p>"{testimonial.text}"</p>  
                    <span>- {testimonial.author}</span>  
                </div>  
            ))}  
        </Slider>  

        <h3 className="section-heading">Connect With Me</h3>  
        <div className="social-links">  
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>  
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>  
        </div>  
    </section>  
);

};

export default AboutMe;

