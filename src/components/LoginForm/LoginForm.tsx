import { Dispatch, SetStateAction, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Form as RouterForm, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth/auth.context'

type Props = {
    setNewUser: Dispatch<SetStateAction<boolean>>
}

const LoginForm = ({setNewUser}: Props) => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const { logIn } = useAuth();
    const nav = useNavigate();

    const handleClick = () => {
        setNewUser(true);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
try {
    logIn(formData);
    nav('/projects')
} catch (error) {
    throw(error)
}
        

    };

  return (
    <>
          <Form as={RouterForm} onSubmit={(e) => { onSubmit(e) }}>
          <Form.Group className="mb-3" controlId="login_username">
              <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="Enter username" name='username' onChange={(e) => { onChange(e as any) }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="login_password">
              <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' onChange={(e) => { onChange(e as any) }} />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
          <p>
              Dont have an account? <Button onClick={handleClick}>Sign Up</Button>
          </p>
      </>
  )
}

export default LoginForm