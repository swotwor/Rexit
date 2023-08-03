import style from './DropdownMenu.module.scss';
import Seeds from './components/seeds/Seeds';
import Crackers from './components/crackers/Crackers';
import Checkout from './components/checkout/Checkout';

const DropdownMenu = () => {
    return (
        <div className={style.dropdownMenu}>
            <Seeds />
            <div className={style.dropdownMenu_cartListCrackers}>
                <Crackers />
                <Crackers />
                <Crackers />
            </div>
            <div className={style.dropdownMenu_checkout}>
                <Checkout />
            </div>
        </div>
    );
};

export default DropdownMenu;