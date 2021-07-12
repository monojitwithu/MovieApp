import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";



const Header=()=>{
    const [pathName,setPathName]=useState();
    const location=useLocation();
    const history=useHistory();

    useEffect(()=>{
        setPathName(location.pathname)

    },[])

    const redirectTo=(pathName)=>{
        setPathName(pathName)
        history.push(pathName)


    }

      
    return(
        <header className="header">
            <nav className="nav-bar">
                <span className={`nav-item ${pathName==='/'?'selected':""}`} onClick={()=>redirectTo("/")}>Movies</span>
                
                <span className={`nav-item ${pathName==='/series'?'selected':""}`} onClick={()=>redirectTo("/series")}> Series </span>
                <span className={`nav-item ${pathName==='/anime'?'selected':""}`} onClick={()=>redirectTo("/anime")}>Anime</span>
            </nav>





        </header>

    )
}


export default Header;