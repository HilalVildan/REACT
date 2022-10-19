import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>

    <Navbar className='bg-dark text-light p-4 fixed-bottom d-flex justify-content-center'>
        <p> Copyright {new Date().getFullYear()}</p>
    </Navbar>
    
    </div>
  )
}

export default Footer