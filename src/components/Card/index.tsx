import Link from "next/link";
import styles from "./styles.module.scss";
import { ICard, EStatus } from "../../interfaces/ICard";

export function Card(props: ICard) {
    return (
        <>
            <div className={styles.container}>
                <img src={props.urlAvatar}></img>
                <div className={styles.containerRight}>
                    <div className={styles.containerRight2}>
                        <div className={styles.containerMain2}>
                            <div className={styles.containerInfo}>
                                <span><Link className={styles.Link} href={""}>{props.name}</Link>
                                    {" " + props.text1 + " "}
                                    <Link className={styles.Link} href={""}>{props.text2}</Link>
                                </span>
                                <div className={!props.IsRead ? styles.iconRedOn : styles.iconRedOff} ></div>
                            </div>
                            <div className={styles.containerDate}>
                                <label htmlFor="">{props.date}</label>
                            </div>
                        </div>
                        {props.EStatus == EStatus["PICTURE"] &&
                            <img src={props.picture} alt="" />
                        }
                    </div>
                    {props.EStatus === EStatus["MESSAGE"] &&
                        <Link className={styles.containerMessage} href={""}>
                            Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                            I'm already having lots of fun and improving my game.
                        </Link>
                    }
                </div>
            </div>
        </>
    )
}

