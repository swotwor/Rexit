import style from './Checkout.module.scss';

const Checkout = () => {
    return (
        <div className={style.checkout}>
            <p className={style.checkout_titalCost}>
                TOTAL: <span>143€</span>
            </p>
            <button className={style.checkout_button}>CHECKOUT</button>
        </div>
    );
};

export default Checkout;