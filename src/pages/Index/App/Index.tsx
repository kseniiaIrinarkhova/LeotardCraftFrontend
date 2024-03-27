import { Col, Container, Image, Row } from "react-bootstrap";
import heroImg from '../../../assets/hero.gif';


export default function Index() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <Image src={heroImg} thumbnail/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
