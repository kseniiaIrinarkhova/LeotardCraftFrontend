import { Col, Container, Row } from "react-bootstrap"
import backgroundImg from '../../../assets/projects_background.svg'
import { makeLoader, useLoaderData } from "react-router-typesafe"
import { getQuotation } from "../../../utils/quote_api";
type Props = {}

const loader = makeLoader(async()=>{
  console.log("loader index projects")
  const quotation = await getQuotation();
  console.log("return qoute")
  return quotation;
});

const Index = (props: Props) => {
  console.log("before useLoader")
  const qoute = useLoaderData() as { author: string, quote :string};
  console.log("after")
  return (
    <Container className="container-fluid min-vh-100" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
      <Row> <h3 className="text-center">You could create a new project or continue with existing ones</h3></Row>
      <Row className="justify-content-md-center"><Col xs={6}><p>{qoute.quote}</p></Col></Row>
      <Row className="justify-content-md-center"><Col xs={6} className="text-end">{qoute.author}</Col></Row> 
    </Container>
  )
}
Index.loader = loader;
export default Index