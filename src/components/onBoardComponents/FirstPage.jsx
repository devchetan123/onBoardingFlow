import React from "react";
import style from "../../css/onBoard.module.css"

const FirstPage = ({page, setPage, setUserName}) => {

    return (
        <>
            <h1 >
                Welcome! First things first...
            </h1>
            <p className={style.desc} >You can always change them later.</p>

            <div className={style.inputDiv} >
                <label>Full Name</label>
                <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Steve Jobs" />
            </div>

            <div className={style.inputDiv} >
                <label>Display Name</label>
                <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Steve" />
            </div>

            <button className={style.createBtn} onClick={() => setPage(page + 1)}>Create Workspace</button>

        </>
    );
}

export default FirstPage;