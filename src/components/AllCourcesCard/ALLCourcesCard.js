import React from 'react'
import "./AllCOurcesCard.css"
import {Link} from "react-router-dom" 

function ALLCources(props) {
  const{title,description,img,price}=props.info
  return (
    <div className="card text-center my-3 mx-5   "  style={{width:" 25rem"}}>
    <img src={img} className="rounded float-start"alt="..." id='img-edit' style={{width:"180px"}}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description.slice(0,50)}</p>
    </div>
    <div className='my-2' style={{display:'flex',justifyContent:'space-evenly'}}>
      <h3>₹{price}/-</h3>
      <Link to='/buycourses'>
      <button type="button" className="btn"   id='butcor'  >Buy Now</button>
      </Link>
    </div>
  </div>
  )
}

export default ALLCources