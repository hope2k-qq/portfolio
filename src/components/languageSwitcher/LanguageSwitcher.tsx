import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icon/arrow_down.svg';
import styles from './language_switcher.module.scss';

type Language = 'en' | 'uk' | 'cs';

const LANGUAGES: { code: Language; label: string; icon: string }[] = [
    { code: 'en', label: 'EN', icon: '/icon/languages/en.svg' },
    { code: 'uk', label: 'UA', icon: '/icon/languages/uk.svg' },
    { code: 'cs', label: 'CS', icon: '/icon/languages/cs.svg' },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const currentLang = LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0];

    const changeLanguage = (lng: Language) => {
        i18n.changeLanguage(lng);
        setOpen(false);
    };

    return (
        <div className={styles.div}>
            <div style={{ display: 'none' }}>
                {LANGUAGES.map((lang) => (
                    <img key={lang.code} src={lang.icon} alt={lang.code} />
                ))}
            </div>

            <div className={styles.current_container} onClick={() => setOpen(!open)}>
                <img src={currentLang.icon} className={styles.icon} alt={currentLang.code} />
                <div className={styles.lang_text}>{currentLang.label}</div>
                <ArrowDown className={`${styles.arrow} ${open ? styles.open : ''}`} />
            </div>

            {open && (
                <div className={styles.list}>
                    {LANGUAGES.map((lang) => (
                        <div
                            key={lang.code}
                            className={styles.list_container}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            <img className={styles.icon} src={lang.icon} alt={lang.code} />
                            <div className={styles.lang_text}>{lang.label}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
