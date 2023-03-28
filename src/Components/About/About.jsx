import React from 'react'
import './About.module.css'

export default function About() {
  return <>
    <section className='d-flex justify-content-center align-items-center'>
      <div>
        <h2 className='position-relative p-2 text-white text-center fs-1 fw-bold text-uppercase'>About</h2>
        <div className="container ">
          <div className="row text-white fs-4">
            <div className="col-md-6">
              <div className='p-3'>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className='p-3'>
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
