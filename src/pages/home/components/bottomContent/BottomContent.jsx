import style from './BottomContent.module.scss';
import Constructor from './components/constructor/Constructor';
import Description from './components/description/Description';

const BottomContent = () => {
    return (
        <section className={style.bottomContent}>
            <Description />
            <Constructor />
        </section>
    );
};

export default BottomContent;
