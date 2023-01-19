import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from './../styles/Home.module.scss'
import React from 'react'
import { Header } from '../components/Header'
import { Card } from '../components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Notification Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header></Header>
        <section className={styles.section}>
          <Card urlAvatar={'./assets/images/avatar-angela-gray.webp'}></Card>
          <Card urlAvatar={'./assets/images/avatar-anna-kim.webp'}></Card>
          <Card urlAvatar={'./assets/images/avatar-jacob-thompson.webp'}></Card>
          <Card urlAvatar={'./assets/images/avatar-kimberly-smith.webp'}></Card>
          <Card urlAvatar={'./assets/images/avatar-mark-webber.webp'}></Card>
          <Card urlAvatar={'./assets/images/avatar-nathan-peterson.webp'}></Card>
          <Card urlAvatar={'./assets/images/avatar-rizky-hasanuddin.webp'}></Card>

        </section>
      </main>
    </>
  )
}
