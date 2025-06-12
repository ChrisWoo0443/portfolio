import React from 'react';
import '../styles/apps/ContactsWindow.css';

/**
 * ContactsWindow component displays contact information
 */
const ContactsWindow: React.FC = () => {
  const contacts = [
    { type: 'Email', value: 'john.doe@example.com', icon: '✉️', link: 'mailto:john.doe@example.com' },
    { type: 'LinkedIn', value: 'linkedin.com/in/johndoe', icon: '🔗', link: 'https://linkedin.com/in/johndoe' },
    { type: 'GitHub', value: 'github.com/johndoe', icon: '💻', link: 'https://github.com/johndoe' },
    { type: 'Twitter', value: '@johndoe', icon: '🐦', link: 'https://twitter.com/johndoe' },
    { type: 'Phone', value: '+1 (555) 123-4567', icon: '📱', link: 'tel:+15551234567' },
    { type: 'Location', value: 'San Francisco, CA', icon: '📍', link: null },
  ];

  return (
    <div className="contacts-window">
      <div className="contacts-header">
        <h1>Contact Information</h1>
        <p>Feel free to reach out through any of these channels:</p>
      </div>
      
      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-details">
              <h3>{contact.type}</h3>
              {contact.link ? (
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  {contact.value}
                </a>
              ) : (
                <p>{contact.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="contact-form">
        <h2>Send a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Your message"></textarea>
          </div>
          
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactsWindow;