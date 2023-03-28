import React from 'react';
import styles from './Footer.module.css'

export default function Footer() {
  return <>
  
    <footer className=' text-center p-4'>
    <div className="container">
    <div className="row text-white">
        <div className="col-md-4">
            <div>
                <h3 className='fw-bold text-uppercase'>location</h3>
                <p className='py-2'>2215 John Daniel Drive</p>
                <span>Clark, MO 65243</span>
            </div>
        </div>
        <div className="col-md-4">
            <div>
                <h3 className='text-uppercase'>around the web</h3>
                <div className={`d-flex justify-content-evenly align-items-center py-2`}>
                    <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
                        <i className="fa-brands fa-behance"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div>
                <h3 className='text-uppercase'>about freelancer</h3>
                <p className='py-2'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        <div className="col-12">
            <p className='pt-2'>Copyright &copy; Your Website 2023</p>
        </div>
    </div>
  </div>
    </footer>
  </>
}
