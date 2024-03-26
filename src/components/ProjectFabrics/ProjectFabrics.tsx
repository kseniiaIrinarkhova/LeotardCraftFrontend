import { Col, Container, Row } from 'react-bootstrap'
import { ProjectFabric } from '../../vite-env'
import ProjectFabricCard from '../ProjectFabricCard/ProjectFabricCard'

type Props = {
    fabrics: Array<ProjectFabric> | undefined
}

const ProjectFabrics = ({ fabrics }: Props) => {
    if (!fabrics) fabrics = [];
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {fabrics.map((fabric) => (<Col key = {fabric._id} ><ProjectFabricCard fabric={fabric} /></Col>))}
            </Row>
        </Container>
    )
}

export default ProjectFabrics