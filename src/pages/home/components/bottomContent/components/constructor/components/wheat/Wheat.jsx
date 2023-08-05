import style from './Wheat.module.scss';
import wheatImg from '../../../../../../../../assets/icons/home/bottomContent/wheat.png';

const Wheat = ({ value, handleChange }) => {
    return (
        <div className={style.component}>
            <img
                src={wheatImg}
                alt="Peas"
                className={style.component_icon}
            />
            <input
                min="0"
                max="100"
                type="range"
                value={value}
                onChange={event => handleChange(event.target.value, 'wheat')}
                className={style.component_range}
            />
            <p className={style.component_count}>
                {value}%
            </p>
        </div>
    );
};

export default Wheat;