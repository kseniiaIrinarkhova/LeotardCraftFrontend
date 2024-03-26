import { Container } from 'react-bootstrap';
import { ProjectRhinestone } from '../../vite-env';
import ProjectRhinestoneCard from '../ProjectRhinestoneCard/ProjectRhinestoneCard';

type Props = {
    rhinestones: Array<ProjectRhinestone> | undefined
}

const ProjectRhinestones = ({rhinestones}: Props) => {
    if (!rhinestones) rhinestones = [];
    return (
        <Container>
            {rhinestones.map((stone) => (<ProjectRhinestoneCard rhinestone={stone} />))}
        </Container>
    )
}

export default ProjectRhinestones