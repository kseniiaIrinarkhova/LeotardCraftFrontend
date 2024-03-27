import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Container } from 'react-bootstrap'

type Props = {}

const nonAuth = (props: Props) => {
  return (
      <>
          <NavBar />
          <Container>
              <p>You are not auth</p>
             
          </Container>
      </>
  )
}

export default nonAuth