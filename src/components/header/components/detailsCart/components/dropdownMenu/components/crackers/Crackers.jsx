import style from './Crackers.module.scss';
import seed from '../../../../../../../../assets/icons/details_dropdownMenu/seed.svg'
import remove from '../../../../../../../../assets/icons/details_dropdownMenu/remove.svg'

const Crackers = () => {
    return (
    <div className={style.crackers}>
        <img className={style.crackers_icon} src={seed} alt="Crackers Icon" />
        <div className={style.crackers_proportions}>
            <p>4%</p>
            <p>15%</p>
            <p>61%</p>
            <p>20%</p>
        </div>
        <p className={style.crackers_weight}>
            1.50 kg
        </p>
        <p className={style.crackers_cost}>
            81.50€
        </p>
        <img src={remove} className={style.crackers_remove} />
    </div>
    );
};

export default Crackers;
