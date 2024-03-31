import React, { useState } from "react";


import NavbarContext from '../../context/NavbarContext'

const NavabarContextProvider = ({children}) =>{
    const [navOpen, setNavOpen] = useState(false);

    return(
        <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
            {children}
        </NavbarContext.Provider>
    )
}



export default NavabarContextProvider;