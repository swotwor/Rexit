import style from './BottomContentFooter.module.scss';
import { useState } from 'react';
import DropdownMenu from './components/dropdownMenu/DropdownMenu';
import pack from '../../../../../../../../assets/icons/home/bottomContent/pack.png';
import arrow_down from '../../../../../../../../assets/icons/home/bottomContent/chevron-down.svg';
import arrow_up from '../../../../../../../../assets/icons/home/bottomContent/chevron-up.svg';
import normal_btn from '../../../../../../../../assets/icons/home/bottomContent/normal_btn.png';

const BottomContentFooter = ({ setChoicePack, choicePack, addCracker }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullBtn, setIsFullBtn] = useState(false);
    
    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={style.bottomContentFooter}>
            <div className={style.bottomContentFooter_choicePack}>
                <img className={style.bottomContentFooter_img} src={pack} alt="Pack" />
                <button className={style.bottomContentFooter_choicePackButton} onClick={handleClick}>
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
            <div
                className={style.bottomContentFooter_addToCart}
                onMouseEnter={() => setIsFullBtn(true)}
                onMouseLeave={() => setIsFullBtn(false)}
                onClick={() => addCracker()}
            >
                {isFullBtn
                    ? <button className={style.bottomContentFooter_addToCartLbBtn}>
                        ADD TO CART
                        <img src={normal_btn} alt="Button"/>
                      </button>
                    : <img className={style.bottomContentFooter_addToCartSmBtn} src={normal_btn} alt="Button" />
                }
            </div>
        </div>
    );
};

export default BottomContentFooter;
