import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import firstimg from "./Homeimg/WhatsApp Image 2024-02-23 at 12.30.02 PM.jpeg"
import jpmorgan from "./Homeimg/jp.jpeg"
import ey from "./Homeimg/ey.jpeg"
import gold from "./Homeimg/gold.jpeg"
import google from "./Homeimg/google.jpeg"
import hitachi from "./Homeimg/hitachi.jpeg"
import ibm from "./Homeimg/ibm.jpeg"
import isro from "./Homeimg/isro.jpeg"
import mb from "./Homeimg/m-b.jpeg"
import microsoft from "./Homeimg/microsoft.jpeg"
import netapp from "./Homeimg/netapp.jpeg"
import paypal from "./Homeimg/paypal.jpeg"
import sales from "./Homeimg/sales.jpeg"
import samsung from "./Homeimg/samsung.jpeg"
import amazon from "./Homeimg/amazon.jpeg"
import dell from "./Homeimg/dell.jpeg"
import deloitte from "./Homeimg/deloitte.jpeg"
import Footer from "../../components/Footer/Footer"
import airtel from "./Homeimg/airtel.jpeg"


function Home() {
  return (
    <>
      <Navbar />
      <div>


        <div className="start ">
          <div>
            <h1 className="h1">Learn & become the</h1>
            <h2 className="h2">Top 1% software</h2>
            <h2 className="h2">developer</h2>
            <button className="explore-btn">Explore New Courses</button>
          </div>
          <div>
            <img src={firstimg} alt='alt' className="main-img" />
          </div>
        </div>

        <div className="middle">
          <p className="middle-text">INDIA'S MOST LOVED CODING COMMUNITY ❤️</p>
          <div className="middle-3-parts">
            <div >
              <p>4,000,000+</p>
              <p>HAPPY LEARNERS</p>
            </div>
            <div>
              <p>3 CRORE+</p>
              <p>MONTHLY VIEWS</p>
            </div>

            <div>
              <p>1,00,000+</p>
              <p>NEW MONTHLY SUBSCRIPTION</p>
            </div>
          </div>

        </div>



        <div className="info-box">
          <h3 className="h-1">NEW WEB DEVELOPEMENT + DSA BATCH</h3>
          <h2>JOIN NEW SIGMA!</h2>
          <p>Start your new journey today</p>
          <button className="explore-btn" >Explore </button>
        </div>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
        <div className="company-section">
          <p className='p-tag'>Thousands of students achieve their <span className='span-tag'>dream job at</span></p>
          <div className="comapny-name-1">
            <img src={amazon} class="comapny-name " alt='alt' />
            <img src={google} class="comapny-name" alt='alt' />
            <img src={microsoft} class="comapny-name" alt='alt'/>
            <img src={gold} class="comapny-name" alt='alt'/>
            <img src={paypal} class="comapny-name" alt='alt'/>
            <img src={samsung} class="comapny-name" alt='alt'/>
          </div>

          <div class="comapny-name-1">
            <img src={sales} class="comapny-name"  alt='alt'/>
            <img src={netapp} class="comapny-name"  alt='alt'/>
            <img src={hitachi} class="comapny-name"  alt='alt'/>
            <img src={jpmorgan} class="comapny-name"  alt='alt'/>
            <img src={ibm} class="comapny-name"  alt='alt'/>
            <img src={dell} class="comapny-name"  alt='alt'/>
          </div>

          <div class="comapny-name-1">
            <img src={deloitte} class="comapny-name"  alt='alt'/>
            <img src={ey} class="comapny-name"  alt='alt'/>
            <img src={isro} class="comapny-name"  alt='alt'/>
            <img src={mb} class="comapny-name"  alt='alt'/>
            <img src={airtel} class="comapny-name"  alt='alt'/>
            <img src={google} class="comapny-name"  alt='alt'/>
          </div>



          <h2 className='text-center'>+many more</h2>
        </div>



        

      </div>

      <Footer/>
    </>
  )
}

export default Home