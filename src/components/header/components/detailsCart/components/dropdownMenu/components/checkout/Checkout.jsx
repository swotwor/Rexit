import { useSelector } from 'react-redux';
import style from './Checkout.module.scss';
import { amountCostCrackers } from '../../../../../../../../logic/logic';

const Checkout = () => {
    const totalCost = useSelector(state => state.buyList)

    return (
        <div className={style.checkout}>
            <p className={style.checkout_titalCost}>
                TOTAL: <span>{amountCostCrackers(totalCost)}€</span>
            </p>
            <button className={style.checkout_button}>CHECKOUT</button>
        </div>
    );
};

export default Checkout;