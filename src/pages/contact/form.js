import React from "react"

import style from "./form.module.css"

const Form = ({ email }) => (
  <form action={'//formspree.io/' + email} method='POST'>
    <input
      type="text"
      name="name"
      placeholder='Your Name'
      className={style.field}
    />
    <input
      type="email"
      name="_replyto"
      placeholder='Your Email Address'
      className={style.field}
    />
    <textarea
      rows="9"
      name="message"
      cols="64"
      placeholder='Your Message'
      className={style.textarea}
    ></textarea>
    <input
      type="submit"
      value="Submit"
      className={style.submit}
    />
  </form>
)

export default Form