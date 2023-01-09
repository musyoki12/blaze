import React from 'react'
import Button from 'react-bootstrap/Button';

function Aboutus() {
  return (
    <div className='aboutus'>
      {/* <h3>WE are Blazzers</h3> */}

      <div className='head'>
      <h2>WE are Blazzers</h2>
     
      
      <p className='pt-left'>
  <h2>Goals of the group</h2><br/>
• Spiritual transformation.<br/>
• Creating a safe environment for the next generation.<br/>
• Rescue and changing more street lives.<br/>
• To be a forum where members would give each other's social, <br/>emotional, mental and spiritual
support where necessary.<br/>
• To show love and company to the vulnerable groups.<br/>
      </p>
      </div>
      <div className='help'>
        <h1>Help The children </h1>
        <h3>We do whatever it takes to make sure children <br/>
        don’t just survive but thrive. Helper believes that <br/>
        every child should be able to make their mark on their<br/>
         world and help build a better future.</h3>
         <div className='btn1'>
         <Button variant="success" type="submit">
        Contact Us
      </Button>
         </div>
      </div>
      </div>
  )
}

export default Aboutus