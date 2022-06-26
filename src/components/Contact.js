// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css";

const Contact = ({profile}) => {
    return (
        <div class="contact">
      <img class="photo" src={profile.photo}></img>
      <div class="profile">
        <p>{profile.name}</p>
        <p>{profile.phone}</p>
        <p>{profile.email}</p>
      </div>
    </div>
    )
}

export default Contact;