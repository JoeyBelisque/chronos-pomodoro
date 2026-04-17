import style from './style.module.css';
export function Cycles() {
  return (
    <div className={style.cycles}>
        <span>Ciclos :</span>
        <div className={style.cyclesDots}>
            <span className={`${style.cycledot} ${style.worktime}`}></span>
            <span className={`${style.cycledot} ${style.shortBreakTime}`}></span>
            <span className={`${style.cycledot} ${style.worktime}`}></span>
            <span className={`${style.cycledot} ${style.shortBreakTime}`}></span>
            <span className={`${style.cycledot} ${style.worktime}`}></span>
            <span className={`${style.cycledot} ${style.shortBreakTime}`}></span>
            <span className={`${style.cycledot} ${style.worktime}`}></span>
            <span className={`${style.cycledot} ${style.longBreakTime}`}></span>
        </div>
    </div>
  );
}