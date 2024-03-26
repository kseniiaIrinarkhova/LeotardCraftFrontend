import { Card, ListGroup } from 'react-bootstrap'
import { ProjectFabric } from '../../vite-env'

type Props = {
    fabric: ProjectFabric
}

const ProjectFabricCard = ({fabric}: Props) => {
  return (
      <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
              <ListGroup.Item>{fabric.fabric_id}</ListGroup.Item>
              <ListGroup.Item>{fabric.quantity}</ListGroup.Item>
          </ListGroup>
      </Card>
  )
}

export default ProjectFabricCard