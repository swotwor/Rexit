import style from './Home.module.scss';
import BottomContent from './components/bottomContent/BottomContent';
import TopContent from './components/topContent/TopContent';

const Home = () => {
    return (
        <div className={style.home}>
            <TopContent />
            <BottomContent />
        </div>
    );
};

export default Home;
