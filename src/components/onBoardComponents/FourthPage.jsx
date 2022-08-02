import React from "react";
import style from "../../css/onBoard.module.css"
import rightCheck from "../../assets/images/rightcheck.png"

const FourthPage = ({page, setPage, userName, workspace}) => {
    return (
        <> 
            <img className={style.congoLogo} src={rightCheck} alt="success" />
            <h1 >
                Congratulations, {userName}!
            </h1>
            <p className={style.desc} >You have completed onboarding, you can start using the {workspace}!</p>

            <button className={style.createBtn} onClick={() => page < 4 && setPage(page + 1)}>Launch {workspace}</button>

        </>
    );
}

export default FourthPage;