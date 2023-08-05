import style from './Sesame.module.scss';
import sesameImg from '../../../../../../../../assets/icons/home/bottomContent/sesame.png';

const Sesame = ({ value, handleChange }) => {
    return (
        <div className={style.component}>
            <img
                src={sesameImg}
                alt="sesame"
                className={style.component_icon}
            />
            <input
                min="0"
                max="100"
                type="range"
                value={value}
                onChange={event => handleChange(event.target.value, 'sesame')}
                className={style.component_range}
            />
            <p className={style.component_count}>
                {value}%
            </p>
        </div>
    );
};

export default Sesame;
