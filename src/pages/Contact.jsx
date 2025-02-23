import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // External CSS

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://backend-6gkb.onrender.com/api/contact", formData);
            if (res.data.success) {
                setSuccess("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (err) {
            console.error("Error sending message", err);
        }
    };

    return (
        <div className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            {success && <p className="message-success">{success}</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className="contact-input"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="contact-input"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    className="contact-textarea"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="contact-btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;