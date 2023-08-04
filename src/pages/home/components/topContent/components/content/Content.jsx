import style from './Content.module.scss';

const Content = () => {
    return (
        <div className={style.topContent}>
            <div className={style.topContent_inner}>
                <p className={style.topContent_innerDescription}>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className={style.topContent_innerRightBlock}>
                    <p className={style.topContent_innerTitle}>
                        MOSTLY TASTES WITH FRESHES
                    </p>
                    <button  className={style.topContent_innerButton}>
                        TASTE IT
                    </button>
                </div>
                <div className={style.topContent_innerDescrBack} />
            </div>
        </div>
    );
};

export default Content;