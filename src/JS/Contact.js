import React from 'react' ;
import emailjs from 'emailjs-com' ;
import '../CSS/Contact.css'
import contactImg from '../img/coral5.jpg'

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9mzx5fd','template_h8orlpy' , e.target, 'cYf-d92KM9JxXuQfy')
        .then((result) => {
        	alert("Message Sent , I will get back to you shortly", result.text);
        },
        (error) => {
        	alert("An error occurred, Please try again", error.text);
        });
        };
    return (
        <div className="contact component__space" id="Contact">
           <div className="row">
               <div className="col__2">
                   <div className="contact__box">
                       <div className="contact__meta">
                           <h1 className="hire__text">Contact me</h1>
                           <p className="hire__text white">Phone : <strong>052-6650522 </strong></p>
                           <p className="hire__text white">Email : <strong> CORALAVITAL@ICLOUD.COM</strong></p>
                       </div>
                       <div className="input__box">
                           <form onSubmit={handleSubmit}>
                           <input name='name' type="text" className="contact name" placeholder="Your name *" required/>
                           <input name='email' type="email" className="contact email" placeholder="Your email *" required/>
                           <textarea name="message" id="message" placeholder="Write Your message" required></textarea>
                           <button className="btn contact pointer" type="submit" value='Send'>submit</button>
                           </form>
                       </div>
                   </div>
               </div>
               <div className="col__2">
                   <img src={contactImg} alt="" className="contact__img" />
               </div>
           </div>
        </div>
    )
}

export default Contact
