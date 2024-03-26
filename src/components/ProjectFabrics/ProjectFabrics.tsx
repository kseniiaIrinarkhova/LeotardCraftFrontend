import { Container } from 'react-bootstrap'
import { ProjectFabric } from '../../vite-env'
import ProjectFabricCard from '../ProjectFabricCard/ProjectFabricCard'

type Props = {
    fabrics: Array<ProjectFabric> | undefined
}

const ProjectFabrics = ({ fabrics }: Props) => {
    if (!fabrics) fabrics = [];
    return (
        <Container>
            {fabrics.map((fabric) => (<ProjectFabricCard fabric={fabric} />))}
        </Container>
    )
}

export default ProjectFabrics