import React from 'react';

const ContactForm = () => (
  <div className="get-in-touch p-top-bottom">
    <div className="container">
      <div className="contact-wrap">
        <h2>Say Hello</h2>
        <form action="https://formspree.io/justinwhall@me.com" method="POST">
          <label htmlFor="your-name">
            Your Name
            <input type="text" id="your-name" name="name" required />
          </label>
          <label htmlFor="your-email">
            Your Email
            <input type="email" id="your-email" name="_replyto" required />
          </label>
          <label htmlFor="message">
            Your Message
            <textarea name="message" id="message" required />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </div>
);

export default ContactForm;