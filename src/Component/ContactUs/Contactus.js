import React from 'react'
import './Contactus.css'

const Contactus = () => {
  return (
    <div class = "lol">
      <form>
       <div class="field name-box">
         <input type="text" id="name" placeholder="Please Enter Your Name"/>
         <label for="name">Name</label>
       </div>
 
       <div class="field email-box">
         <input type="text" id="email" placeholder="name@email.com"/>
         <label for="email">Email</label>
       </div>
 
       <div class="field msg-box">
         <textarea id="msg" rows="4" placeholder="Write Your Message..."></textarea>
         <label for="msg">Message</label>
       </div>
 
       <input class="button" type="submit" value="Send" />
  </form>
    </div>
  )
}

export default Contactus
