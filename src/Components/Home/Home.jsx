import React from 'react'
import './Home.module.css'
import homeImage from '../images/avataaars.svg'

export default function Home() {
  return <>
  <section className=' p-5 d-flex justify-content-center align-items-center'>
    <div className='text-center'>
        <img className='' src={homeImage} alt="" />
        <h3 className='fw-bold text-white text-uppercase py-3'>start react</h3>
        <p className=' text-white'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
  </section>
  </>
}
