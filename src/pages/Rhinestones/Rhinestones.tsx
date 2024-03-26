import { makeLoader } from "react-router-typesafe";
import { IRhinestone } from "../../vite-env";
import { getAllRhinestones } from "../../utils/api_connection";
import { useLoaderData } from "react-router-dom";
import RhinestoneCard from "../../components/RhinestoneCard/RhinestoneCard";
import { Col, Row } from "react-bootstrap";
import NewRhinestoneCard from "../../components/NewRhinestoneCard/NewRhinestoneCard";

type Props = {}

const loader = makeLoader(async (cookies: any): Promise<IRhinestone[] | Response> => {
  try {
    const rhinestones = await getAllRhinestones(cookies);
    return rhinestones
  }
  catch (err) {
    throw new Response("Not Found", { status: 404 });
  }
});

const Rhinestones = (props: Props) => {
  let rhinestones = useLoaderData() as IRhinestone[];
  if (!rhinestones) rhinestones = [];
  const rhinestoneCards = rhinestones.map((rhinestone) => (
    <Col key={rhinestone._id}>
    <RhinestoneCard  rhinestone={rhinestone} />
    </Col>
  ));
  return (
    <Row xs={1} md={2} className="g-4">
      <Col key='new'>
        <NewRhinestoneCard />
      </Col>
      {rhinestoneCards}
    </Row>
  )
}
Rhinestones.loader = loader;
export default Rhinestones