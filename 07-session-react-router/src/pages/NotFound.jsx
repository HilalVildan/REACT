import React from 'react'
import { Container } from 'react-bootstrap'
import notfound from "../img/indir.png"

const NotFound = () => {
  return (
    <div>
        <Container>
            <img src={notfound} alt="" width="700px" />
        </Container>
    </div>
  )
}

export default NotFound