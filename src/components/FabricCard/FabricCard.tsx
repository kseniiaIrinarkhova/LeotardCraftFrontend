import { Badge, Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'
import { IFabric } from '../../vite-env'
import { Form as ReactForm } from 'react-router-dom'

type Props = {
    fabric: IFabric
}

const FabricCard = ({ fabric }: Props) => {
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{fabric.type}</Card.Title>
                <ListGroup>
                    <ListGroup.Item><Badge bg="secondary">Color:</Badge> {fabric.color}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <Form as={ReactForm}>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="number"
                                placeholder="Add quontity"
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

export default FabricCard