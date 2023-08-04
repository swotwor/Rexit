import style from './DetailsCart.module.scss';
import arrow_up from '../../../../assets/icons/arrow_up.svg';
import arrow_down from '../../../../assets/icons/arrow_up.svg';
import { useRef, useState } from 'react';
import DropdownMenu from './components/dropdownMenu/DropdownMenu';
import { useEffect } from 'react';

const DetailsCart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [arrowImage, setArrowImage] = useState(arrow_up);
    const dropdownRef = useRef(null);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={style.cartList} ref={dropdownRef}>
            <div className={style.cartList_content} onClick={handleClick}>
                <p className={style.cartList_title}>DETAILS</p>
                <img className={style.cartList_icon} src={arrowImage} alt="arrow" />
            </div>
            {
                isOpen
                ? <DropdownMenu />
                : null
            }
        </div>
    );
};

export default DetailsCart;
