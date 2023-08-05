import style from './FooterPage.module.scss';
import phone from '../../assets/icons/phone.png';
import share from '../../assets/icons/share.png';
import map_pin from '../../assets/icons/map-pin.png';
import pinterestIcon from '../../assets/icons/pinterestIcon.png';
import facebookIcon from '../../assets/icons/facebookIcon.png';
import instagramIcon from '../../assets/icons/instagramIcon.png';

const FooterPage = () => {
    return (
        <section className={style.footerPage}>
            <div className={style.footerPage_inner}>
                <div className={style.footerPage_phone}>
                    <img className={style.footerPage_phoneIcon} src={phone} alt="Phone" />
                    <div className={style.footer_phoneContent}>
                        <p className={style.footer_phoneTitle}>
                            PHONE
                        </p>
                        <p className={style.footer_phoneItem}>
                            +48 (987) 345 - 6789
                        </p>
                    </div>
                </div>
                <div className={style.footerPage_address}>
                    <img className={style.footerPage_addressIcon} src={map_pin} alt="Address" />
                    <div className={style.footerPage_addressContent}>
                        <p className={style.footerPage_addressTitle}>
                            ADDRESS
                        </p>
                        <p className={style.footerPage_addressInfo}>
                            Cracker Inc.<br/>
                            10 Cloverfield Lane<br/>
                            Berlin IL 10928, Germany
                        </p>
                    </div>
                </div>
                <div className={style.footerPage_share}>
                    <img src={share} alt="Share" className={style.footerPage_shareIcon} />
                    <div className={style.footerPage_shareItems}>
                        <p className={style.footerPage_shareTitle}>SHARE</p>
                        <div className={style.footerPage_shareItem}>
                            <img src={pinterestIcon} alt="Pinteres" />
                            <p>pinterest.com</p>
                        </div>
                        <div className={style.footerPage_shareItem}>
                            <img src={facebookIcon} alt="Facebook" />
                            <p>facebook.com</p>
                        </div>
                        <div className={style.footerPage_shareItem}>
                            <img src={instagramIcon} alt="Instagram" />
                            <p>instagram.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterPage;