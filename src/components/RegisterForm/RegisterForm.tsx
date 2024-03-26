import { Dispatch, SetStateAction, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link, Form as RouterForm, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth/auth.context'

type Props = {
    setNewUser: Dispatch<SetStateAction<boolean>>
}

const RegisterForm = ({ setNewUser }: Props) => {
    const [formData, setFormData] = useState({
        username:"",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: ""
    });
    const { signUp } = useAuth();
    const nav = useNavigate();

    const handleClick = (): void => {
        setNewUser(false);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (formData.password !== formData.password2) {
            console.log("password don't match")
        }
        else {
            signUp(formData);
            nav('/projects')
        }

    };

    return (
        <Container style={{ width: '25rem' }}>
            <Form  as={RouterForm} onSubmit={(e) => { onSubmit(e) }}>
                <Form.Group className="mb-3" controlId="register_username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" name='username' onChange={(e) => { onChange(e as any)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="register_first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="Enter your first name" name='first_name' onChange={(e) => { onChange(e as any)} } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="register_last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Enter your last name" name='last_name' onChange={(e) => { onChange(e as any) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="register_email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => { onChange(e as any)} } />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="register_password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => { onChange(e as any)} } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="register_password_cnf">
                    <Form.Label>Password confirmation</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" name="password2" onChange={(e) => { onChange(e as any)} } />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>
                Already have an account? <Link to="" onClick={handleClick}>Sign In</Link>
            </p>
        </Container>
    )
}

export default RegisterForm