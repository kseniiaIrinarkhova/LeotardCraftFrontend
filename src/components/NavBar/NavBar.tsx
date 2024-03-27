import { Container, Nav, Navbar } from "react-bootstrap"
import logo from '../../assets/logo.svg'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth/auth.context"
import { MouseEvent } from "react"



const NavBar = () => {
    const { cookies, logOut } = useAuth();
    const nav = useNavigate();

    function handleLogOut(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        logOut();
        nav('/');
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/account" >Account</Nav.Link>
                        <Nav.Link as={Link} to="/projects" >My Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {cookies.is_authorized ?
                        <Nav className="me-end">
                            <Navbar.Text>
                                Welcome, <Link to='/account'>{cookies.username}</Link>
                            </Navbar.Text>
                            <Nav.Link onClick={(e)=>{handleLogOut(e as any)}}>Log out</Nav.Link>
                        </Nav>
                        : <Nav.Link as={Link} to="/auth" >Login</Nav.Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar