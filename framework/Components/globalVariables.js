import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const [userUID, setUserUID] = useState('');
    const [userInfo, setUserInfo] = useState({ image: null });
    const [preloader, setPreloader] = useState(false);
    const [docID, setDocID] = useState("");


    return (
        <AppContext.Provider value={{
            docID, setDocID,
            userUID, setUserUID,
            userInfo, setUserInfo,
            preloader, setPreloader,

        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }