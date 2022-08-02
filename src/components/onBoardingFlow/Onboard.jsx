import React from "react";
import { useState } from "react";
import logo from "../../assets/images/logo.png"
import style from "../../css/onBoard.module.css"
import FirstPage from "../onBoardComponents/FirstPage";
import FourthPage from "../onBoardComponents/FourthPage";
import PageTracker from "../onBoardComponents/PageTracker";
import SecondPage from "../onBoardComponents/SecondPage";
import ThirdPage from "../onBoardComponents/ThirdPage";

const OnBoardFlow = () => {

    const [page, setPage] = useState(1);
    const [userName, setUserName] = useState("")
    const [workspace, setWorkspace] = useState("eden")
    
    return (
        <>
            <div className={style.mainContainer} >
                <img src={logo} alt="logo" height={"55px"} />
                <PageTracker page={page} setPage={setPage}/>
                {
                    page === 1 && <FirstPage page={page} setPage={setPage} setUserName={setUserName} /> || 
                    page === 2 && <SecondPage page={page} setPage={setPage} workspace={workspace} setWorkspace={setWorkspace}/> || 
                    page === 3 && <ThirdPage page={page} setPage={setPage}/> || 
                    page === 4 && <FourthPage page={page} setPage={setPage} userName={userName} workspace={workspace}/>
                }              
            </div>
        </>
    );
}

export default OnBoardFlow;