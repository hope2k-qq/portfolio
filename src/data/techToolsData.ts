export interface TechItem {
    name: string;
    icon: string;
}

export interface ToolItem {
    name: string;
    icon: string;
}

export const techItems: TechItem[] = [
    { name: 'React', icon: '/icon/tech/react.svg' },
    { name: 'TypeScript', icon: '/icon/tech/typescript.svg' },
    { name: 'SCSS', icon: '/icon/tech/scss.svg' },
    { name: 'CSS3', icon: '/icon/tech/css.svg' },
    { name: 'React Router', icon: '/icon/tech/react_router.svg' },
    { name: 'Axios', icon: '/icon/tech/axios.svg' },
    { name: 'HTML5', icon: '/icon/tech/html5.svg' },
    { name: 'JavaScript', icon: '/icon/tech/javascript.svg' },
];

export const toolsItems: ToolItem[] = [
    { name: 'WebStorm', icon: '/icon/tools/webstorm.svg' },
    { name: 'JetBrains Rider', icon: '/icon/tools/jetbrains_rider.svg' },
    { name: 'Git', icon: '/icon/tools/git.svg' },
    { name: 'Netlify', icon: '/icon/tools/netlify.svg' },
];
