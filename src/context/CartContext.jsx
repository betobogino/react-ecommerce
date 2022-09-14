import { createContext, useState } from "react";

const UserContext = createContext("");

const UserProvider = (props) => {
    
    const [user, setUser] = useState("");

    const loginUser = () => {
        setUser("BETO")
    }

    const logoutUser = () => {
        setUser("")
    }

    return (
        <>
            <UserContext.Provider value={{user, loginUser, logoutUser}}>
                {props.children}
            </UserContext.Provider>
        </>
    );
}

export { UserContext, UserProvider };