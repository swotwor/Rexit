import { useSelector } from 'react-redux';
import style from './TotalCart.module.scss';
import { amountCostCrackers } from '../../../../logic/logic';

const TotalCart = () => {
    const totalCost = useSelector(state => state.buyList)

    return (
    <div className={style.cartTotal}>
        TOTAL: {amountCostCrackers(totalCost)}€
    </div>
)};

export default TotalCart;
