import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.containerNotifications}>
                <label htmlFor="asa">Notifications</label>
                <p className={styles.notificationsCount}>3</p>
            </div>
            <Link className={styles.Link} href={''}>Mark all as read</Link>
        </header >

    )
}