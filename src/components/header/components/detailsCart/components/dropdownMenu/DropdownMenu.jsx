import style from './DropdownMenu.module.scss';
import Seeds from './components/seeds/Seeds';
import Crackers from './components/crackers/Crackers';
import Checkout from './components/checkout/Checkout';
import { useSelector } from 'react-redux';

const DropdownMenu = () => {
    const crackersList = useSelector(state => state.buyList);

    return (
        <div className={style.dropdownMenu}>
            <Seeds />
            <div className={style.dropdownMenu_cartListCrackers}>
                {crackersList.map((item) => <Crackers key={item.id} cracker={item}/>)}
            </div>
            <div className={style.dropdownMenu_checkout}>
                <Checkout />
            </div>
        </div>
    );
};

export default DropdownMenu;