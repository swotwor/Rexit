import style from './TopContent.module.scss';
import Content from './components/content/Content';
import NavigationMenu from './components/navigationMenu/NavigationMenu';

const TopContent = () => {
    return (
    <section className={style.topContent}>
        <NavigationMenu />
        <Content />
    </section>
    );
};

export default TopContent;
