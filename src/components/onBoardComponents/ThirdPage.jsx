import React from "react";
import style from "../../css/onBoard.module.css"
import greyUserImg from "../../assets/images/usergrey.png"
import blueUserImg from "../../assets/images/userblue.png"

import greyUsersImg from "../../assets/images/usersgrey.png"
import blueUsersImg from "../../assets/images/usersblue.png"

import { useState } from "react";

const ThirdPage = ({ page, setPage }) => {

    const [block, setBlock] = useState("user")

    return (
        <>
            <h1 >
                How are you planning to use Eden?
            </h1>
            <p className={style.desc} >We'll streamline your setup experience accordingly.</p>

            <div className={style.boxContainer} >
                <div className={block === "user" ? style.blueUserBox : style.boxDiv} onClick={() => setBlock("user")} >
                    {block !== "user" ? <img src={greyUserImg} alt="user_img" height={"25px"} /> : <img src={blueUserImg} alt="user_img" height={"25px"} /> }
                    <p>For myself</p>
                    <p>Write Better. Think more clearly. Stay organized.</p>
                </div>

                <div className={block === "users" ? style.blueUsersBox : style.boxDiv} onClick={() => setBlock("users")} >
                    {block !== "user" ? <img src={blueUsersImg} alt="user_img" height={"22px"} /> : <img src={greyUsersImg} alt="user_img" height={"22px"} />}
                    <p>With my team</p>
                    <p>Wikis, docs, tasks & projects, all in one place.</p>
                </div>
            </div>

            <button className={style.createBtn} onClick={() => setPage(page + 1)}>Create Workspace</button>

        </>
    );
}

export default ThirdPage;