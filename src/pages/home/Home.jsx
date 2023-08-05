import Footer from '../../components/footer/FooterPage';
import style from './Home.module.scss';
import BottomContent from './components/bottomContent/BottomContent';
import TopContent from './components/topContent/TopContent';

const Home = () => {
    return (
        <div className={style.home}>
            <TopContent />
            <BottomContent />
            <Footer />
        </div>
    );
};

export default Home;
