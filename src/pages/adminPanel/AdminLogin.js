import { useRef, useState, useCallback } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import TextLogo from "../../components/textLogo";
import InputGroup from "../../components/inputGroup";
import Button from "../../components/button";
import { ErrorToast } from "../../components/swalMixins";

const AdminLogin = () => {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const { signin, userToken } = useAuth();

  const [usernameInvalid, setUsernameInvalid] = useState(null);
  const [passwordInvalid, setPasswordInvalid] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
    try {
      await signin(usernameRef.current.value, passwordRef.current.value);
      navigate("/admin/cars");
    } catch(error) {
      ErrorToast.fire({ title: "Invalid credentials" });
      setIsLoading(false);
    }
  };

  const validateUsername = useCallback(() => setUsernameInvalid(null), []);
  const validatePassword = useCallback(() => setPasswordInvalid(null), []);

  if(userToken) return <Navigate to="/admin/cars" />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-medium text-xl"><TextLogo /> admin</h1>
      <InputGroup
        label="Username"
        ref={usernameRef}
        onChange={validateUsername}
        invalid={usernameInvalid}
        className="mt-4"
      />
      <InputGroup
        label="Password"
        ref={passwordRef}
        onChange={validatePassword}
        invalid={passwordInvalid}
        className="mt-4"
        type="password"
      />
      <Button disabled={isLoading} type="submit" className="mt-6" primary>{isLoading ? 'Please wait...' : 'Login'}</Button>
    </form>
  )
}

export default AdminLogin;
