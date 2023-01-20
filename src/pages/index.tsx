import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from './../styles/Home.module.scss'
import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Data from './../data.json'
import { Card } from '../components/Card'
import { ICard } from '../interfaces/ICard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [newData, setNewData] = useState<ICard[]>([]);
  useEffect(() => {
    setNewData(Data.data);
  });
  const handleButton = () => {
    setNewData((prev) => {
      const test = { ...prev, IsRead: true };
      return test;
    });
  }

  return (
    <>
      <Head>
        <title>Notification Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header callback={handleButton}></Header>
        <section className={styles.section}>
          {newData.map(item => {
            return (
              <Card
                key={item.id}
                id={item.id}
                EStatus={item.EStatus}
                urlAvatar={item.urlAvatar}
                name={item.name}
                text1={item.text1}
                text2={item.text2}
                IsRead={item.IsRead}
                picture={item.picture}
                date={item.date}
                message={item.message}
              ></Card>
            )
          })
          }
        </section>
      </main>
    </>
  )
}
