import { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";

const Auth = () => {
  const [newUser, setNewUser] = useState(false);
  return (
    <>
      {newUser ? (
        <RegisterForm setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
    </>
  )
}

export default Auth