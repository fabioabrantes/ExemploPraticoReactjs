import styles from './Header.module.css';


type PropsType = {
    title: string;
}
export function Header({ title }: PropsType) {
    return (
        <header className={styles.container}>
            <h1>{title}</h1>
        </header>
    )
}