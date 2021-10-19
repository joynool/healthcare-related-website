import { useContext } from "react"
import { AuthContext } from "./../Context/AuthProvider"

/*-----------------------------------------------------
            Implement custom hook as useAuth()
-------------------------------------------------------*/

const useAuth = () =>
{
    return useContext(AuthContext);
};

export default useAuth;