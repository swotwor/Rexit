import style from './Corn.module.scss';
import cornImg from '../../../../../../../../assets/icons/home/bottomContent/corn.png';

const Corn = ({ value, handleChange }) => {
    return (
        <div className={style.component}>
            <img
                src={cornImg}
                alt="Corn"
                className={style.component_icon}
            />
            <input
                min="0"
                max="100"
                type="range"
                value={value}
                onChange={event => handleChange(event.target.value, 'corn')}
                className={style.component_range}
            />
            <p className={style.component_count}>
                {value}%
            </p>
        </div>
    );
};

export default Corn;
