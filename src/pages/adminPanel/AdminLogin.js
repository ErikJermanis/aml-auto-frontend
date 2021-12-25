import { useRef, useState, useCallback } from "react";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

import TextLogo from "../../components/textLogo";
import InputGroup from "../../components/inputGroup";
import Button from "../../components/button";

const AdminLogin = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [usernameInvalid, setUsernameInvalid] = useState(null);
  const [passwordInvalid, setPasswordInvalid] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    let allValid = true;
    if(!usernameRef.current.value.length) {
      setUsernameInvalid("Username is required");
      allValid = false;
    }
    if(!passwordRef.current.value.length) {
      setPasswordInvalid("Password is required");
      allValid = false;
    }
    if(!allValid) return;

    try {
      const result = await signInWithEmailAndPassword(auth, usernameRef.current.value, passwordRef.current.value);
      console.log(result.user.accessToken);
    } catch(error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-medium text-xl"><TextLogo /> admin</h1>
      <InputGroup
        label="Username"
        refProp={usernameRef}
        onChange={useCallback(() => setUsernameInvalid(null), [])}
        invalid={usernameInvalid}
        className="mt-4"
      />
      <InputGroup
        label="Password"
        refProp={passwordRef}
        onChange={useCallback(() => (setPasswordInvalid(null)), [])}
        invalid={passwordInvalid}
        className="mt-4"
        type="password"
      />
      <Button type="submit" className="mt-6" primary>Login</Button>
    </form>
  )
}

export default AdminLogin;
