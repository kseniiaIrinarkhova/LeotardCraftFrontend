import { Col, Container, Row } from 'react-bootstrap';
import { ProjectRhinestone } from '../../vite-env';
import ProjectRhinestoneCard from '../ProjectRhinestoneCard/ProjectRhinestoneCard';

type Props = {
    rhinestones: Array<ProjectRhinestone> | undefined
}

const ProjectRhinestones = ({rhinestones}: Props) => {
    if (!rhinestones) rhinestones = [];
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {rhinestones.map((stone) => (<Col key={stone._id}><ProjectRhinestoneCard key={stone._id} rhinestone={stone} /></Col>))}
            </Row>
        </Container>
    )
}

export default ProjectRhinestones