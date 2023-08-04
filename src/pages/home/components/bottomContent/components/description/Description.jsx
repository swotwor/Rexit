import style from './Description.module.scss';
import dough from '../../../../../../assets/backgrounds/home/dough.png';
import cracker from '../../../../../../assets/backgrounds/home/cracker.png';

const Description = () => {
    return (
        <div className={style.description}>
            <p className={style.description_title}>
                ABOUT CRACKER
            </p>
            <div className={style.description_content}>
                <img className={style.description_dough} src={dough} alt="" />
                <p className={style.description_text}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
                </p>
                <div className={style.description_textBackground}/>
                <img className={style.description_cracker} src={cracker} alt="" />
            </div>
        </div>
    );
};

export default Description;