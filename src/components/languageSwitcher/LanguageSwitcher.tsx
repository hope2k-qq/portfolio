import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icon/arrow_down.svg';
import styles from './language_switcher.module.scss'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const currentLang = i18n.language === 'uk' ? 'UA' : 'EN';

    const changeLanguage = (lng: 'en' | 'uk') => {
        i18n.changeLanguage(lng);
        setOpen(false);
    };

    const CurrentIcon = i18n.language === 'uk' ? "uk.svg" : "en.svg";

    return (
        <div className={styles.div}>
            <div className={styles.current_container} onClick={() => setOpen(!open)}>
                <img src={CurrentIcon} className={styles.icon} alt={"currentIcon"}/>
                <div className={styles.lang_text}>{currentLang}</div>
                <ArrowDown className={`${styles.arrow} ${open ? styles.open : ''}`} />
            </div>

            {open && (
                <div className={styles.list}>
                    <div className={styles.list_container} onClick={() => changeLanguage('en')}>
                        <img className={styles.icon} src={"/en.svg"} alt={"en"} />
                        <div className={styles.lang_text}>EN</div>
                    </div>
                    <div className={styles.list_container} onClick={() => changeLanguage('uk')}>
                        <img className={styles.icon} src={"/uk.svg"} alt={"uk"}/>
                        <div className={styles.lang_text}>UA</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
