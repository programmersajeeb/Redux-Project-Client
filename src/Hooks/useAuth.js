import { useContext } from "react";
import { Authcontext } from '../Context/AuthProvider';
const useAuth = () => {
    return useContext(Authcontext)
}

export default useAuth;