/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import api from "../lib/api"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const loadUser = async () => {
            try{
                const res = await api.get('/auth/me');
                setUser(res.data.user);
            }catch{
                setUser(null);
            }finally{
                setLoading(false);
            }
        };
        loadUser();
    }, []);

    return(
        <AuthContext.Provider value={{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};