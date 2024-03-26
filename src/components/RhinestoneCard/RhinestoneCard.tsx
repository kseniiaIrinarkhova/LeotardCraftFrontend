import { Badge, Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'
import { IRhinestone } from '../../vite-env'
import { Form as ReactForm } from 'react-router-dom'
import { getProjectContext } from '../../context/project/project.context'

type Props = {
    rhinestone: IRhinestone
}

const RhinestoneCard = ({ rhinestone }: Props) => {
    const project = getProjectContext();
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
                <ReactForm method="get" action={`/projects/${project._id}/rhinestones/add`}>
                    <Form.Control type="text" value={rhinestone._id} name='rhinestone_id' hidden={true} readOnly={true} />
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                            name="amount"
                                type="number"
                                placeholder="Add amount"
                                className=" mr-sm-1"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Add</Button>
                        </Col>
                    </Row>
                </ReactForm>
            </Card.Footer>
        </Card>
    )
}

export default RhinestoneCard