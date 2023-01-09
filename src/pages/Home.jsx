import React from 'react'
import Donations from './Donations';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function Home() {

  return (
    <div className='home'>
       <div className='text'>
        <h3 className='headings'>YOUR CONTRIBUTION</h3>
        <br/>
        <h1 className="headings">Help The Children</h1>
        <br/>
        <p className='headings'>Blazzers Charity Group is a non- governmental charity organization made up of young talented youths.<br/>  It
was founded on 26-09-2019 by Mr. Peter Ondieki, from the inspiration of Mother Teresa.Mother Teresa<br/> 
of Calculta was an Indian nun who was devoted to serving the less fortunate selflessly.</p>
<br/>
<br/> 
<br/> 
<Link to='./donations'>
<Button className="btn1"variant="danger">Donate Now</Button>{Donations}
</Link>
<Link to='./contactus'>
<Button className="btn1" variant="dark">Contact Us</Button> 
</Link>
       </div>
      
        
    </div>
  )
}


export default Home
