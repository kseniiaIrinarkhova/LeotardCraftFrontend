import { Badge, Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'
import { IRhinestone } from '../../vite-env'
import { Form as ReactForm } from 'react-router-dom'

type Props = {
    rhinestone: IRhinestone
}

const RhinestoneCard = ({ rhinestone }: Props) => {

    return (
        <Card>
            <Card.Body>
                <Card.Title>Rhinestone</Card.Title>
                <ListGroup>
                    <ListGroup.Item><Badge bg="secondary">Type:</Badge> {rhinestone.type}</ListGroup.Item>
                    <ListGroup.Item><Badge bg="secondary">Size:</Badge> {rhinestone.size}</ListGroup.Item>
                    <ListGroup.Item><Badge bg="secondary">Color:</Badge> {rhinestone.color}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <Form as={ReactForm}>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="number"
                                placeholder="Add amount"
                                className=" mr-sm-1"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Footer>
        </Card>
    )
}

export default RhinestoneCard