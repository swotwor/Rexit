import style from './NavigationMenu.module.scss';

const NavigationMenu = () => {
    return (
        <nav className={style.navigationMenu}>
            <ul className={style.navigationMenu_items}>
                <li>HOME</li>
                <li>ABOUT AS</li>
                <li>CONTACTS AS</li>
                <li>CHECKOUT</li>
                <li>ACCOUNT</li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
