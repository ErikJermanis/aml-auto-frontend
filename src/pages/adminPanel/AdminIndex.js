import { Navigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const AdminIndex = () => {
  const { userToken } = useAuth();

  if(!userToken) {
    return <Navigate to="/adminlogin" />
  } else {
    return <Navigate to="/admin/cars" />
  }
}

export default AdminIndex;
