import { Card, ListGroup } from 'react-bootstrap'
import { IRhinestone, ProjectRhinestone } from '../../vite-env'
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth/auth.context'
import { getRhinestoneById } from '../../utils/api_connection'

type Props = {
    rhinestone: ProjectRhinestone
}

const ProjectRhinestoneCard = ({ rhinestone }: Props) => {
    const [stoneInfo, setStoneInfo] = useState({} as IRhinestone);
    const { cookies } = useAuth();

    async function getStoneInfo() {
        getRhinestoneById(cookies, rhinestone.rhinestone_id)
            .then((stone: IRhinestone) => {
                setStoneInfo(stone)
            }

            )
            .catch((err: any) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getStoneInfo();
    }, [])
  return (
      <Card style={{ width: '10rem' }}>
          <ListGroup variant="flush">
              <ListGroup.Item>{stoneInfo.type}</ListGroup.Item>
              <ListGroup.Item>{stoneInfo.size}</ListGroup.Item>
              <ListGroup.Item>{stoneInfo.color}</ListGroup.Item>
              <ListGroup.Item>{rhinestone.amount}</ListGroup.Item>
          </ListGroup>
      </Card>
  )
}

export default ProjectRhinestoneCard