import style from './CountCart.module.scss';
import cart_count from '../../../../assets/icons/cart_count.svg';
import { useSelector } from 'react-redux';

const CountCart = () => {
    const amount = useSelector(state => state.buyList)

    return (
        <div className={style.cartItemCount}>
            <img src={cart_count} alt="Count Logo" />
            <span className={style.cartCount}>{amount.length}</span>
        </div>
    );
};

export default CountCart;
