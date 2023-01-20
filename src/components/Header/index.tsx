import { SendHandle } from "child_process";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header({ callback }) {
    return (
        <header className={styles.header}>
            <div className={styles.containerNotifications}>
                <label htmlFor="asa">Notifications</label>
                <p className={styles.notificationsCount}>3</p>
            </div>
            <button className={styles.Link} onClick={callback}>Mark all as read</button>
        </header >

    )
}