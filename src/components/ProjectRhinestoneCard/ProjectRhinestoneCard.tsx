import { Card, ListGroup } from 'react-bootstrap'
import { ProjectRhinestone } from '../../vite-env'

type Props = {
    rhinestone: ProjectRhinestone
}

const ProjectRhinestoneCard = ({ rhinestone }: Props) => {
  return (
      <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
              <ListGroup.Item>{rhinestone.rhinestone_id}</ListGroup.Item>
              <ListGroup.Item>{rhinestone.amount}</ListGroup.Item>
          </ListGroup>
      </Card>
  )
}

export default ProjectRhinestoneCard