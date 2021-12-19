import { useContext } from "react"
import { AuthContexts } from "../Contexts/AuthProvider"

const useAuth=()=>{
  return useContext(AuthContexts);
}

export default useAuth;