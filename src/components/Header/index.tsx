import { SendHandle } from "child_process";
import Link from "next/link";
import styles from "./styles.module.scss";
interface IHeader {
    callback,
    count: number
}
export function Header(props: IHeader) {
    return (
        <header className={styles.header}>
            <div className={styles.containerNotifications}>
                <label htmlFor="">Notifications</label>
                <p className={styles.notificationsCount}>{props.count}</p>
            </div>
            <button className={styles.Link} onClick={props.callback}>Mark all as read</button>
        </header >

    )
}