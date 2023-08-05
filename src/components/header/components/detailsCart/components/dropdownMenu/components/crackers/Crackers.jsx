import style from './Crackers.module.scss';
import seed from '../../../../../../../../assets/icons/details_dropdownMenu/seed.svg'
import remove from '../../../../../../../../assets/icons/details_dropdownMenu/remove.svg'
import { useDispatch } from 'react-redux';

const Crackers = ({ cracker }) => {
    const dispatch = useDispatch();
    const {id, peas, sesame, wheat, corn, weight, cost} = cracker;

    const handleClick = (event) => {
        event.stopPropagation();
        dispatch({type: 'REMOVE_CRACKER', payload: id});
    }

    return (
        <div className={style.crackers}>
            <img className={style.crackers_icon} src={seed} alt="Crackers Icon" />
            <div className={style.crackers_proportions}>
                <p>{peas}%</p>
                <p>{sesame}%</p>
                <p>{wheat}%</p>
                <p>{corn}%</p>
            </div>
            <p className={style.crackers_weight}>
                {weight} kg
            </p>
            <p className={style.crackers_cost}>
                {cost}€
            </p>
            <img src={remove} className={style.crackers_remove} onClick={handleClick}/>
        </div>
    );
};

export default Crackers;
