import { Button, Card, Form, Row } from 'react-bootstrap'
import { Form as ReactForm } from 'react-router-dom'
import { getProjectContext } from '../../context/project/project.context'


const NewRhinestoneCard = () => {
    const project = getProjectContext();

    return (
        <Card border="info" >
            <Card.Body>
                <Card.Title>New Rhinestone</Card.Title>
                <ReactForm method="get" action={`/projects/${project._id}/rhinestones/add/new`}>
                    <Row>
                        <Form.Control type="text" name='type' placeholder="Add Type"
                            className=" mr-sm-1" />
                    </Row>
                    <Row>
                        <Form.Control type="text" name='color' placeholder="Add Color"
                            className=" mr-sm-1" />
                    </Row>
                    <Row>
                        <Form.Control type="text" name='size' placeholder="Add Size"
                            className=" mr-sm-1" />
                    </Row>
                    <Row>
                        <Form.Control
                            name="amount"
                            type="number"
                            placeholder="Add amount"
                            className=" mr-sm-1"
                        />
                    </Row>
                    <Row>
                        <Button type="submit">Add new rhinestone</Button>
                    </Row>
                </ReactForm>
            </Card.Body>
        </Card>
    )
}

export default NewRhinestoneCard