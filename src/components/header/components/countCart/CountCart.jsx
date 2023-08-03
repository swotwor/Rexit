import style from './CountCart.module.scss';
import cart_count from '../../../../assets/icons/cart_count.svg';

const CountCart = () => {
    return (
        <div className={style.cartItemCount}>
            <img src={cart_count} alt="Count Logo" />
            <span className={style.cartCount}>3</span>
        </div>
    );
};

export default CountCart;
