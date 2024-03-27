import { Badge, Card, Col, ListGroup, Row } from 'react-bootstrap'
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
      <Card style={{ width: '12rem' }}>
          <ListGroup variant="flush">
              <ListGroup.Item><Row><Col xs={5}><Badge bg="secondary">Type:</Badge></Col><Col> {stoneInfo.type}</Col></Row></ListGroup.Item>
              <ListGroup.Item><Row><Col xs={5}><Badge bg="secondary">Size:</Badge></Col><Col> {stoneInfo.size}</Col></Row> </ListGroup.Item>
              <ListGroup.Item><Row><Col xs={5}><Badge bg="secondary">Color:</Badge></Col><Col> {stoneInfo.color}</Col></Row> </ListGroup.Item>
              <ListGroup.Item><Row><Col xs={5}><Badge bg="secondary">Amount:</Badge></Col><Col> {rhinestone.amount}</Col></Row> </ListGroup.Item>
          </ListGroup>
      </Card>
  )
}

export default ProjectRhinestoneCard