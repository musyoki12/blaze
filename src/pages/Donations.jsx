import React from 'react'
// import './Components/Main.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Donations() {
  return (
    <div className='donation'>
      {/* <div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div> */}
      {/* <h2 className="heading">Welcome to make your donation</h2>
      <h3 className="heading">Your donation will make success stories like these possible.</h3> */}


      <div className="row">
  <div className ="column">
    <h2 className="heading">Welcome to make your donation</h2>
    <h3 className="heading">Your donation will make success stories like these possible.</h3>
    <div className="mb-3">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Amount</Form.Label>

        <Form.Control type="password" placeholder="Amount" />
        <br/>
        <h3>Payment Method</h3>
        <br/>
        <Button variant="primary" type="submit">
        Mpesa
      </Button>
      <Button variant="success" type="submit">
        Airtel
      </Button>
      <Button className="btn btn-info"> Credit Card</Button>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
      </Form.Group>
      <Button variant="primary" type="submit">
        Donate Now
      </Button>
    </Form>
    </div>
  </div>
  <div id="donate" className="column">
  {/* <h1 className="heading"></h1> */}
  </div>
</div>
      </div>
  )
}

export default Donations