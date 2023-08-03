import style from './Seeds.module.scss';
import corn from '../../../../../../../../assets/icons/details_dropdownMenu/corn.svg'
import peas from '../../../../../../../../assets/icons/details_dropdownMenu/peas.svg'
import wheat from '../../../../../../../../assets/icons/details_dropdownMenu/wheat.svg'
import sesame from '../../../../../../../../assets/icons/details_dropdownMenu/sesame.svg'

const Seeds = () => {
    return (
        <div className={style.seeds}>
            <img src={peas} alt="Peas Icon" />
            <img src={sesame} alt="Sesame Icon" />
            <img src={wheat} alt="Wheat Icon" />
            <img src={corn} alt="Corn Icon" />
        </div>
    );
};

export default Seeds;
