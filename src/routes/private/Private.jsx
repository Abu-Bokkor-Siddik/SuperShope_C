import  { useContext } from 'react'
import { AuthContexts } from '../../AuthProvider/AuthProvider';
import Loading from '../../pages/Loading';
import { Navigate, useLocation } from 'react-router';

const Private = ({children}) => {
     const { user,loading } = useContext(AuthContexts);
     const location = useLocation()
     if (loading) {
        return <Loading></Loading>
     }
     if (user) {
        return children
     }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
}

export default Private
