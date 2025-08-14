import { useRef, useState } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nxd64vb", "template_0l7i5du", form.current, {
        publicKey: "x55kQfT50WmwKk0DN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
        setEmail("")
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="join-left">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="join-right">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder=" Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-join" type="submit">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
