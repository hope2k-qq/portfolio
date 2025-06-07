export interface TechItem {
    name: string;
    icon: string;
}

export interface ToolItem {
    name: string;
    icon: string;
}

export const techItems: TechItem[] = [
    { name: 'React', icon: '/react.svg' },
    { name: 'TypeScript', icon: '/typescript.svg' },
    { name: 'SCSS', icon: '/scss.svg' },
    { name: 'CSS3', icon: '/css.svg' },
    { name: 'React Router', icon: '/react_router.svg' },
    { name: 'Axios', icon: '/axios.svg' },
    { name: 'HTML5', icon: '/html5.svg' },
    { name: 'JavaScript', icon: '/javascript.svg' },
];

export const toolsItems: ToolItem[] = [
    { name: 'WebStorm', icon: '/webstorm.svg' },
    { name: 'JetBrains Rider', icon: '/jetbrains_rider.svg' },
    { name: 'Git', icon: '/git.svg' },
    { name: 'Netlify', icon: '/netlify.svg' },
];
