import React from 'react'
import '../Components/Main.css'
import blez2 from '../Images/blez2.jpg'
import blez3 from '../Images/blez3.jpg'
import blez4 from '../Images/blez4.jpg'
import blez5 from '../Images/blez5.jpg'

const images=[{
    id:1,
    src: blez2,
    alt: 'Blez',
},
{
    id:2,
    src: blez3,
    alt: 'Blez',
},
{
    id:3,
    src: blez4,
    alt: 'Blez',
},
{
    id:4,
    src: blez5,
    alt: 'Blez',
},

]


function Cards() {
  return (
    <div className='cardss'>
        <div className='card' style={{width:20 + 'rem'}}>
         {images.map(({id, src})=>(
            <div key={id}>
                <img src={src} alt="imagess"/>
                
            </div>
         ))}   
        </div>
    </div>
  )
}

export default Cards