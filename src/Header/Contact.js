import React from "react";

function Contact() {
  return (
    <>
      <center>
        <h1 style={{ marginTop: "40px" }}>Contact</h1>
      </center>
      <div className="Contact">
        <div className="getTouch">
          <h2>Contact Me</h2>
          <p style={{ paddingTop: "3px" }}>
            Thank you for taking the time to explore my portfolio. I'm thrilled
            at the prospect of connecting with you. Whether you have a project
            in mind, want to discuss potential collaborations, or simply have
            questions about my work, I'm here and ready to engage. Feel free to
            reach out using the contact form below or connect with me through
            the social media links provided. I value open communication and am
            eager to learn more about your needs and how we can work together to
            achieve your goals.
          </p>
          <p style={{ marginTop: "10px" }}>
            <b>Contact Information:</b>
          </p>
          <p style={{ marginTop: "5px" }}>
            <b>Email: </b>karthikkavili20@gmail.com
          </p>
          <p>
            <b>Phone:</b> [+91 7731029106]
          </p>
          <p style={{marginTop: '10px'}}>I aim to respond promptly and look forward to the opportunity to
          collaborate with you. Let's turn ideas into reality!</p>
        </div>
        <div className="Feedback">
          <h2 style={{padding: '2px 0px 5px 5px', fontFamily:'cursive'}}>Message Me</h2>
          <input type="text" placeholder="Name" />
          <input className="Emailinput" type="email" placeholder="Email" />
          <textarea cols="50" rows="10" placeholder="Description"></textarea>
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
