import { Button, Card,  Form, Row } from 'react-bootstrap'
import { Form as ReactForm } from 'react-router-dom'
import { getProjectContext } from '../../context/project/project.context'


const NewFabricCard = () => {
    const project = getProjectContext();

    return (
        <Card border="info" >
            <Card.Body>
                <Card.Title>New Fabric</Card.Title>
                <ReactForm method="get" action={`/projects/${project._id}/fabrics/add/new`}>
                    <Row>
                        <Form.Control type="text" name='type' placeholder="Add Type"
                            className=" mr-sm-1" />
                    </Row>
                    <Row>
                        <Form.Control type="text" name='color' placeholder="Add Color"
                            className=" mr-sm-1" />
                    </Row>
                    <Row>
                        <Form.Control
                            name="quantity"
                            type="number"
                            placeholder="Add quantity"
                            className=" mr-sm-1"
                        />
                    </Row>
                    <Row>
                        <Button type="submit">Add new fabric</Button>
                    </Row>
                </ReactForm>
            </Card.Body>
        </Card>
    )
}

export default NewFabricCard