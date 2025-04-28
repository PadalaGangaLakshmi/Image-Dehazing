import React from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const sendMail = (e) => {
        e.preventDefault(); // Prevents the page from refreshing

        emailjs.init("dz2VT9HzALA49hzNW"); // Initialize EmailJS with your Public Key

        const form = e.target;
        const params = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        emailjs.send("service_gp8bdr7", "template_xaet6oy", params)
            .then(response => {
                alert("Email Sent Successfully!");
            })
            .catch(error => {
                alert("Failed to send email. Please try again.");
            });

        form.reset(); // Clear the form after submission
    };

    return (
        <form onSubmit={sendMail}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send Email</button>
        </form>
    );
};

export default ContactForm;
