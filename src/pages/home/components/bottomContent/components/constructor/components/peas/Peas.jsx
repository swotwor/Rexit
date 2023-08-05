import style from './Peas.module.scss';
import peasImg from '../../../../../../../../assets/icons/home/bottomContent/peas.png';

const Peas = ({ value, handleChange }) => {
    return (
        <div className={style.component}>
            <img
                src={peasImg}
                alt="Peas"
                className={style.component_icon}
            />
            <input
                min="0"
                max="100"
                type="range"
                value={value}
                onChange={event => handleChange(event.target.value, 'peas')}
                className={style.component_range}
            />
            <p className={style.component_count}>
                {value}%
            </p>
        </div>
    );
};

export default Peas;
