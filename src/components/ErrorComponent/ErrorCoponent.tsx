import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";


const ErrorComponent = () => {
    const error = useRouteError();
    let errorMessage = 'Unknown Error';

    if (isRouteErrorResponse(error)) errorMessage = error.statusText
    else if (error instanceof Error) errorMessage = error.message
  return (
      <Container>
          <Row >
              <Col xs={4}>{errorMessage}</Col>
          </Row>
      </Container>
  )
}

export default ErrorComponent