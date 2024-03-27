import { Col, Container, Row } from "react-bootstrap"
import backgroundImg from '../../../assets/projects_background.svg'
import { makeLoader, useLoaderData } from "react-router-typesafe"
import { getQuotation } from "../../../utils/quote_api";


const loader = makeLoader(async () => {
  const quotation = await getQuotation();
  return quotation;
});

const Index = () => {
  const qoute = useLoaderData() as { author: string, quote: string };
  return (
    <Container className="container-fluid min-vh-100" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
      <Row> <h3 className="text-center">You could create a new project or continue with existing ones</h3></Row>
      <Row className="justify-content-md-center">
        <Col xs={6} className="text-bg-secondary p-3 rounded">
          <Row><p>{qoute.quote}</p></Row>
          <Row className="text-end"> <p>{qoute.author}</p></Row>
        </Col>
      </Row>
    </Container>
  )
}
Index.loader = loader;
export default Index