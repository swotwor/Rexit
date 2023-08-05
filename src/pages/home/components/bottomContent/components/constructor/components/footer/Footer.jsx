import style from './Footer.module.scss';
import { useState } from 'react';
import DropdownMenu from './components/dropdownMenu/DropdownMenu';
import pack from '../../../../../../../../assets/icons/home/bottomContent/pack.png';
import arrow_down from '../../../../../../../../assets/icons/home/bottomContent/chevron-down.svg';
import arrow_up from '../../../../../../../../assets/icons/home/bottomContent/chevron-up.svg';
import normal_btn from '../../../../../../../../assets/icons/home/bottomContent/normal_btn.png';

const Footer = ({ setChoicePack, choicePack }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={style.footer}>
            <div className={style.footer_choicePack}>
                <img className={style.footer_img} src={pack} alt="Pack" />
                <button className={style.footer_choicePackButton} onClick={handleClick}>
                    {choicePack}
                    {isOpen
                        ? <img src={arrow_up} alt="Arrow" />
                        : <img src={arrow_down} alt="Arrow" />
                    }
                </button>
                {isOpen
                    ? <DropdownMenu setChoicePack={setChoicePack} handleClick={handleClick}/>
                    : null
                }
            </div>
            <div className={style.footer_addToCart}>
                <img src={normal_btn} alt="Button" />
            </div>
        </div>
    );
};

export default Footer;
