import React from 'react';
import styles from './Contact.module.css'

export default function Contact() {
  return <>
    <section id='contact' className='vh-100 bg-white py-5'>
      <div className="container mx-auto">
        <h2 className={`position-relative pb-4 mx-auto fw-bold ${styles.title}`}>
          CONTACT ME
        </h2>
        <div className="col-8 mx-auto mt-5">
          <input type="text" placeholder='Name' className={`w-100 mb-3 ${styles.input}`} />
          <input type="email" placeholder='Email Address' className={`w-100 mb-3 ${styles.input}`} />
          <input type="number" placeholder='Phone Number' className={`w-100 mb-3 ${styles.input}`} />
          <textarea placeholder='Message' name="" id="" className={`w-100 ${styles.input}`} rows="10"></textarea>
          <button className='btn btn-outline-success'>SEND</button>
        </div>
      </div>
    </section>
  </>
}
