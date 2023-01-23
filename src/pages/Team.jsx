import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from './Cards'



function Team({images}) {

return (
    <div>
    <h1>Meet our Team</h1>
    <div>
    {/* <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}

      <Button variant="success" type="submit">
        All
      </Button>
      <Button variant="secondary" type="submit">
        Chairperson
      </Button>
      <Button variant="primary" type="submit">
       D.Chair
      </Button>
      <Button variant="warning" type="submit">
        Treasure
      </Button>
      <Button variant="danger" type="submit">
        Accountant
      </Button>
      <Button variant="info" type="submit">
        Organizing Secretary
      </Button>
      {/* <Button variant="light" type="submit">
        Airtel
      </Button>
      <Button variant="dark" type="submit">
        Airtel
      </Button>
      <Button variant="link" type="submit">
        Airtel
      </Button> */}
    </div>

      <div className="container">
        <div className='row'>
        <div className='column'>
<div className='card-collection'>
{images.map((image)=>(<Card img={image.img}/>))
}
  
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={""}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Bryan</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Bryan</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Description
        </Card.Text>
        <Button variant="primary">Bryan</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
      </div>
        </div>
  )
}

export default Team