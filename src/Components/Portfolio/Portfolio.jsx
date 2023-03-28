import React from 'react'
import styles from './Portfolio.module.css'
import cabin from '../images/cabin.png'
import cake from '../images/cake.png'
import circus from '../images/circus.png'
import game from  '../images/game.png'
import safe from '../images/safe.png'
import submarine from '../images/submarine.png'
export default function Portfolio() {
  return <>
    <section className='bg-white min-vh-100 py-5'>
      <h2 className={`${styles.title} mx-auto position-relative pb-4 fw-bold`}>PORTFOLIO</h2>
      <div className="container mt-4">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className={`rounded position-relative ${styles.card}`}>
              <img className='w-100 h-100 rounded' src={cabin} alt="" />
              <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
              <i className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`rounded position-relative ${styles.card}`}>
              <img className='w-100 h-100 rounded' src={cake} alt="" />
              <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
              <i className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`rounded position-relative ${styles.card}`}>
              <img className='w-100 h-100 rounded' src={circus} alt="" />
              <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
              <i className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`rounded position-relative ${styles.card}`}>
              <img className='w-100 h-100 rounded' src={safe} alt="" />
              <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
              <i className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`rounded position-relative ${styles.card}`}>
              <img className='w-100 h-100 rounded' src={game} alt="" />
              <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
              <i className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`rounded position-relative ${styles.card}`}>
              <img className='w-100 h-100 rounded' src={submarine} alt="" />
              <div className={`d-flex justify-content-center align-items-center ${styles.box}`}>
              <i className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  </>
}
