import style from './DropdownMenu.module.scss';

const DropdownMenu = ({ setChoicePack, handleClick }) => {
    const handleClickOnPack = (pack) => {
        setChoicePack(pack);
        handleClick();
    }

    return (
        <div className={style.dropdownMenu}>
            <ul className={style.dropdownMenu_items}>
                <li onClick={() => handleClickOnPack('SMALL PACK')}>SMALL PACK</li>
                <li onClick={() => handleClickOnPack('MEDIUM PACK')}>MEDIUM PACK</li>
                <li onClick={() => handleClickOnPack('LARGE PACK')}>LARGE PACK</li>
            </ul>
        </div>
    );
};

export default DropdownMenu;