import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectList.css";

// Default projects (always shown)
const defaultProjects = [
  {
    _id: "1",
    title: "Yumio",
    description: "Yumio is a seamless and user-friendly food ordering platform designed to bring delicious meals right to your doorstep. Whether you're craving a quick snack, a hearty meal, or a gourmet experience, Yumio connects you with the best restaurants and eateries in your area. With a simple and intuitive interface, users can effortlessly browse menus, customize their orders, and place them with just a few clicks. The platform offers a diverse range of cuisine options, from local favorites to international delicacies, ensuring that there is something for everyone. Additionally, Yumio provides real-time tracking, keeping users updated from restaurant preparation to doorstep delivery, making the entire food ordering process smooth and reliable..",
    techStack: ["React Js", "Node Js", "Express Js", "MongoDB"],
    images: ["./photo1.jpg", "./photo2.jpg", "./photo3.jpg","./photo4.jpg","./photo5.jpg"],
    liveDemo: "https://sanjay-adepu-yumio.onrender.com/",
    moreInfo: "", // Replacing GitHub with More Info
  },
  {
    _id: "2",
    title: "College Attendance Management",
    description: "The College Attendance Management System is a web-based application built using the MERN stack to streamline and automate attendance tracking for colleges. It provides an efficient platform for faculty and administrators to manage student attendance records with ease. Features include faculty-based attendance management, real-time tracking, department & year-wise organization, attendance summary & reports, past attendance editing with admin permissions, and a responsive UI. The tech stack includes React.js (Vite), Tailwind CSS, Node.js, Express.js, and MongoDB. The system ensures accurate and hassle-free attendance tracking, reducing manual efforts and improving efficiency in educational institutions.",
    techStack: ["React Js", "Node Js", "Express Js","Mongodb","Cloudnary"],
    images: ["./image1.jpg","./image2.jpg","./image3.jpg","./image4.jpg","./image5.jpg","./image6.jpg","./image7.jpg","./image8.jpg"],
    liveDemo: "https://tkrcet.vercel.app",
    moreInfo: "#",
  },
  {
    _id: "3",
    title: "Admin Panel of College Attendance Management",
    description:  "The College Attendance Management System is a robust and efficient platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline attendance tracking and department management. The system ensures seamless administration and provides secure role-based authentication for different users.\n\nThe system includes two primary roles: HOD and Admin. The HOD is responsible for managing only their respective department's data. This includes handling faculty details, timetables, section-wise schedules, student attendance, and maintaining records for entire sections. This role ensures that department heads have control over their domain without affecting other departments.\n\nThe Admin has full control over all department data and functionalities. In addition to managing faculty and student attendance records across departments, the admin has special privileges to grant edit permissions to faculty members for specific sections. This ensures flexibility in attendance modifications while maintaining security and accountability.\n\nWith an intuitive user interface and structured access control, the College Attendance Management System enhances efficiency in attendance tracking, department management, and faculty coordination, making it an essential tool for educational institutions.",
    techStack: ["React Js", "Node Js", "Express Js","Mongodb","Cloudnary"],
    images: ["./pic1.jpg","./pic2.jpg","./pic3.jpg","./pic4.jpg","./pic5.jpg","./pic6.jpg","./pic7.jpg"],
    liveDemo: "https://tkrc-admin.vercel.app",
    moreInfo: "#",
  },
    {
    _id: "4",
    title: "Professional Video Editing Portfolio",
    description:  "This React.js-based portfolio website showcases high-quality video editing projects with a sleek and interactive design. It highlights expertise in video production, post-processing, motion graphics, and storytelling. The website includes a curated collection of past works, client testimonials, and a contact section for collaboration opportunities..",
    techStack: ["React Js","Cloudnary"],
        images: ["./picl1.jpg","./picl2.jpg","./picl3.jpg","./picl4.jpg","./picl5.jpg"],
    liveDemo: "https://portfolio-two-nu-82.vercel.app/",
    moreInfo: "#",
  }
];

const ProjectsList = ({ darkMode }) => {
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null); // For fullscreen image

  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await fetch("https://backend-6gkb.onrender.com/data/fetch1");
      if (!response.ok) throw new Error("Failed to fetch projects");
      const data = await response.json();
      setProjects([...defaultProjects, ...data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProjects();
}, []);

  return (
    <div className={`projects-container ${darkMode ? "dark" : ""}`}>
      <h2 className="projects-title">My Projects</h2>
      {loading && <p className="loading">Fetching latest projects...</p>}
      {error && <p className="error"></p>}

      {projects.map((project) => (
        <div key={project._id} className={`project-card ${darkMode ? "dark" : ""}`}>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
<p className="project-tech">
  <strong>Tech Stack:</strong>
  {project.techStack.map((tech, index) => (
    <span key={index}>{tech}</span>
  ))}
</p>

<Swiper
  navigation
  pagination={{ clickable: true }}
  modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
  autoplay={{ delay: 3000, disableOnInteraction: false }} // Ensure autoplay works
  className="project-slider"
>
  {project.images.map((image, index) => (
    <SwiperSlide key={index} onClick={() => setLightboxImage(image)}>
      <img src={image} alt={`Project ${index + 1}`} className="project-image" />
    </SwiperSlide>
  ))}
</Swiper>

          <div className="project-links">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo">
              Live Demo
            </a>
            <a href={project.moreInfo} target="_blank" rel="noopener noreferrer" className="more-info">
              More Info
            </a>
          </div>
        </div>
      ))}

      {/* Lightbox Fullscreen View */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Full View" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default ProjectsList;