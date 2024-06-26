import { makeLoader,  useLoaderData } from "react-router-typesafe";
import { IUser } from "../../vite-env";
import { getUserData } from "../../utils/api_connection";
import { Container,  Table } from "react-bootstrap";


const loader = makeLoader(async (cookies: any): Promise<IUser | Response> => {
  try {
    const user = await getUserData(cookies);
    return user
  }
  catch (err) {
    throw new Error("Error in account page")
  }
});

const Account = () => {
  const userInfo = useLoaderData() as IUser;
  return (
    <Container style={{ width: '25rem' }}>
    <h3 className="text-center">Profile information</h3>
      <Table className="table-striped">
        <tbody >
      <tr>
            <th className="xs">Username</th>
            <td className="xs">{userInfo.username}</td>
      </tr>
        <tr>
          <th>First Name</th>
          <td>{userInfo.first_name}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{userInfo.last_name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{userInfo.email}</td>
        </tr>
     </tbody>
    </Table>
    </Container>
  )
}
Account.loader = loader

export default Account