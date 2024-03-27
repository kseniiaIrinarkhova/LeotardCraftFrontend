import { Col, Container, Image, Row } from "react-bootstrap";
import heroImg from '../../../assets/hero.gif';

export interface IIndexProps {
}

export default function Index(props: IIndexProps) {
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
