import Link from "next/link";
import styles from "./styles.module.scss";
import { ICard, EStatus } from "../../interfaces/ICard";
import { MutableRefObject, useEffect, useRef } from "react";

export function Card(props: ICard) {
    const navRef = useRef<HTMLDivElement>();
    const divContainerRef = useRef<HTMLDivElement>();
    useEffect(() => {

        setClassDiv();

    }, []);
    const showDivContainerRef = (div: MutableRefObject<HTMLDivElement>, string: string) => {
        if (div.current) {
            div.current.classList.toggle(string, true)
        }
    }
    function setClassDiv() {
        if (props.IsRead) {
            showDivContainerRef(navRef, styles.iconRedOff);
            showDivContainerRef(divContainerRef, styles.containerColorOff);
        } else {
            showDivContainerRef(navRef, styles.iconRedOn);
            showDivContainerRef(divContainerRef, styles.containerColorOn);
        }
    }
    setClassDiv();

    return (
        <>
            <div className={styles.container} ref={divContainerRef} >
                <img src={props.urlAvatar}></img>
                <div className={styles.containerRight}>
                    <div className={styles.containerRight2}>
                        <div className={styles.containerMain2}>
                            <div className={styles.containerInfo}>
                                <span><Link className={styles.Link} href={""}>{props.name}</Link>
                                    {" " + props.text1 + " "}
                                    <Link className={styles.Link} href={""}>{props.text2}</Link>
                                </span>
                                <div ref={navRef} ></div>
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

