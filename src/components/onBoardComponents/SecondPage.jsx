import React from "react";
import style from "../../css/onBoard.module.css"

const SecondPage = ({ page, setPage, setWorkspace, workspace }) => {

    return (
        <>
            <h1 >
                Let's set up a home for all your work
            </h1>
            <p className={style.desc} >You can always create another workspace later.</p>

            <div className={style.inputDiv} >
                <label>Workspace Name</label>
                <input type="text" onChange={(e) => setWorkspace(e.target.value)} placeholder="Eden" />
            </div>

            <div className={style.inputDivUrl} >
                <label>Workspace URL (optional)</label>

                <div className={style.urlInput} >
                    <input disabled type="text" placeholder={`www.${workspace}.com`} />
                    <input type="text" placeholder="Example" />
                </div>
            </div>

            <button className={style.createBtn} onClick={() => setPage(page + 1)}>Create Workspace</button>

        </>
    );
}

export default SecondPage;