import { Badge, Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'
import { IFabric } from '../../vite-env'
import { Form as ReactForm } from 'react-router-dom'
import { getProjectContext } from '../../context/project/project.context'

type Props = {
    fabric: IFabric
}

const FabricCard = ({ fabric }: Props) => {
    const project = getProjectContext();
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{fabric.type}</Card.Title>
                <ListGroup>
                    <ListGroup.Item><Badge bg="secondary">Color:</Badge> {fabric.color}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <ReactForm method="get" action={`/projects/${project._id}/fabrics/add`}>
                    <Form.Control type="text" value={fabric._id} name='fabric_id' hidden={true} readOnly={true}/>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                name="quantity"
                                type="number"
                                placeholder="Add quantity"
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

export default FabricCard