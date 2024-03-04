import styles from './Header.module.css';


type PropsType = {
    title:string;
    name?:string;
    cor?:string;
    children?: React.ReactNode
}
export function Header({title,name="fulano",cor="blue", children}:PropsType){
    return (
        <div className={styles.container} style={{backgroundColor:cor}}>
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>{name}</span>
            {children}
        </div>
    )
}