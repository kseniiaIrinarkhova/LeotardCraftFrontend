import { Button, Col, Form, Row } from "react-bootstrap"
import {  Form as ReactForm } from "react-router-dom"



const NewProjectForm = () => {
  return (
      <ReactForm method="post" action={`/projects`}>
          <Row><p className="text-center">Create a new project</p></Row>
          <Row xs={3}>
              <Col xs={8}>
                  <Form.Control
                      name="title"
                      type="string"
                      placeholder="Add title"
                  />
              </Col>
              <Col xs="1">
                  <Button type="submit">Add</Button>
              </Col>
          </Row>
      </ReactForm>
  )
}

export default NewProjectForm