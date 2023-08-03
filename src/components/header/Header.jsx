import style from './Header.module.scss';
import logo from '../../assets/Logo_cracker.svg';
import CountCart from './components/countCart/CountCart';
import TotalCart from './components/totalCart/TotalCart';
import DetailsCart from './components/detailsCart/DetailsCart';

const Header = () => {
    return (
        <header className={style.header}>
            <section className={style.header_content}>
                <img className={style.header_logo} src={logo} alt="Logo" />
                <div className={style.header_cartInfo}>
                    <CountCart />
                    <TotalCart />
                    <DetailsCart />
                </div>
            </section>
        </header>
    );
};

export default Header;