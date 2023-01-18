import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <label htmlFor="asa">Notifications 3</label>
            <Link href={''}>Mark all as read</Link>
        </header >

    )
}