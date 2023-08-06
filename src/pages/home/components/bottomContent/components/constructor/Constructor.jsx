import style from './Constructor.module.scss';
import Peas from './components/peas/Peas';
import Corn from './components/corn/Corn';
import Wheat from './components/wheat/Wheat';
import Sesame from './components/sesame/Sesame';
import { amountCostCrackers } from '../../../../../../logic/logic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BottomContentFooter from './components/bottomContentFooter/BottomContentFooter';

const Constructor = () => {
    const dispatch = useDispatch();
    const totalCost = useSelector(state => state.buyList);
    const [componentPeas, setComponentPeas] = useState(30);
    const [componentSesame, setComponentSesame] = useState(30);
    const [componentWheat, setComponentWheat] = useState(30);
    const [componentCorn, setComponentCorn] = useState(10);
    const [choicePack, setChoicePack] = useState('CHOOSE YOUR PACK');

    const addCracker = () => {
        dispatch({type: 'ADD_CRACKER', payload: {
            id: totalCost + 1,
            peas: componentPeas,
            sesame: componentSesame,
            wheat: componentWheat,
            corn: componentCorn,
            weight: '0.66',
            cost: '33.00',
        }})
    }

    useEffect(() => {
        const countWithoutCorn = componentPeas + componentSesame + componentWheat;

        setComponentCorn(100 - countWithoutCorn);
    }, [componentPeas, componentSesame, componentWheat]) 
    
    const handleChange = (value, component) => {
        switch (component) {
            case 'peas':
                if (componentCorn !== 0) {
                    setComponentPeas(+value);
                }
                if (componentCorn <= 0 && value < componentPeas) {
                    setComponentPeas(+value)
                }
                break
            case 'sesame':
                if (componentCorn !== 0) {
                    setComponentSesame(+value);
                }
                if (componentCorn <= 0 && value < componentSesame) {
                    setComponentSesame(+value);
                }
                break
            case 'wheat':
                if (componentCorn !== 0) {
                    setComponentWheat(+value);
                }
                if (componentCorn <= 0 && value < componentWheat) {
                    setComponentWheat(+value);
                }
                break
            default:
                break;
        }
    };

    return (
        <div className={style.constructor}>
            <div className={style.constructor_header}>
                <p className={style.constructor_headerTitle}>
                    CRACKER CONSTRUCTOR
                </p>
                <p className={style.constructor_headerCurrentValue}>
                    Current Value: {amountCostCrackers(totalCost)}€
                </p>
            </div>
            <div className={style.constructor_crackerComponents}>
               <Peas value={componentPeas} handleChange={handleChange}/>
               <Sesame value={componentSesame} handleChange={handleChange}/>
               <Wheat value={componentWheat} handleChange={handleChange}/>
               <Corn value={componentCorn} handleChange={handleChange}/>
            </div>
            <BottomContentFooter setChoicePack={setChoicePack} choicePack={choicePack} addCracker={addCracker}/>
        </div>
    );
};

export default Constructor;
