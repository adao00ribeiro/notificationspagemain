import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ICard, EStatus } from "../../interfaces/ICard";
import { MutableRefObject, useEffect, useRef } from "react";
import React from "react";

export function Card(props: ICard) {
    const navRef = useRef<HTMLDivElement>();
    const divContainerRef =
        useRef<HTMLDivElement>();
    function setClassDiv() {
        if (props.IsRead) {
            showDivContainerRef(navRef, styles.iconRedOff);
            showDivContainerRef(divContainerRef, styles.containerColorOff);
        } else {
            showDivContainerRef(navRef, styles.iconRedOn);
            showDivContainerRef(divContainerRef, styles.containerColorOn);
        }
    }
    const showDivContainerRef = (div: MutableRefObject<HTMLDivElement>, string: string) => {
        if (div.current) {
            div.current.classList.toggle(string, true)
        }
    }
    const createCallback = React.useCallback(() => {
        setClassDiv();
    }, [setClassDiv]);
    useEffect(() => {

        createCallback();

    }, [createCallback]);


    setClassDiv();

    return (
        <>
            <div className={styles.container} ref={divContainerRef} >
                <div className={styles.containerAvatar}>
                    <Image src={props.urlAvatar} fill alt={"avatar"}></Image>
                </div>
                <div className={styles.containerInfo}>

                    <div className={styles.containerInfoTop}>
                        <div className={styles.groupInfo}>
                            <div className={styles.groupInfoTop}>
                                <span><Link className={styles.Link} href={""}>{props.name}</Link>
                                    {" " + props.text1 + " "}
                                    <Link className={styles.Link} href={""}>{props.text2}
                                        <div ref={navRef} ></div>
                                    </Link>

                                </span>

                            </div>
                            <div className={styles.containerDate}>
                                <label htmlFor="">{props.date}</label>
                            </div>
                        </div>
                        {props.EStatus == EStatus["PICTURE"] &&
                            <div className={styles.containerPicture}>
                                <Image src={props.picture} fill alt="" />
                            </div>
                        }
                    </div>

                    {props.EStatus === EStatus["MESSAGE"] &&
                        <div className={styles.containerInfoBottom}>
                            <Link href={""}>
                                Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and
                                Im already having lots of fun and improving my game.
                            </Link>
                        </div>
                    }
                </div>

            </div >

        </>
    )
}

