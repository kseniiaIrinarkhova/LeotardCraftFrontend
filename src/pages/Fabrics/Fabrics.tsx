import { makeLoader } from "react-router-typesafe";
import { IFabric } from "../../vite-env";
import { getAllFabrics } from "../../utils/api_connection";
import { useLoaderData } from "react-router-dom";
import FabricCard from "../../components/FabricCard/FabricCard";
import { Col, Container, Row } from "react-bootstrap";

type Props = {}
const loader = makeLoader(async (cookies: any): Promise<IFabric[] | Response> => {
  try {
    const fabrics = await getAllFabrics(cookies);
    return fabrics
  }
  catch (err) {
    throw new Response("Not Found", { status: 404 });
  }
});

const Fabrics = (props: Props) => {
  let fabrics = useLoaderData() as IFabric[];
  if(!fabrics) fabrics=[];
const fabricCards= fabrics.map((fabric)=>(
  <Col key={fabric._id}>
  <FabricCard  fabric={fabric}/>
  </Col>
));
  return (
    <Row xs={1} md={2} className="g-4">
      {fabricCards}
    </Row>
  )
}

Fabrics.loader = loader

export default Fabrics