import React from "react";
import style from "../../css/onBoard.module.css"

const PageTracker = ({page, setPage}) => {
    return (
        <>
            <div className={style.pageTrackContainer} >
                <div onClick={() => page >= 1 && setPage(1)} className={`${style.circle} ${page >= 1 && style.circleOne}`}  >
                    1
                </div>
                <hr className={`${style.hrLine} ${page >= 1 && style.hrOne}`} />
                <hr className={`${style.hrLine} ${page >= 2 && style.hrTwo}`} />
                <div onClick={() => page >= 2 && setPage(2)}  className={`${style.circle} ${page >= 2 && style.circleTwo}`} >
                    2
                </div>
                <hr className={`${style.hrLine} ${page >= 2 && style.hrTwo}`} />
                <hr className={`${style.hrLine} ${page >= 3 && style.hrThree}`} />
                <div onClick={() => page >= 3 && setPage(3)}  className={`${style.circle} ${page >= 3 && style.circleThree}`} >
                    3
                </div>
                <hr className={`${style.hrLine} ${page >= 3 && style.hrThree}`} />
                <hr className={`${style.hrLine} ${page >= 4 && style.hrFour}`} />
                <div onClick={() => page >= 4 && setPage(4)}  className={`${style.circle} ${page >= 4 && style.circleFour}`} >
                    4
                </div>
            </div>
        </>
    );
}

export default PageTracker;