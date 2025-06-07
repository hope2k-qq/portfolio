import { useTranslation } from 'react-i18next';

export interface ProjectItem {
    name: string;
    description: string;
    image: string;
    stack: string[];
    gitLink: string;
    liveLink?: string;
}

export const ProjectsData = (): ProjectItem[] => {
    const { t } = useTranslation();
    return [
        {
            name: 'MEWEE',
            description: t('mewee_description'),
            image: '/mewee.png',
            stack: ['React', 'TypeScript', 'SCSS', 'CSS'],
            gitLink: 'https://github.com/Lyakabynka/MEWEE',
        },
        {
            name: 'Portfolio',
            description: t('portfolio_description'),
            image: '/portfolio.png',
            stack: ['React', 'TypeScript', 'SCSS'],
            liveLink: 'https://www.jetbrains.com/webstorm/',
            gitLink: 'https://github.com/hope2k-qq/portfolio',
        },
        {
            name: 'WoDOTA',
            description: t('wodota_description'),
            image: '/wodota.png',
            stack: ['React', 'TypeScript', 'JavaScript', 'SCSS', 'Axios', 'React Router', 'Netlify'],
            liveLink: 'https://wodota.pro',
            gitLink: 'https://github.com/hope2k-qq/WoDOTA',
        },
    ];
};
