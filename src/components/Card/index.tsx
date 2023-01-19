import Link from "next/link";
import { ICard } from "../../interfaces/ICard";
import styles from "./styles.module.scss";
export function Card(props: ICard) {
    return (
        <>
            <div className={styles.teste}>
                <img src={props.urlAvatar}></img>
                <div className={styles.containerInfo}>
                    <div className={styles.containerInfo2}>
                        <Link className={styles.Link} href={""} >Mark Webber </Link>
                        <span>reacted to your recent post</span>
                        <Link className={styles.Link} href={""} >My first tournament today!</Link>
                        <div className={styles.iconRed}></div>
                    </div>

                    <div className={styles.containerDate}>
                        <label htmlFor="">1m ago</label>
                    </div>

                </div>
                <img src="\assets\images\image-chess.webp"></img>
            </div>
            <p>  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                I'm already having lots of fun and improving my game.</p>
        </>
    )
}

