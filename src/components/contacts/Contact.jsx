import React, { useState } from "react";
import "./contact.scss";
function Contacts() {
    const [message, setMessage] = useState(false)
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={(e) => {e.preventDefault();
        setMessage(!message)}}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'II reply ASAP</span>}
        </form>
      </div>
    </div>
  );
}
export default Contacts;
