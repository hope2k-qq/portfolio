import styles from './animated_text.module.scss';

interface AnimatedTextProps {
    text: string;
    className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
    return (
        <h1 className={className}>
            {text.split('').map((char, idx) => (
                <span key={idx} className={styles.letter}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </h1>
    );
}
