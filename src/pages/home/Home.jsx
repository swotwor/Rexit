import style from './Home.module.scss';
import NavigationMenu from './components/navigationMenu/NavigationMenu';

const Home = () => {
    return (
        <div className={style.home}>
            <NavigationMenu />
            
        </div>
    );
};

export default Home;
