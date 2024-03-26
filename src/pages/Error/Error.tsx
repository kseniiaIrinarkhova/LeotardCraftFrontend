import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { Container } from "react-bootstrap";

export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage = 'Unknown Error';

    if (isRouteErrorResponse(error)) errorMessage = error.statusText
    else if (error instanceof Error) errorMessage = error.message

    return (
        <>
            <NavBar />
            <Container>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    {errorMessage}
                </p>
            </Container>
        </>

    );
}